import React, { Component } from 'react'

//components 目录主要用于存放UI组件  不涉及redux的API操作  redux都放在containers目录里面

/**index7.js
 * react-redux 是一款react插件
 * 主要是解决App.jsx里面的this.props.store.  的代码繁琐问题和耦合度
 * 使用react-redux 中的Provider组件作为根标签 
 * 自动监听state数据变化  书写格式是不是就不用写render（）函数和store.subscribe
 * 就回到了我们之前的写法    传入store属性
 * 包裹App 
 */

export default class Counter extends Component {

    increment = () => {
        const number = this.select.value
        console.log(this.props);
        this.props.increment(number)
    }
    decrement = () => {
        const number = this.select.value
        this.props.decrement(number)
    }


    render() {
        const count = this.props.count
        return (
            <div>
                <h2>count数值是：{count}</h2>
                <div>
                    <select ref={(select) => this.select = select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;
                    <button onClick={this.increment}> + </button>
                    <button onClick={this.decrement}> -</button>
                </div>
            </div>
        )
    }
}
