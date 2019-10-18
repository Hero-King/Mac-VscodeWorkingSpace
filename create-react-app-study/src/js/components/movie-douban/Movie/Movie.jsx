import React from 'react'
import { Layout, Menu, } from 'antd';
import { Route, Link } from 'react-router-dom'
import MovieList from './MovieList';
const { Content, Sider } = Layout;
export default class Movie extends React.Component {

    render() {
        return (
            <Layout style={{ height: '100%' }}>
                <Sider width={150} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[window.location.hash.split('/')[2]]}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="in_theaters">
                            <Link to='/movie/in_theaters/1'>正在热映</Link>
                        </Menu.Item>
                        <Menu.Item key="coming_soon">
                            <Link to='/movie/coming_soon/1'>即将上映</Link>
                        </Menu.Item>
                        <Menu.Item key="top250">
                            <Link to='/movie/top250/1'>top250</Link>
                        </Menu.Item>

                    </Menu>
                </Sider>
                <Layout style={{ paddingleft: '1px' }}>
                    <Content
                        style={{
                            background: '#fff',
                            padding: 10,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {/* 设置路由匹配规则  设置几个？ 一个就够了 因为都要去找MovieList */}
                        <Route path='/movie/:type/:page' component={MovieList}></Route>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}