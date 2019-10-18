import React from 'react'
import Search from './Search';
import List from './List';
//   command + shift + l 多选并编辑
//当我们点击了按钮   最好是在List组件里面发起异步请求  直接更改list的状态信息  

//总体流程是这样的： 点击了onclick  
export default class App extends React.Component {


    render() {

        return (
            <div className="container">
                <Search ></Search>
                <List ></List>
            </div>
        )
    }
}