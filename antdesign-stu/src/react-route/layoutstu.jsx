import React from "react"
import { BrowserRouter as Router, Route,NavLink, Link, Switch,Prompt } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Table, Button } from 'antd';
import './index.css'
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import Workspace from "./content";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

// Prompt 组件 用于阻止react路由切换  组件可以放在任意需要的地方
// 属性 message 弹出框要展示的信息 string 或者 function 返回true跳转 字符串 阻止跳转
// 属性 when true弹窗 false 顺利跳转 
// 配合 BrowserRouter HashRouter 里面的getUserConfirmation属性
// https://segmentfault.com/a/1190000020241389?utm_source=tag-newest

export default function () {
    return (
        <div id="datamanage">
            <Layout style={{ height: '300px' }}>
                <Sider collapsible >

                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                            <Menu.Item key="3">
                                {/* 注意这里加上/的话跳转到router: basename + home */}
                                <Link to="/home">home</Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                {/* 不加上/ 相当于相对路径,在当前的url后面相对 */}
                                <Link to="fun3">fun3</Link>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Link to="view">view</Link>
                            </Menu.Item>
                            <Menu.Item key="6">
                                {/* activeClassName 选中当前的NavLink时候/当前路由 是这个class */}
                                <NavLink to="topics" activeClassName="hurray">Topics</NavLink>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <NavLink to="/blog/11" activeClassName="hurray">blog</NavLink>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>

                <Content style={{ margin: '0 16px', borderWidth: 2 }}>
                    <div style={{ padding: 24, minHeight: 20 }}>
                        <Workspace/>
                    </div>
                </Content>
            </Layout>
        </div>
    )
}

