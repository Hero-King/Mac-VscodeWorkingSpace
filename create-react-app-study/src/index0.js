import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css' //还没有弄按需要导入  就直接全部倒入ant design样式了
import App from './js/components/pinglun/App.jsx'
import Add from './js/components/pinglun/Add'   //注意点 当我们在引入组件的时候，如果只到那一层目录，没有具体到文件  默认会找index.js文件   可以将鼠标放置在上面的 ‘react-dom’ 观察   当然我们不加拓展名也没有问题


import Routertest from './js/components/Routertest.jsx'

//打包入口


//工具的官方说明文档https://www.html.cn/create-react-app/docs/getting-started/

ReactDOM.render(<div>
    {/* <App />这个组件是create-react-app官方的页面组件 */}
    {/* <Routertest></Routertest>  *学习react-router-dom使用的组件里面包含好几个子组件 */}
    <h2>下面是学习中写到的一些组件注意打开注释使用</h2>
    <App></App>
    <hr></hr>

</div>, document.getElementById('root'));




