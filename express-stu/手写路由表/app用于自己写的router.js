var express = require('express') //导入第三方模块express，回去node_modules文件夹找express里面的package.json中main属性，如果没有main属性则找express下面的index.js
var app = express() //因为express中向外暴露的是函数  所以第一行引入的express是函数 加上（）表示调用 返回值赋给app
var router = require('./router')        //导入自己写的路由表
router(app);

app.listen(80)  //访问80端口 按照router.js文件路由