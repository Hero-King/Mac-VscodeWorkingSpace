var express = require('express');
var app = express(); //创建服务器应用程序

// 把所有的路由都写在这里面并不好看，我们可以抽离出来专门的路由文件
// 路由表  app.get('/',()=>{})
//             .get('/aa',)
 //            .get('/bb',)
app.get('/', (req, res) => {
    res.end(req.url)
})
  
app.listen(80)