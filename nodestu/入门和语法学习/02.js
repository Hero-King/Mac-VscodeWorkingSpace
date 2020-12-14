/*
*   对外直接暴露参数和函数
*
*
* */
var msg='你好呀';
var msg11='哈哈哈';
function show() {
    var id =Math.random()*100;
    console.log(id);
}
exports.msg11=msg11;
exports.show=show;

