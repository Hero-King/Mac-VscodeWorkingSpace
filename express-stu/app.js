var express = require('express')
var app = express()
//因为express中向外暴露的是函数  所以第一行引入的express是函数 加上（）表示调用 返回值赋给app
app.get('/', function (req, res) {//响应get请求的/路径访问 /aa返回 Cannot GET /aa
    res.end('Hello world');
});
/* app.listen(3000, function () {
    console.log('服务器已启动，监听3000端口');
}) */
var server = app.listen(80, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('服务器已启动，http://%s:%s', host, port)   //这里的%s 和c语言差不多，代表字符串输出，%d代表十进制输出 Mysql中的占位符：_代表单个字符，%代表>=0个字符  like 和not like    JSP 中JSTL表达式用${}取值    JSX中在书写html代码时，在{}中书写JS代码。

})

app.use(function (req, res, next) { //use 匹配相同目录和子目录   根目录可以不写     http://localhost/aa:3000  控制台打印了信息
    console.log('Time: %d', Date.now());
    next();
});
app.get('/aa', function () {
    res.end('aa被访问了')
})