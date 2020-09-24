import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router,Switch, Route,Redirect} from 'react-router-dom'
import {adminRoute} from './router/index'
import Frame from './components/frame';
import {isLogin} from './utils/auth'
function App() {
  return isLogin() ? (
    <Frame>
      <Switch>
        { 
          adminRoute.map(route => {
            return <Route key={route.path} path={route.path} exact={route.exact} render={routerProps => {
              return <route.component {...routerProps} />
              // 竟然这么玩
            }}/>
          })
        }
        <Redirect to={adminRoute[0].path} from="/admin"/>
        <Redirect to="/404"/>
      </Switch>

    </Frame>
  ) : <Redirect to="/login"/>
}

export default App;
