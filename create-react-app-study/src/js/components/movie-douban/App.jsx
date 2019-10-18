import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'

//导入antd组件
import { Layout, Menu } from 'antd';
import Home from './Home/Home.jsx';
import Movie from './Movie/Movie';
import About from './About/About';
const { Header, Content, Footer } = Layout;
require('es6-promise').polyfill();

export default class App extends React.Component {
    render() {
        console.log(window.location);
        return (
            <HashRouter>
                <Layout className="layout" style={{ height: '100%' }}>
                    <Header>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            //defaultSelectedKeys={['1']}     //设置死了 刷新就是key=1的Menu  --bug  不管网址是什么  我们应该网址是啥 menu是啥  如下设置

                            defaultSelectedKeys={[window.location.hash.split('/')[1]]}
                            style={{ lineHeight: '64px' }}
                        >
                            {/* <Menu.Item key="1"> */}
                            <Menu.Item key="home">
                                <Link to='/home'>首页</Link>
                            </Menu.Item>
                            {/* <Menu.Item key="2"> */}
                            <Menu.Item key="movie">
                                <Link to='/movie/in_theaters/1'>电影</Link>
                            </Menu.Item>
                            {/* <Menu.Item key="3"> */}
                            <Menu.Item key="about">
                                <Link to='/about'>关于</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ backgroundColor: '#fff', flex: 1 }}>
                        {/* Route是路由规则还是占位符 注意其中的component是小写！！ */}
                        <Route path='/home' component={Home}></Route>
                        <Route path='/movie/' component={Movie}></Route>
                        <Route path='/about' component={About}></Route>

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>WJJ ©2018 Created by Ant UED</Footer>
                </Layout>
            </HashRouter>
        )
    }
}