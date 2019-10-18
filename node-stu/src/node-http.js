/**
 * 学习实现服务器功能
 *  req对象是Class：http.IncomingMessage的实例对象
 *  res对象是Class：http.ServewrResponsede的实例对象
 *  
 *  学习node第一步肯定是写一个服务器  提供类似tomcat的服务  
 *      --步骤就是获得URL ，fs读取响应的文件 返回data 就可以了
 */

const http = require('http')
const mime = require('../mime.json')
//const server = http.createServer()
const fs = require('fs')
const path = require('path')
//给server绑定一个请求事件  看文档有好几个事件
// server.on('request', (req, res) => {
//     res.write('heihei\n')   //返回数据  可以write多次
//     res.write('nihaoya')
//     res.end('hello')    //通过res.end完成响应  只能写一个并且结束浏览器挂起状态
// })
// server.listen(80)

//MiME类型处理   --当然可以封装成一个方法
http.createServer((req, res) => {
    fs.readFile(path.join(__dirname, req.url), (err, data) => {
        if (err) {
            console.log('文件不存在，404');
            res.writeHead(404, { 'Content-type': 'text/plain;charset=utf8' })
            res.end('wsenjianbucunzai')
        } else {
            let datatype = 'text/html';
            let ext = path.extname(req.url)
            if (mime[ext]) {
                datatype = mime[ext];
            }
            if (datatype.startsWith('text')) {
                datatype += ';charset=utf8'
            }
            res.writeHead(200, { 'Content-type': datatype })
            res.end(data);
        }

    })
}).listen(3000, 'localhost', () => {
    console.log('server is running');

})


