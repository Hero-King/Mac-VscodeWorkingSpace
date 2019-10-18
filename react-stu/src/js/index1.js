import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'

//学习使用JSX语法 -- 安装babel  
/**
 * 这里使用 babel7 去编译 ES6 的代码，需要配置 .babelrc 文件
首先安装对应的插件
 * $ cnpm i -D html-webpack-plugin
$ cnpm i -D babel-loader
$ cnpm i -D @babel/runtime
$ cnpm i -D @babel/preset-env
$ cnpm i -D @babel/plugin-transform-runtime
$ cnpm i -D @babel/core
---------------------！
然后配置// .babelrc

// targets, useBuiltIns 等选项用于编译出兼容目标环境的代码
// 其中 useBuiltIns 如果设为 "usage"
// Babel 会根据实际代码中使用的 ES6/ES7 代码，以及与你指定的 targets，按需引入对应的 polyfill
// 而无需在代码中直接引入 import '@babel/polyfill'，避免输出的包过大，同时又可以放心使用各种新语法特性。
{
  "presets": [
    ["@babel/preset-env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      },
      "useBuiltIns": "usage"
    }]
  ],
  "plugins": [
    "@babel/plugin-transform-runtime"
  ]
}
 * 
 */
console.log(121)
function show(i) {
  return i
}

var show2 = function (o) {
  return o
}

let show3 = (q) => q * 100
console.log(show(3))
console.log(show2(3))
console.log(show3(3))



$(function () {
  const title = '我是标题'
  var arr = [1, 2, 3, 4, 5]
  const myh = <div>
    <span>99999999</span>
    <br></br>呵呵呵呵 {title}{arr}
    <p className='myp'>我用className关键字给P标签添加了class属性</p>
    {/* 我是注释 */}
    思考怎么遍历10个标签？
  </div>

  var arrs = []
  for (let i = 0; i < 10; i++) {
    var myul = <li key={i}>我是第{i}个标签</li>
    arrs.push(myul)
  }
  const myli = <span>
    {arrs}
  </span>

  ReactDOM.render(myh, document.getElementById('dd'))   //必须等到文档加载完成 才能找到DO节点
  ReactDOM.render(myli, document.getElementById('ul1'))

  /*来了 老弟  -----------自定义组件
    两种方式定义的组件的props都是只读的
    但是class中有如下优势：

    -----抽离组件成单独的JSX文件，在src先新建components文件夹，书写Hello.jsx 并且暴露出去
  */
  function Hello(props) {
    return <div>我是自定义组件{props.name}</div>
  }

  ReactDOM.render(<Hello name='啦啦阿拉'></Hello>, document.getElementById('zidingyifunction'))

  class HeHe extends React.Component {
    constructor(...args) {
      super(...args)  //constructor构造器中先调用super--父类构造器  顺便传了参数
      this.state = {
        msg: '我是私有数据'
      }
    }

    render() {
      return <div>我是class定义出来的组件{this.props.name}{this.state.msg}</div>
    }
  }

  ReactDOM.render(<HeHe name='class定义'></HeHe>, document.getElementById('zidingyiclass'))


})

/** 怎么写找官网！！！！
 * 自己实际操作
 *"dependencies": {
    "@babel/polyfill": "^7.4.4",
    "jquery": "^3.4.1",
    "react": "^16.8.6",
    "react-dom": "^16.8.6"
  },
  "devDependencies": {
    "@babel/cli": "^7.5.5",
    "@babel/core": "^7.5.5",
    "@babel/preset-env": "^7.5.5",
    "@babel/preset-react": "^7.0.0",
    "babel-loader": "^8.0.6",
    "webpack": "^4.39.0",
    "webpack-cli": "^3.3.6",
    "webpack-dev-server": "^3.7.2"
 *
 *
 */