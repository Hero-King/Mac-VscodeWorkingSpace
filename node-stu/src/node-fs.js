/**
 * 文件操作
 * 关于文件的所有操作  开发者都已经想好了  我都可以去查询
 * 
 */
const fs = require('fs')
fs.stat('./node-path.js', (err, stat) => {
    if (err) {
        return;
    }
    if (stat.isFile()) {    //有个括号哦  人间是个函数啦
        console.log('wenjian')
    }
    if (stat.isDirectory()) {
        console.log('wenjianjia');
    }
    console.log(stat.birthtime);  //2019-08-25T13:38:51.068Z  文件的出生时间
    console.log(stat.ctime);    //change time       修改时间--文件的状态发生变化--比如权限
    console.log(stat.mtime);    //modified time     修改时间--文件数据发生变化
    console.log(stat.atime);    //access time 访问时间

    //不知道stat里面有什么  打印一下啊或者源码走起
    console.log(stat);   // 打印了这个对象---显示了好多属性 
})  //一般回调函数的对象是error

let stat = fs.statSync('./node-path.js')   //这个方法是同步的

const path = require('path');
let pathstr = path.join(__dirname, 'node-path.js')
fs.readFile(pathstr, (err, data) => {
    if (err) {
        return;
    }
    console.log(data.toString());   //data 是buffer类型 不用tostring方法 可以使用readfile 的第二个省略参数设置编码

})