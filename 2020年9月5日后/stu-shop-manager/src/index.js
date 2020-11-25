import React from 'react';
import ReactDOM from 'react-dom';

// BrowserRouter 浏览器访问不需要加#   HashRouter需要 localhost:3000/#/login
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import 'antd/dist/antd.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { mainRoutes } from './router/index'
import zhCN from 'antd/lib/locale/zh_CN'
import { ConfigProvider } from "antd";  // antd设置语言环境
import { notices } from './store/reducers'

const store = createStore(notices)

// 本项目package.json设置部署在  "homepage": "http://www.heroking.top/shop-stu", 这将使 Create React App 正确地推断出在生成的 HTML 文件中使用的根路径。
//  所以默认的路由要改

ReactDOM.render(
  <Provider store={store}>
    <Router basename='/shop-stu'>
      {/* 表示只会匹配一次 */}
      <ConfigProvider locale={zhCN}>
        <Switch>
          {/* <Route path="/login" component={Login}/>  
        <Route path="/list" component={List} /> */}
          <Route path="/admin" render={routerProp => { console.log(routerProp); return <App {...routerProp} /> }} />
          {
            mainRoutes.map((route, index) => {
              return <Route key={route.path} {...route}></Route>
            })
          }
          <Redirect to="/admin" from="/" />
          <Redirect to="/404" />
          {/* <Route path="/" component={NotFound} /> */}
          {/* 因为不是精准匹配，/ 放在最后也能实现未匹配路由到404的效果 */}
        </Switch>
      </ConfigProvider>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
