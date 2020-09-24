import React, { Component, useState } from 'react';
import $ from 'jquery'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
const { SubMenu } = Menu;
/**
 * 默认情况下 Route 会匹配多个 所以有了exact关键字
 * 
 * 
 */

class RouterApp extends Component {
    render() {
        return (
            <div>   
                <Route path="/Home">
                    <Home/>
                </Route>
                <Route path="/View/:id">
                    <View/>
                </Route>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" >
                Option 1
                </Menu.Item>
                <Menu.Item key="2" >
                Option 2
                </Menu.Item>
                <SubMenu key="sub1"  title={<span><Link to="/home">User</Link></span>}>
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2"  title="Team">
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9"  />
            </Menu>
            </div>
        );
    }
}
class Home extends React.Component {

    componentDidMount(){
        this.setState({
            data: [{

            }]
        })        
    }

    render() {
        return (
            <div className="router-home">
                Home
                
            </div>
        );
    }
}


function View(props) {

    return (
        <div>
            view
        </div>
    );

}

export default RouterApp;

