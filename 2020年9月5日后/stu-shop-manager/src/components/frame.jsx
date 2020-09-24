import React from 'react'
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { adminRoute } from '../router';
import { withRouter } from 'react-router-dom'
import { logout } from '../utils/auth'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Frame(props) {
    const handleLogOut = (e) => {
        if (e.key === "logout") {
            logout();
            props.history.push("/login")
        }
    }

    const menu = (
        <Menu onClick={e => handleLogOut(e)}>
            <Menu.Item >
                通知中心
          </Menu.Item>
            <Menu.Item>
                设置
          </Menu.Item>
            <Menu.Item key="logout">
                退出
          </Menu.Item>
        </Menu>
    );



    return (
        <Layout>
            <Header className="header">
                <div className="logo" > <img src={require('./logo.png')} />
                </div>

                <Dropdown overlay={menu}>
                    <div>
                        <Avatar>U</Avatar>
                        <span style={{ color: "white" }}>超级管理员</span>
                    </div>
                </Dropdown>

            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        {
                            adminRoute.map(item => {
                                return <Menu.Item key={item.path} onClick={e => props.history.push(e.key)}>{item.title}</Menu.Item>
                            })
                        }

                    </Menu>
                </Sider>

                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default withRouter(Frame)
