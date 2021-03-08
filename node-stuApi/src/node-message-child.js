process.on('message', (m) => {
    console.log("子进程收到消息",m);
    process.send(`< ${m}`);
    process.send('> 不要回答x3');
});
console.log("子程序执行了");
console.error("子程序error");