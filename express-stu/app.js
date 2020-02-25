var express = require('express') //导入第三方模块express，回去node_modules文件夹找express里面的package.json中main属性，如果没有main属性则找express下面的index.js
var app = express() //因为express中向外暴露的是函数  所以第一行引入的express是函数 加上（）表示调用 返回值赋给app

// 路由  You can also use app.all() to handle all HTTP methods and app.use() to specify middleware as the callback function 
app.use('/use', (req, res) => {
    res.end('use请求反馈结果')
})
app.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
})
// 下面是四种http请求  get方法返回了app对象（怎么判断？ 变量接受返回值，==判断一下），顾可以链式调用
var appreturn = app.get('/', function (req, res) { //响应get请求的/路径访问 /aa返回 Cannot GET /aa
    res.send('Hello world');
});
// console.log(appreturn === app); //true
app.post('/', function (req, res) {
    res.send('Got a POST request')      //express 提供的API 
});
app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
});
app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})
/* app.listen(3000, function () {
    console.log('服务器已启动，监听3000端口');
}) */

var server = app.listen(80, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('服务器已启动，http://%s:%s', host, port) //这里的%s 和c语言差不多，代表字符串输出，%d代表十进制输出 Mysql中的占位符：_代表单个字符，%代表>=0个字符  like 和not like    JSP 中JSTL表达式用${}取值    JSX中在书写html代码时，在{}中书写JS代码。

})

// app.use(path,callback)中的callback既可以是router对象又可以是函数
// app.get(path,callback)中的callback只能是函数
// 路由规则是app.use(path,router)定义的，router代表一个由express.Router()创建的对象，在路由对象中可定义多个路由规则。可是如果我们的路由只有一条规则时，可直接接一个回调作为简写，也可直接使用app.get或app.post方法。即
// 当一个路径有多个匹配规则时，使用app.use（）

app.use(function (req, res, next) { //use 匹配相同目录和子目录   根目录可以不写     http://localhost/aa:3000  控制台打印了信息
    console.log('Time: %d', Date.now());
    next();
});
app.get('/aa', function () {
    res.end('aa被访问了')
})

// 公开指定目录  当前public目录下文件可以通过/public/文件名 访问  第一个参数省略表示根目录 /
app.use('/public', express.static('./public'))