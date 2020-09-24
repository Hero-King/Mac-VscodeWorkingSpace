/*
* 全局变量
*
* */

console.log(__filename)
//输出绝对路径（包含文件名）
// /Users/wangjunjie/IdeaProjects/nodestu/node/globals模块.js
console.log(__dirname)
///Users/wangjunjie/IdeaProjects/nodestu/node
//输出文件绝对路径  不含文件名


////定时函数   返回值用于clearTimeOut()的参数传入
// var timer =setTimeout(function () {
//     console.log(1212)
// },1000)
//
// clearTimeout(timer)
// //不会延时  是因为nodejs是异步的  还没等到延时就已经清空temer了

//正确的处理措施：

var timer1=setTimeout(function () {
    console.log(12);
},1000)
setTimeout(function () {
    clearTimeout(timer1)
},2000)

global.console.log(111)
//global  是可以省略的  相当于浏览器的window

console.log(process.argv);
/*返回   node的命令位置     当前正在执行的js文件的全路径
* [ '/usr/local/bin/node',
  '/Users/wangjunjie/IdeaProjects/nodestu/node/globals模块.js' ]
  *
  *  node globals模块.js 01 03
  * 会01 03 也会添加到数组中  故是node命令的参数
* */