import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
//这个index。js是和  count-redux项目相配合的 优化耦合性学习redux目录结构 实现简单的计数功能  名字是index7.js

import 'antd/dist/antd.css'
import App from './js/components/count-redux-react-redux/containers/App'    //前面的App代表的是后面目录下面暴漏出来的组件  后面的App是文件名只不过省略了.jsx
import store from './js/components/count-redux-react-redux/redux/stores'


ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>
    , document.getElementById('root')
)
