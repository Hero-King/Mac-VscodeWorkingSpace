import React from 'react'
import { Layout, Menu, Dropdown, Avatar, Badge } from 'antd';
import { UserOutlined, LaptopOutlined, DownOutlined, NotificationOutlined } from '@ant-design/icons';
import { adminRoute } from '../router';
import { connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { logout } from '../utils/auth'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const adminRouteShow = adminRoute.filter(i => i.isShow)

function Frame(props) {
    console.log(props)
    const handleLogOut = (e) => {
        if (e.key === "logout") {
            logout();
            props.history.push("/login")
        }else if(e.key === 'setting'){

        }else if(e.key === 'notices'){
            props.history.push('/admin/notices')
        }
    }

    const menu = (
        <Menu onClick={e => handleLogOut(e)}>
            <Menu.Item key="notices">
                通知中心
          </Menu.Item>
            <Menu.Item key="setting">
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
                <div className="logo" > <img src={require('./logo.png')} style={{height: 40}} alt="加载失败"/>
                </div>

                <Dropdown overlay={menu}>
                    <div>
                        <Avatar>U</Avatar>
                        <Badge dot={!props.store.isAllRead}>
                        <span style={{ color: "white", marginLeft: 10 }}>超级管理员 <DownOutlined /></span>
                        </Badge>
                    </div>
                </Dropdown>

            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={props.location.pathname}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        {
                            adminRouteShow.map((item, index) => {
                                console.log(props.location.pathname)
                                return <Menu.Item key={item.path} onClick={e => props.history.push(e.key)} icon={item.icon.render()}>
                                    {item.title}
                                </Menu.Item>
                            })
                        }

                    </Menu>
                </Sider>

                <Content
                    className="site-layout-background"
                    style={{
                        padding: 16,
                        margin: 0,
                        minHeight: 280,
                        backgroundColor: '#f0f2f5'
                    }}
                >
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default connect(state => ({store: state}))(withRouter(Frame))
