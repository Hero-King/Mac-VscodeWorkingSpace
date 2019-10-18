import React, { Component } from 'react'
import ReactDOM from 'react-dom'
//-------index5.js
export default class App extends Component {

    increment = () => {
        const number = this.select.value
        console.log(this.props);

        this.props.store.dispatch({
            type: 'increment',
            data: number
        })
    }
    decrement = () => {
        const number = this.select.value
        this.props.store.dispatch({
            type: 'decrement',
            data: number
        })
    }


    render() {
        const count = this.props.store.getState()
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
