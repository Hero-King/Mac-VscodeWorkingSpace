const http = require('http')
const fs = require('fs')
const path = require('path')
const querystring = require('querystring')

http.createServer((req, res) => {
    console.log(111);
    console.log(req.url);
    if (req.url.startsWith('/query')) {
        fs.readFile(path.join(__dirname, 'query.html'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-type': 'text/plain;charset=utf8;' })
                res.end('服务器出错')
            }
            res.end(data);
        })
    } else if (req.url.startsWith('/result') && req.method == 'POST') {
        console.log('我是POST请求');
        let results = require('./results.json')
        //let pdata = req.params.kaohao;  express中才支持这种写法
        /**
         * 
         *  post请求参数接收
    如果是post请求，这些参数不是通过url传递的，是包含在request请求体中。请求体里的流需要以事件形式进行接收

    req.on('data',  function(chunk){//通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中

             post  +=  chunk;

  });
         */
        let pdata = '';
        req.on('data', (chunk) => { pdata += chunk })
        req.on('end', () => {
            let obj = querystring.parse(pdata)  //对请求过来的URL处理使用这个模块
            let result = results[obj.kaohao]
            console.log(result);
            fs.readFile('./result.html', 'utf8', (err, data) => {
                if (err) {
                    res.writeHead(500, { 'Content-type': 'text/plain;charset=utf8;' })
                    res.end('读取文件异常')
                }
                data = data.replace('$$chinese$$', result.chinese)  //使用了字符串替换
                data = data.replace('$$math$$', result.math)
                res.end(data)
            })
        })


    } else {
        res.writeHead(500, { 'Content-type': 'text/plain;charset=utf8;' })
        res.end('结束响应')
    }
}).listen(3000, 'localhost', () => {
    console.log('server is running');

})