var http=require('http')
var ejs=require('ejs')
var fs=require('fs')

http.createServer(function (req,res) {
    let url=req.url
    if(url ==='/'){
        fs.readFile()
    }

}).listen(8080,'127.0.0.1');