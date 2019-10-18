import React from 'react'
import Home from './Home.jsx'
import Movie from './Movie.jsx'
import { HashRouter, Route, Link } from 'react-router-dom'  //是route！！
//导入antd的DatePicker组件
import { DatePicker } from 'antd'

//全局导入antd的样式表---体积很大  想要按需导入 可以添加babel-plugin-import 然后配置一下
import 'antd/dist/antd.css'
export default class Routertest extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        //当使用Hash Router标签把组件包裹之后，网站就启用路由了 访问的路径加上了#，在一个HashRouter 中只能包裹一个跟标签
        return <HashRouter>
            <div>
                你好
                <DatePicker />
                <Link to='/home'>首页</Link>&nbsp;&nbsp;{/**当点击了之后路径变成了http://localhost:3000/#/home */}
                <Link to='/movie'>电影</Link>&nbsp;&nbsp;
                <Link to='/home/11'>新首页</Link>&nbsp;&nbsp;
                {/* Route创建的标签就是路由规则，其中的PATH就是要匹配的路由。component就是要展示的组件 */}
                {/* Route有两个身份，第一就是路由规则，第二个就是占位符，新的组件放置在此位置 */}
                {/* Route的PATH是模糊匹配的 /movie/aa也是可以匹配的 精确匹配添加exact属性 想匹配/movie/aa 怎么办呢 path=‘/movie/:type’*/}
                <Route path='/home' component={Home}></Route>
                <Route path='/movie' component={Movie}></Route>
                <Route path='/Home/:id' component={Home} exact></Route>
            </div>

        </HashRouter>
    }
}
//学习使用react-route模块 npm i react-router-dom
/**React Router 是一个基于 React 之上的强大路由库，它可以让你向应用中快速地添加视图和数据流，同时保持页面与 URL 间的同步。
 * react-router还是 react-router-dom？
在 React 的使用中，我们一般要引入两个包，react 和 react-dom，那么 react-router 和react-router-dom 是不是两个都要引用呢？
非也，坑就在这里。他们两个只要引用一个就行了，不同之处就是后者比前者多出了 <Link> <BrowserRouter> 这样的 DOM 类组件。
因此我们只需引用 react-router-dom 这个包就行了
 */
//按需导入
//import { HashRouter, Route, Link } from 'react-router-dom'
        //HashRouter 表示一个路由的跟容器，将来所有的路由相关的东西都要包裹在HashRouter里面，而且一个网站中只需要一个HashRouter
        //Route 表示一个路由规则，在Route上有两个重要的属性，path 和 component 绑定URL和组件
//link表示一个路由的链接 相当于<router-link to=""> </router-link>  就是绑定按钮和URL
