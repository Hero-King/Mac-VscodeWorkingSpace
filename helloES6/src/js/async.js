
// 是Promise的语法糖
// Async/Await 让 try/catch 可以同时处理同步和异步错误

function ajax() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("返回")
        }, 2000);
    })
}

// ajax().then(value => console.log(value))
console.log("执行了");

// 使得异步代码看起来像同步代码，
// await 操作符用于等待一个 Promise 对象, 它只能在异步函数 async function 内部使用, await后面一个 Promise 对象或者任何要等待的值。同步进程等
// 返回值是Promise的resolve()数据
// async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。 或者使用await 接受这个函数,但是await必须放在async里面
// 可以写个自调用 async

const asy = async () => {
    let res =  await ajax();
    // 会等待ajax()函数执行完成后在执行输出 helloAsync
    console.log("helloAsync");
    return res;
}

asy().then(value => console.log(`我是使用Promise.then接受的数据: ${value}`));
(async () => {
    let aa = await asy();
    console.log(`我是使用Await接受的数据: ${aa}`);
    throw new Error("1111")
})().catch(e => {
    console.log(e);
})