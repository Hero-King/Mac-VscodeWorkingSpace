import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import './js/components/searchuser/users_page/index.css'

//导入组件   这个index文件是github搜索用户的的打包入口文件   更名为index2.js
import App from './js/components/searchuser/App'

ReactDOM.render(
    <div>
        <App />
    </div >
    , document.getElementById('root'));