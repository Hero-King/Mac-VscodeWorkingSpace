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

// 大多数 fs 操作接受的文件路径可以指定为字符串、Buffer、或使用 file: 协议的 URL 对象。


// 文件描述符： 在 POSIX 系统上，对于每个进程，内核都维护着一张当前打开着的文件和资源的表格。 每个打开的文件都分配了一个称为文件描述符的简单的数字标识符。 在系统层，所有文件系统操作都使用这些文件描述符来标识和跟踪每个特定的文件。 Windows 系统使用了一个虽然不同但概念上类似的机制来跟踪资源。 为了简化用户的工作，Node.js 抽象出操作系统之间的特定差异，并为所有打开的文件分配一个数字型的文件描述符。

// fs.open() 方法用于分配新的文件描述符。 一旦被分配，则文件描述符可用于从文件读取数据、向文件写入数据、或请求关于文件的信息。
fs.open('./node-Buffer.js', 'r', (err, fd) => {
    if (err) throw err;
    // 其中fd表示文件描述符 nodejs为进程所有打开的文件分配一个数字型的文件描述符
    fs.fstat(fd, (err, stat) => {
        if (err) throw err;
        // 使用文件属性。

        // 始终关闭文件描述符！大多数操作系统限制在任何给定时间内可能打开的文件描述符的数量，
        //   因此当操作完成时关闭描述符至关重要。 如果不这样做将导致内存泄漏，最终导致应用程序崩溃。
        fs.close(fd, (err) => {
            if (err) throw err;
        });
    });
});


// 线程池的使用
// 所有的文件系统 API，除了 fs.FSWatcher() 和那些显式同步的之外，都使用 libuv 的线程池，这对某些应用程序可能会产生意外和负面的性能影响
// fs.Dir 类  代表目录流的类。 由 fs.opendir()、fs.opendirSync() 或 fsPromises.opendir() 创建。
// fs.Dirent 类
// fs.FSWatcher 类
// fs.ReadStream 类   成功调用 fs.createReadStream() 将会返回一个新的 fs.ReadStream 对象。有close open ready事件
// fs.Stats 类  对象提供了关于文件的信息。 从 fs.stat()、fs.lstat() 和 fs.fstat() 及其同步的方法返回的对象都属于此类型。
// fs.WriteStream 类

// 事件
// 'change' 事件  eventType <string> 已发生的更改事件的类型。 filename <string> | <Buffer> 更改的文件名（如果相关或可用）。举列：当监视的目录或文件中发生更改时触发。 在 fs.watch() 可能不提供 filename 参数，这取决于操作系统的支持。 如果提供了 filename，则当调用 fs.watch() 并将其 encoding 选项设置为 'buffer' 时， filename 将是一个 Buffer，否则 filename 将是 UTF-8 字符串。
fs.watch('./node-Buffer.js', { encoding: 'buffer' }, (eventType, filename) => {
    if (filename) {
      console.log(filename);
      // 打印: <Buffer ...>
    }
  });
//   'close' 事件  当监视器停止监视更改时触发。 关闭的 fs.FSWatcher 对象在事件处理函数中不再可用。
// 'error' 事件  当监视文件时发生错误时触发。 发生错误的 fs.FSWatcher 对象在事件处理函数中不再可用。

// fs.access(path[, mode], callback)   测试用户对 path 指定的文件或目录的权限。
// fs.appendFile(path, data[, options], callback)  异步地将数据追加到文件，如果文件尚不存在则创建该文件。 data 可以是字符串或 Buffer。 path <string> | <Buffer> | <URL> | <number> 文件名或文件描述符。如果是文件描述符，记得手动关闭
// fs.chmod(path, mode, callback)  异步地更改文件的权限。 除了可能的异常，完成回调没有其他参数。
// fs.chown(path, uid, gid, callback)  异步地更改文件的所有者和群组。 除了可能的异常，完成回调没有其他参数。
// fs.copyFile(src, dest[, flags], callback)  异步地将 src 拷贝到 dest。 默认情况下，如果 dest 已经存在，则覆盖它。 除了可能的异常，回调函数没有其他参数。 Node.js 不保证拷贝操作的原子性。 如果在打开目标文件用于写入后发生错误，则 Node.js 将尝试删除目标文件。
// fs.createReadStream(path[, options])   返回: <fs.ReadStream>类
// fs.createWriteStream(path[, options])

// 小文件的拷贝直接使用fs  大文件拷贝或者占用内存大的拷贝使用stream