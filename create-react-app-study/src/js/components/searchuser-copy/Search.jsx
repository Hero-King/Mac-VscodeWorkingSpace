import React from 'react'
import PubSub from 'pubsub-js'
export default class Search extends React.Component {

    //点击按钮后的处理函数  肯定是拿到数据(有两种方式  有状态--使用input的onChange事件更新state 无状态使用ref 直接操作真实DOM元素) 封装数据  更新App的state
    searchname = () => {
        const inputValue = this.inputName.value.trim()
        //console.log(inputValue)
        //发布消息(search)
        if (inputValue) {
            PubSub.publish('search', inputValue);
        }

    }

    render() {

        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref={(input) => this.inputName = input} />
                    <button onClick={this.searchname}>Search</button>
                </div>
            </section>
        )
    }
}