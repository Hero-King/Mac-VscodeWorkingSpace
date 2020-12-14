var http=require('http')
var fs=require('fs')

//创建服务器   实现Apache功能   访问某路径--存在文件则返回   不存在则返回404
http.createServer((req, res) => {
    const url=req.url;
    console.log(url);
    if(url ==='/'){
        res.writeHead(200,{'Content-type':'text/html;charset=utf8'})
        res.end('这是根目录')
    }else {
        var path1 = './node'+url
        console.log(path1)
        fs.readFile(path1,function (err,data) {
            if(err){
                return res.end('404')   //很优秀
            }else {
                res.end(data)
            }

        })
    }
}).listen(3000,'127.0.0.1')