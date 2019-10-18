import React from 'react'
import ReactDOM from 'react-dom'
//这个index。js是和  count-redux-fenli项目相配合的 优化耦合性学习redux目录结构 实现简单的计数功能  名字是index6.js

import 'antd/dist/antd.css'
import App from './js/components/count-redux-fenli/App'
import store from './js/components/count-redux-fenli/stores'

function render() {
    ReactDOM.render(
        <App store={store}></App>
        , document.getElementById('root')
    )
}
render()
store.subscribe(render)