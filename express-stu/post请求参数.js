var express = require('express');
var app = express(); //创建服务器应用程序
var bodyParser = require('body-parser')

app.get('/', (req, res) => {
    console.log(req.query);
    console.log(req.body)
    res.send(req.body)
})

// express获取post参数  使用中间件
// 配置 body-parser 中间件（插件，专门用来解析表单 POST 请求体）
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({
//     extended: false
// }))
// parse application/json
app.use(bodyParser.json())
app.post('/', (req, res) => {
    console.log(req.body);      //req.body对象里面存了参数
    res.send(req.body)
})

// postman中的x-www-form-urlencoded 是mock的<form></form>表单提交
// 对于json格式的body ,不需要使用body-parser也可以在req.body中获取的到  因为express默认内置了body-parser
app.listen(80)