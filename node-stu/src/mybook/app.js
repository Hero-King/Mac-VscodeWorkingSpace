/**
 * 图书管理系统 --入口文件
 */

const express = require('express')
const bodyparser = require('body-parser')
const template = require('art-template')
const router = require('./router.js')
const app = express()

//下面两个固定写法  是node 获取POST参数的方法
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//使得express兼容art-template 模版引擎
app.engine('art', require('express-art-template'))

//设置模版路径app.set('views', '写路径')
app.set('views', path.join(__dirname, 'views'))
//设置模版引擎app.set('view engine', '拓展名')
app.set('view engine', 'art')

//设置路由  启动服务器
app.use(router)
app.listen(80, () => {
    console.log('running')
})

