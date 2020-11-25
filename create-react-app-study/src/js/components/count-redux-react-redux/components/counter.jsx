import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../redux/actions'
//components 目录主要用于存放UI组件  不涉及redux的API操作  redux都放在containers目录里面

/**index7.js
 * react-redux 是一款react插件
 * 主要是解决App.jsx里面的this.props.store.  的代码繁琐问题和耦合度
 * 使用react-redux 中的Provider组件作为根标签 
 * 自动监听state数据变化  书写格式是不是就不用写render（）函数和store.subscribe
 * 就回到了我们之前的写法    传入store属性
 * 包裹App 
 */

class Counter extends Component {

    constructor(props){
        super(props);
        this.select = React.createRef();
    }

    increment = () => {
        const number = this.select.current.value
        this.props.increment(number)
    }
    decrement = () => {
        const number = this.select.current.value
        this.props.decrement(number)
    }

    render() {
        const {count} = this.props
        return (
            <div>
                <h2>count数值是：{count}</h2>
                <div>
                    <select ref={this.select}>
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

export default connect(
    (state) => ({ count: state })   //是一个函数 将state转换成props
    , { increment, decrement }      //是一个对象，里面存放的是actions里面的函数，就是渲染的组件里面要对数据XX处理 所使用到的XXaction
)(Counter)
