/*
    Buffer的基本操作 --JS处理字符串的，处理二进制不太方便，node引入了BUffer
    为什么需要 buffer？  Buffer 被引入用以帮助开发者处理二进制数据，在此生态系统中传统上只处理字符串而不是二进制数据。
    在引入 TypedArray 之前，JavaScript 语言没有用于读取或操作二进制数据流的机制。
     Buffer 类是作为 Node.js API 的一部分引入的，用于在 TCP 流、文件系统操作、以及其他上下文中与八位字节流进行交互。
    Buffer本质上就是字节数组
    1、构造方法（类）
    2、静态方法
    3、实例方法
*/

// 实例化buf对象 
let buf = new Buffer(5)
console.log(buf); //打印出<Buffer 00 00 00 00 00> 是一个十六进制数组 --不推荐使用了  应该使用静态方法alloc
// let buf = Buffer.alloc(5);
// console.log(buf); //打印出Buffer 是一个十六进制数组  默认全是0

// let buf = Buffer.from('hello','utf8');
// console.log(buf);       //<Buffer 68 65 6c 6c 6f>  打印出 hello在utf8编码下的二进制表示

// let buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
// console.log(buf.toString()); //buf转成字符串

// -------------------------------------------
// 静态方法
// console.log(Buffer.isEncoding('utf8'));true 验证buffer是否支持某种编码
// console.log(Buffer.isEncoding('gbk'));false
// let buf = Buffer.from('hello');
// console.log(Buffer.isBuffer(buf));true
// console.log(Buffer.isBuffer({}));false 

// let buf = Buffer.from('中国','ascii');
// console.log(Buffer.byteLength(buf));2，buffer的长度
// console.log(buf.toString());乱码--ascii不支持汉字

// let buf1 = Buffer.alloc(3);
// let buf2 = Buffer.alloc(5);
// let buf3 = Buffer.concat([buf1,buf2]);合并多个buffer ，参数是数组格式
// console.log(Buffer.byteLength(buf3));

// let buf1 = Buffer.from('tom');
// let buf2 = Buffer.from('jerry');
// let buf3 = Buffer.concat([buf1,buf2]);
// console.log(Buffer.byteLength(buf3));  8
// console.log(buf3.toString()); tomjerry

// ---------------------------------------
// 实例方法
// let buf = Buffer.alloc(5);
// buf.write('hello',2,2); //向buffer中写入，offset length  字节数
// console.log(buf);    // 00 00 68 65 00

// let buf = Buffer.from('hello');
// let buf1 = buf.slice(2,3); //截取新的buffer对象 start的位置 end的位置
// console.log(buf === buf1);//false
// console.log(buf1.toString());

// toJSON方法不需要显式调用，当JSON.stringify方法调用的时候会自动调用toJSON方法
// const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);

// const buf = Buffer.from('hello');
// const json = JSON.stringify(buf);//把后面的对象转换成字符串
// console.log(typeof (json)); //string
// console.log(typeof (buf)); //object

// console.log(json); //{"type":"Buffer","data":[104,101,108,108,111]}