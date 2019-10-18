/**
 * 大文件的操作采用的是流式操作
 *  fs.createReadStream(path[,Option])
 *  fs.createWriteStream(path[,Option])
 * 
 * fs.readfile 读取文件的操作一般只写一次，如果出现多次应该写在第一个回调函数的内部
 */
const fs = require('fs')

fs.createReadStream('node-path.js').pipe(fs.createWriteStream('node-path-beifen.js'))