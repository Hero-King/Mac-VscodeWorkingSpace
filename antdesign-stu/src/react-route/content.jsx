import React from 'react'

import InfiniteListExample from './InfiniteListExample'
import { BrowserRouter as Router, Redirect,withRouter,  Route, Link, Switch, useRouteMatch, useParams, useHistory } from 'react-router-dom'

function Workspace(props) {
    console.log(props,'workspace props');

    return (
        <div>
            Workspace
            {/* switch 只能解决匹配到一条规则就退出,不在匹配其他规则的问题 */}
            <Switch>

                {/* 使用render属性 或者函数式组件都有钩子了*/}
                <Route exact path="/fun3" render={(props) => <Fun3 {...props} name="fun3"/>}>
                    
                </Route>
                {/* exact解决的是精准匹配的问题, /home/aa /home都会走下面这个  而有了exact 就不会匹配到/home/aa */}
                <Route path="/home" component={Home} />
                <Route path="/view" component={View} />
                <Route path="/topics">
                    <Topics />
                </Route>
                <Route path="/404" render={() => <div>404</div>} />
                <Redirect to="/404"/>
            </Switch>
        </div>
    )
}

export default Workspace

function Fun3(props) {
    console.log(props,"fun3 props");    //存在路由三个参数
    return (
        <div>
            新建模型
        </div>
    )
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
                <InfiniteListExample/>
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
  