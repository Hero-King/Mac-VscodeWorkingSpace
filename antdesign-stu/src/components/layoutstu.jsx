import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Table, Button } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function(){
    return (
        <Router>
        <div id="datamanage">
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible >
                
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                        <Menu.Item key="3">
                            <Link to="3">3333</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="4">4444</Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to="5">5555</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
                </Sider>
                
                <Content style={{ margin: '0 16px' ,borderWidth: 2 }}>
                    <div  style={{ padding: 24, minHeight: 20 }}>
                        <Switch>
                            <Route exact path="/3">
                                <Fun3></Fun3>
                            </Route>
                            <Route path="/4">
                                
                            </Route>
                        </Switch>
                    </div>
                </Content>
            </Layout>
        </div>
        </Router>
    )
}

function Fun3(){


    return (
        <div>
            <Button>新建模型</Button>
            <Table ></Table>
        </div>
    )
}