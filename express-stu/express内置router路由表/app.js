var express = require('express') 
var app = express();
var router = require('./express-router')    //引入router容器对象

// app.use('/aa',router)     //将路由容器挂载到app服务中，根目录可以省略  http://localhost/router 不能路由 http://localhost/aa/router 可以路由
app.use(router) 

app.listen(80)