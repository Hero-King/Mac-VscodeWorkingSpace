var fs=require('fs')
fs.readFile(__dirname+'/11.txt',function (error,data) {
    if(error)
        throw error
    console.log(data);
    //<Buffer 68 61 68 68 61 68 68 61 73 68 61 68 64 0a e5 93 88 e5 93 88 e5 93 88 e5 93 88 e5 93 88 e5 93 88>
    console.log(data.toString())
})

/*
* node 是操作服务器
* 传统的javascript  是操作浏览器DOM
* */
/*fs模块的./当前路径是根目录
    文件写入成功  error是null  data是数据
    写入失败    error是错误信息 data是undefined
*/
fs.writeFile('./node/22.txt','大家好',function (error) {
    if(error){
        console.log('写入失败');
    }else {
        console.log('写入完成 ')

    }
})