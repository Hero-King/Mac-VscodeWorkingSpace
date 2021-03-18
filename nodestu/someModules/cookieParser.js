var express = require("express")
var cookieParser = require('cookie-parser')

console.log(cookieParser)
var app = express()
app.use(cookieParser())

app.get('/', function (req, res) {
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)
    res.cookie("username","wangdada")
    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies);
    res.send("我是首页！!！" )
  })

  app.get('/aa', function (req, res) {
      let cookie = req.cookies 
    res.send("我是首页！!!！" + cookie.username)
  })


// 用户可以在客户端手动改变cookie的  主注意安全  -->使用cookie加密
// maxAge: cookie有效期时间
// domain: 多域名之间共享cookie
// path: 表示哪些路径可以使用cookie
// httpOnly: true表示只能在后端设置cookie,不允许JavaScript设置
// secure: 只有在https协议的时候生效

app.listen(3000)