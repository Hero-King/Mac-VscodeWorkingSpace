import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'
//这个index。js是和  count-redux项目相配合的  实现简单的计数功能  名字是index5.js

import 'antd/dist/antd.css'
import App from './js/components/count-redux/App'

//书写reducers---counter  根据cation对象的type属性对state做data大小的处理 并返回state
function counter(state = 0, action) {
    switch (action.type) {
        case 'increment':
            return state + action.data * 1
        case 'decrement':
            return state - action.data
        default:
            return state
    }
}

const store = createStore(counter)      //  根据reducer创建全局store
function render() {
    ReactDOM.render(
        <App store={store}></App>
        , document.getElementById('root')
    )
}
render()
store.subscribe(render)