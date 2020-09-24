var http=require('http');

http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
    res.write('返回数据 ');
    res.end('hhah ');
}).listen(4000,'127.0.0.1');