var express = require('express');
var app = express(); //创建服务器应用程序
var bodyParser = require('body-parser')

app.get('/', (req, res) => {
    console.log(req.query);
})

// express获取post参数  使用中间件
// 配置 body-parser 中间件（插件，专门用来解析表单 POST 请求体）
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())
app.post('/', (req, res) => {
    console.log(req.body);      //req.body对象里面存了参数

})

app.listen(80)