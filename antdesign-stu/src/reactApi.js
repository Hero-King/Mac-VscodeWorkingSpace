import React, { useState, useEffect, useMemo, useContext } from 'react';
// 学习使用react hook

let res = []
for (let index = 0; index < 10; index++) {
    let obj = {
        name: "王大大" + index,
        age: index
    }
    res.push(obj)
}


// 我该如何实现 shouldComponentUpdate?
// 你可以用 React.memo 包裹一个组件来对它的 props 进行浅比较：

// context 上下文  可以理解成全局变量 创建出来的变量一般写在模块中暴露出来
const MyContext = React.createContext("default");
/* 
API : 
<MyContext.Provider value={***}>
<MyContext.Consumer>
  {value => // 基于 context 值进行渲染}
</MyContext.Consumer>

*/

function ReactApi(props) {

    const [result, setresult] = useState(null)
    const [type, settype] = useState("add")

    function fetchData(params) {
        settype("aaa")
        setTimeout(() => {
            setresult(res)
        }, 200);
    }

    useEffect(() => {
        console.log("react Api 组件挂载成功");
        fetchData()
    }, [])

    const ThirdTitleMemo = useMemo(() => <ThirdTitleMemoT result={result} />, [result])

    return <div>
        <ThirdTitle type={type} />
        {ThirdTitleMemo}
        {/* <ThirdTitleMemoT reuslt={result}/>  这种方式 state状态变化,就会重新渲染 使用上面的useMemo只会在result变化才刷新*/}
        <div>
            {
                result && result.map(i =>
                    <div key={i.age} >名字: {i.name}   年龄: {i.age}</div>
                )
            }
        </div>
        <TestContext/>
    </div>
}

function TestContext(props) {
    return <div>
        <MyContext.Provider value="newValue">
            <MyDiv/>
            <MyDivHooks/>
        </MyContext.Provider>
        <MyDiv/>
    </div>
}


function MyDiv(props) {
    return <MyContext.Consumer>   
        {value => <div>{value}</div>}
    </MyContext.Consumer>
}

function MyDivHooks(props) {
    const value = useContext(MyContext)
    return <div>
        Hooks获取context数据： {value}
    </div>
}

/**
 * 如果你在接触 Hook 前已经对 context API 比较熟悉，那应该可以理解，useContext(MyContext) 相当
 * 于 class 组件中的 static contextType = MyContext 或者 <MyContext.Consumer>。
useContext(MyContext) 只是让你能够读取 context 的值以及订阅 context 的变化。你仍然需要在上层组件树中使用 
<MyContext.Provider> 来为下层组件提供 context。
 */



function ThirdTitleMemoT(props) {
    const { result } = props
    function getbody(type) {
        console.log("Memo组件getbody函数被执行了");    //render一次这个组件就会执行一次这个函数
        switch (type) {
            case "add":
                return "新增"
            default:
                return "默认"
        }
    }

    return <div>
        {
            getbody("add")
        }
    </div>

}


function ThirdTitle(props) {
    const { type } = props;
    function getTitle(type) {
        console.log("getTitle函数被执行了");    //render一次这个组件就会执行一次这个函数
        switch (type) {
            case "add":
                return "新增"
            default:
                return "默认"
        }
    }

    const titleMemo = useMemo(() => getTitleMemo(type), [type])

    function getTitleMemo(type) {
        console.log("getTitleMemo函数被执行了");        //只有在type变化的时候才会被执行
        switch (type) {
            case "add":
                return "新增"
            default:
                return "默认"
        }
    }

    return <h3>
        {getTitle(type)} --
        {titleMemo}
    </h3>

}

export default ReactApi