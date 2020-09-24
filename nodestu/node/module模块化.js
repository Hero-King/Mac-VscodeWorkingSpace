/*
* 模块化开发
* 前端--标准的模块化规范：
* 1。AMD--requirejs
* 2。CMD--seajs (阿里巴巴生产)
*
* 服务器端的模块化规范
* 1。CommonJS--NodeJS
*   模块化相关的规范--nodejs
*   1。如何定义模块： 一个JS文件就是一个模块，模块内部的成员（变量/函数）都是相互独立的
*   2。模块成员的导出和引入
*
*
* */

var sum =function (a,b) {
    return parseInt(a)+parseInt(b);
}