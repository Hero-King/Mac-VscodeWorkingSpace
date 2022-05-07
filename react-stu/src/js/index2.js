//  小demo  评论列表  对应index2.html  修改webpack.config.js 中的入口文件 还有生成内存中的index.html的模版文件
import $ from 'jquery'
import React from 'react'
import ReactDom from 'react-dom'
import Comment from '../pages/comments.jsx'

$(function () {
    ReactDom.render(<Comment></Comment>, document.getElementById('div1'))
})