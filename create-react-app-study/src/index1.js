/**
 * 这个是自己写的第一个React项目  的入口文件名字是index-movie.js
 * 想要运行的话更改名字为index.js 同时改一下index.js为其他文件
 *  对应的组件都在movie目录里面
 */

import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'

//导入组件   这恶搞index文件是豆瓣电影的打包入口文件   更名为index1.js
import App from './js/components/movie-douban/App'

ReactDOM.render(
    <React.Fragment>
        <App />
    </React.Fragment>
    , document.getElementById('root'));


