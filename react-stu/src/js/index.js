import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'

$(function () {
    //  对于webpack-dev-server  是一个可执行脚本，可以使用-h查看使用什么参数，本地安装了webpack 和webpack-dev-server 可以在package.json中配置scripts，然后npm run 新定义的命令名字  如npm rum start  对于全局安装的server 直接执行webpack-dev-server（该加参数加参数）如果出错 npm link webpack -D  软链接一下
    $('#mydiv').css('background-color', 'red')
    // 第三个及其以后的参数都是子节点
    const word = React.createElement('div', {}, '谁不是呢')
    const h22 = React.createElement('h2', null, 'react加进来的', '哈哈哈哈', '你看，我也是加进来的', word)

    ReactDOM.render(h22, document.getElementById('mydiv'))
})