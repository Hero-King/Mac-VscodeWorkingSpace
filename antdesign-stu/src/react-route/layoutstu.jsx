import React from "react"
import { BrowserRouter as Router, Route,NavLink, Link, Switch } from 'react-router-dom'
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

export default function () {
    return (
        <div id="datamanage">
            <Layout style={{ minHeight: '100vh' }}>
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

