import React from 'react'
import Search from './Search';
import List from './List';
//   command + shift + l 多选并编辑
//当我们点击了按钮   最好是在List组件里面发起异步请求  直接更改list的状态信息  然后List里面获取文本框输入内容  需要search传给福父组件  在给子组件

//总体流程是这样的： 点击了onclick  把文本内容发送给App 传给List 在请求
export default class App extends React.Component {
    state = {
        searchname: ''
    }

    searchname = (searchname) => {
        this.setState({
            searchname
        })
    }

    render() {
        const { searchname } = this.state
        return (
            <div className="container">
                <Search searchname={this.searchname}></Search>
                <List searchname={searchname}></List>
            </div>
        )
    }
}