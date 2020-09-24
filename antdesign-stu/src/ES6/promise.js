
import $ from 'jquery'
// Promise 创建
// var promise = new Promise(function(resolve, reject) {
//     // 异步处理
//     // 处理结束后、调用resolve 或 reject
// });

// promise.then() 是 promise 最为常用的方法。 接一个参数是异步执行成功的回调，第二个参数是执行失败的回调
// promise.then(onFulfilled, onRejected)
// promise简化了对error的处理，上面的代码我们也可以这样写：
// promise.then(onFulfilled).catch(onRejected)

// 参见菜鸟教程 jquery的ajax请求参见Someicon.jsx中

$.get("http://127.0.0.1:3000/robots.txt",{},function (data) {
    console.log(data);
});

console.log($.get("http://127.0.0.1:3000/robots.txt",{}));
console.log(11);

