/**
 * post请求的方式采用基于事件的读取操作
 *  
 *
 */
const http = require('http')
const mime = require('../mime.json')
const fs = require('fs')
const path = require('path')
const url = require('url')
const querystring = require('querystring')

// http.createServer((req, res) => {

//     if (req.url.startsWith('/login')) {  //post 请求需要一步一步接受数据
//         let pdata = '';
//         req.on('data', (chunk) => { pdata += chunk })
//         req.on('end', () => {
//             console.log(pdata);
//             let obj = querystring.parse(pdata)
//             console.log(obj.name);
//             res.end(obj.name)
//         })

//     }
// }).listen(80, () => {
//     console.log('server is running ');

// })

//实现登陆校验 访问/login  admin admin
http.createServer((req, res) => {
    if (req.url.startsWith('/login')) {
        //判断是post还是get请求
        if (req.method == 'GET') {   //大写哦！！
            let param = url.parse(req.url, true).query;
            if (param.name == 'admin' && param.password == 'admin') {
                res.end('success')
            } else {
                res.end('fail')
            }
        }
        if (req.method == 'POST') {
            let pdata = ''
            req.on('data', (chunk) => {
                pdata += chunk;
            })
            req.on('end', () => {
                console.log(pdata);
                let obj = querystring.parse(pdata);
                if (obj.name == 'admin' && obj.password == 'admin') {
                    res.end('success')
                }
                else {
                    res.end('fail')
                }
            })
        }
    }
}).listen(4000, () => {
    console.log('server is running ');

})