import React, { useEffect, useState, useLayoutEffect, useCallback } from 'react'
import { Dialog, LinkButton } from 'rc-easyui';
import InfiniteListExample from './InfiniteListExample'
import { BrowserRouter as Router, Redirect, withRouter, Route, Link, Switch, useRouteMatch, useParams, useHistory } from 'react-router-dom'
// import $ from 'jquery'

function Workspace(props) {
    console.log(props, 'workspace props');

    return (
        <div>
            Workspace
            {/* switch 只能解决匹配到一条规则就退出,不在匹配其他规则的问题 */}
            <Switch>

                {/* 使用render属性 或者函数式组件都有钩子了*/}
                <Route exact path="/fun3" render={(props) => <Fun3 {...props} name="fun3" />}>

                </Route>
                {/* exact解决的是精准匹配的问题, /home/aa /home都会走下面这个  而有了exact 就不会匹配到/home/aa */}
                <Route path="/home" component={Home} />
                <Route path="/view" component={View} />
                <Route path="/topics">
                    <Topics />
                </Route>
                <Route path="/404" render={() => <div>404</div>} />
                <Redirect to="/404" />
            </Switch>
        </div>
    )
}

export default Workspace

let set = new Set();

function Fun3(props) {
    // console.log(props, "fun3 props");    //存在路由三个参数
    const [count, setcount] = useState(0)
    const [yanchi, setyanchi] = useState(0)
    const [usecallback, setusecallback] = useState(true)

    // 使用函数初始化state  函数只会执行一次 并且在组件一执行就执行   相当于class中构造函数里面初始化数据,是第一个执行的
    const [funInit, setfunInit] = useState(() => {
        console.log("fun3 funinit state init ");
        return true
    })

    useEffect(() => {
        console.log("mount")
        return () => {
            console.log("unmount");
        }
    }, [])

    // 使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕，这让你的应用看起来响应更快。大多数情况下，effect 不需要同步地执行。
    // 如果需要同步的state 使用 useLayoutEffect 它会在所有的 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染。
    // 当你的useEffect里面的操作需要处理DOM,并且会改变页面的样式,使用useLayoutEffect
    useEffect(() => {
        console.log(funInit, "funinit changed")
        document.getElementById("test").style.backgroundColor = "red"
        return () => {
            console.log(funInit, "funinit beforeCange")
        }
    }, [funInit])

    const handleYanchi = e => {
        // 这种方式在1秒内点击多次只会响应一次
        // setTimeout(() => {
        //     setyanchi(yanchi + 1)
        // }, 1000);

        // 这种方式在1秒内点击多次会响应多次 
        setTimeout(() => {
            setfunInit(!funInit)
            setyanchi(preyanchi => preyanchi + 1)
        }, 1000);


        console.log("我是延迟计数");

        // 一秒内点击多次,下面内容会输出多次,会请求多次
        setTimeout(() => {
            console.log("一秒定时器之后执行的,我要开始请求了");
            setTimeout(() => {
                console.log("我请求好了");
            }, 1000);
        }, 1000);
    }

    // 这种方式的事件函数, 在组件刷新,就会重新生成函数,子组件就会跟着从新渲染 set.size()会一直增大
    // function testUseCallback(e) {
    //     console.log("testUseCallback 点击了");
    //     setusecallback(!usecallback)
    // }

    const testUseCallback = useCallback(
        () => {
            console.log("testUseCallback 点击了");
            setusecallback(!usecallback)
        },
        [usecallback]
    )
    set.add(testUseCallback)
    console.log(set.size);

    return (
        <div id="dd">
            <div id="test">新建模型</div>

            <button onClick={e => setcount(count + 1)}>点我计数</button>: {count}
            <button onClick={handleYanchi}>延迟计数</button>: {yanchi}
            <button onClick={e => setfunInit(!funInit)}>改变Test组件的Props(子组件先完成更新渲染,父组件在完成)</button>
            <Test funInit={funInit} />
            <TestUseCallback testUseCallback={testUseCallback} />
            {usecallback ? "true" : "false"}
        </div>
    )
}

/**
 * useCallback其实是利用memoize减少不必要的子组件重新渲染
 *
子组件onChange调用了父组件的handleOnChange
父组件handleOnChange内部会执行setText(e.target.value)引起父组件更新
父组件更新会得到新的handleOnChange，传递给子组件，对于子组件来说接收到一个新的props
子组件进行不必要更新

https://blog.csdn.net/sinat_17775997/article/details/94453167
而且，在函数组件中，react不再区分mount和update两个状态，这意味着函数组件的每一次调用都会执行其内部的所有逻辑，
那么会带来较大的性能损耗。因此useMemo 和useCallback就是解决性能问题的杀手锏。
useMemo和useCallback都会在组件第一次渲染的时候执行，之后会在其依赖的变量发生改变时再次执行；
并且这两个hooks都返回缓存的值，useMemo返回缓存的变量，useCallback返回缓存的函数。
useMemo
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
只有在a b 改变的时候去执行 computeExpensiveValue 函数  把返回值存在memoizedValue中,解决函数式组件return 的每次render
里面使用的函数每次都会执行所带来的的性能问题

useCallback跟useMemo比较类似，但它返回的是缓存的函数

使用useCallback和 react.memo解决
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);

把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，
该回调函数仅在某个依赖项改变时才会更新。当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染
（例如 shouldComponentUpdate）的子组件时，它将非常有用。
useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。

React.memo()如果你的函数组件在给定相同 props 的情况下渲染相同的结果，那么你可以通过将其包装在 React.memo 
中调用，以此通过记忆组件渲染结果的方式来提高组件的性能表现。
这意味着在这种情况下，React 将跳过渲染组件的操作并直接复用最近一次渲染的结果。

 */
const TestUseCallback = React.memo(function TestUseCallback(props) {
    console.log("testUseCallback组件 执行了");
    return <div onClick={props.testUseCallback}>
        useCallback Test
    </div>
})


function Test(props) {
    // usestate 第二个参数啥都没写,那么组件的props或者state变化都会执行

    const [aa, setaa] = useState("")
    useEffect(() => {
        console.log(props)
        return () => {
            console.log(props)
        }
    })
    return <div onClick={e => setaa("aa")}>111Test 组件</div>
}

class Home extends React.Component {

    componentDidMount() {
        console.log(this.props);    // 存在history/location/match属性
        this.setState({
            data: [{

            }]
        })
    }

    render() {
        return (
            <div className="router-home">
                Home
                <InfiniteListExample />
            </div>
        );
    }
}

function Topics(props) {
    console.log(props, 'Topics');    // 不存在router三个属性
    let match = useRouteMatch();

    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
            </Link>
                </li>
            </ul>

            {/* The Topics page has its own <Switch> with more routes
            that build on the /topics URL path. You can think of the
            2nd <Route> here as an "index" page for all topics, or
            the page that is shown when no topic is selected */}
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}

function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
}

function View(props) {
    let history = useHistory();

    function handleClick() {
        history.push("fun3");
    }

    return (
        <div>
            view
            <button type="button" onClick={handleClick}>
                Go fun3
            </button>
        </div>
    );
}


// function BlogPost() {
//     return (
//       <Route
//         path="/blog/:slug"
//         render={({ match }) => {
//           // Do whatever you want with the match...
//           return <div />;
//         }}
//       />
//     );
//   }

//   you can just ??2020年12月8日15:22:52没明白

function BlogPost() {
    let match = useRouteMatch("/blog/:slug");

    // Do whatever you want with the match...
    return <div >
        macth:
    </div>
}
