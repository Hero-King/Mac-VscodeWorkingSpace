var http=require('http');
var msg1=require('./01');     //引入是直接执行 是否加拓展名都一样
var msg2=require('./02');

console.log(msg2.msg);      // undefine 02.js中没有用exports 这个变量
console.log(msg2.msg11);    //  exports 导出了就可以引用了
msg2.show();                  //  show方法导出了故可以引用  
http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
    res.write('你好 ');
    res.end('结束');

}).listen(3030,'127.0.0.1');