//这是main。js项目js入口文件

//导入jquery包   使用Es6 的import  from   浏览器可能不支持哦
//import $ from 'jquery'
//Uncaught SyntaxError: Unexpected identifier   语法错误 使用node方式可以吗可以吗？  不可以 node是服务器端JS

//const $ = require('jquery')   也不行

import $ from 'jquery' //然后使用webpack 打包  前面的静态页面引入打包后的 .js文件
$(function () {
    $('li:odd').css('background', 'yellow')
    $('li:even').css('background', 'blue')
    $('#btn').click(function () {
        $.ajax({
            type: 'get',
            dataType: 'script',
            url: '/src/hei.js',

        })

        console.log(2133421);
    })
})