const http = require('http')
const mime = require('../mime.json')
//const server = http.createServer()
const fs = require('fs')
const path = require('path')
const url = require('url')
//"  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "  url的完整格式   get类型的请求使用URL这个模块可以处理 post请求需要使用querystring模块
let str = 'http://www.baidu.com/?ax=12&pass=34'
let res = url.parse(str)    //把一个字符串转换成对象  相反的是URL。format
console.log(res);
/**
 * Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com',
  port: null,
  hostname: 'www.baidu.com',
  hash: null,
  search: '?ax=12&pass=34',
  query: 'ax=12&pass=34',
  pathname: '/',
  path: '/?ax=12&pass=34',
  href: 'http://www.baidu.com/?ax=12&pass=34' }
 *
 */

console.log(res.query);  //zifuchuan  一般采用url.parse(str,true) 表示query是对象
let res2 = url.parse(str, true)
console.log(res2.query.ax);  //12

/**
 * querystring.parse ()  将一个字符串转换成对象
 * querystring.stringfy   将对象拼接成符合URL格式的字符串
 *
 *  */