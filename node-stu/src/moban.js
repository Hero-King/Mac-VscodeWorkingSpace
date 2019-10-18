const express = require('express')
const app = express()
const path = require('path')
const arttemplate = require('art-template')

//使得express兼容art-template 模版引擎
app.engine('art', require('express-art-template'))

//设置模版路径app.set('views', '写路径')
app.set('views', path.join(__dirname, 'views'))
//设置模版引擎app.set('view engine', '拓展名')
app.set('view engine', 'art')

app.get('/', function (req, res) {
    res.render('list', { title: 'Hey', message: 'Hello there!' })
})
app.listen(80, () => {
    console.log('running')
})
