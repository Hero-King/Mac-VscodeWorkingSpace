import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import './js/components/searchuser/users_page/index.css'

//导入组件   这个index文件是github搜索用户的的打包入口文件  使用的是消息订阅发布方式   更名为index3.js
import App from './js/components/searchuser-copy/App'

ReactDOM.render(
    <div>
        <App />
    </div >
    , document.getElementById('root'));