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
    console.log(data.toString());   //如果不指定readFile时候的编码格式，则data 是buffer类型 使用tostring方法可显示成字符串 当然也可以使用readfile 的第二个省略参数设置编码 这时候data就直接是字符串

})

/**
 * fs 模块提供了一个 API，用于以模仿标准 POSIX 函数的方式与文件系统进行交互。
 * 所有文件系统操作都具有同步和异步的形式。
 * 
 * 
 * 
 * 
 */
// 异步的形式总是将完成回调作为其最后一个参数。 传给完成回调的参数取决于具体方法，但第一个参数始终预留用于异常。如果操作成功完成，则第一个参数将为 null 或 undefined。
console.log(fs.readFile('./login',(err,data)=>{
    if (err){
        console.log(err);       //打印错误
        throw err;              //抛出异常
    }else{
        console.log(data);
    }
})); 

// 使用同步的操作发生的异常会立即抛出，可以使用 try…catch 处理，也可以允许冒泡。
// console.log(fs.readFileSync('./login'));         //报错  因为没有那个文件
try {
    console.log(fs.readFileSync('./login'));        //抛出错误
} catch (err) {
    console.log(err);
}

// 使用异步的方法时无法保证顺序。 因此，fs.rename() 和fs.stat（）并列时候，因为 fs.stat() 操作可能在 fs.rename() 操作之前完成导致错误
// 要正确地排序这些操作，则将 fs.stat() 调用移动到 fs.rename() 操作的回调中：