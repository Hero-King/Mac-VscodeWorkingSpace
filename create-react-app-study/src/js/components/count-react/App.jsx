import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class App extends Component {

    state = {
        count: 0   //默认的计数值 是0
    }
    increment = () => {
        const number = this.select.value
        this.setState({
            count: this.state.count + parseInt(number)
        })
    }
    decrement = () => {
        const number = this.select.value
        this.setState({
            count: this.state.count - parseInt(number)
        })
    }


    render() {
        return (
            <div>
                <h2>count数值是：{this.state.count}</h2>
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
