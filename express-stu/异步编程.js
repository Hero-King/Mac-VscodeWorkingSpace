// 书写函数，里面需要异步操作的时候怎么返回数据 --》回调
var fs = require('fs')
function findAll (){
    return fs.readFile('./app.js',(err, data) => {
        if (err){
            return err;
        }
        return data;
    })
}

console.log('findAll函数返回值是',findAll());       // findAll函数返回值是 undefined

function findAllAll (){
    var result = fs.readFile('./app.js',(err, data) => {
        if (err){
            return err;
        }
        return data;
    })
    console.log(result);    //undefined 异步操作直接打印了result 
}
findAllAll()

function findAllcallback (callback){
    fs.readFile('./app.js',(err, data) => {
        if (err){
            return callback(err);
        }
        callback(null,data)
    })
}
findAllcallback((err,data)=>{
    console.log(err,data);      //null,<Buffer> .....
})

function fn(){
    setTimeout(()=>{
        var data = 'hello'
    },100)
    // 需求  调用fn（）获取data
}
fn()

function fnn(callback){
    setTimeout(()=>{
        var data = 'hello'
        callback(data)
    },100)
    // 需求  调用fn（）获取data
}
fnn(data =>{
    console.log(data);  //hello
})

