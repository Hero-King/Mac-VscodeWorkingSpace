
// 进程通信 IPC(innerprocess communication)
const { spawn,fork } = require('child_process');
// options.stdio   'inherit'：相当于 ['inherit', 'inherit', 'inherit']  将相应的 stdio 流传给父进程或从父进程传入。
//  在前三个位置中，这分别相当于 process.stdin、 process.stdout 和 process.stderr。
// 'pipe'：在子进程和父进程之间创建管道。 管道的父端作为 child_process 对象上的 subprocess.stdio[fd] 属性暴露给父进程。 为文件描述符 0、1 和 2 创建的管道也可分别作为 subprocess.stdin、subprocess.stdout 和 subprocess.stderr 使用。
const child = spawn('node', ['./node-message-child.js'], { stdio: ["ignore","pipe","inherit","ipc"] });
child.stdout.on("data",(m) => {
    console.log("---" + m.toString() + "---");
})
child.on('message', (m) => {
    console.log("父进程收到消息",m);
});
// 给子进程发送消息 Here Here
child.send('Here Here');


// fork方式  fork() 是 spawn() 的变体，用来创建Node进程，最大的特点是父子进程自带通信机制（IPC管道）：
let n = fork('./node-message-child-fork.js')
n.send({name: "wang"})
n.on("message",m => {
    console.log("fork的子程序发送过来的消息" + m);
})

// 父进程：

// child.on('message') 收

// child.send() 发

// 子进程：

// process.on('message') 收

// process.send() 发

