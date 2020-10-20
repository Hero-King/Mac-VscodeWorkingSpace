/**
 * 流（stream）是 Node.js 中处理流式数据的抽象接口。 stream 模块用于构建实现了流接口的对象。

Node.js 提供了多种流对象。 例如，HTTP 服务器的请求和 process.stdout 都是流的实例。

流可以是可读的、可写的、或者可读可写的。 所有的流都是 EventEmitter 的实例。

  访问 stream 模块：
  const stream = require('stream');  尽管理解流的工作方式很重要，但是 stream 模块主要用于开发者创建新类型的流实例。 对于以消费流对象为主的开发者，极少需要直接使用 stream 模块。

  Node.js 中有四种基本的流类型：

Writable - 可写入数据的流（例如 fs.createWriteStream()）。
Readable - 可读取数据的流（例如 fs.createReadStream()）。
Duplex - 可读又可写的流（例如 net.Socket）。
Transform - 在读写过程中可以修改或转换数据的 Duplex 流（例如 zlib.createDeflate()）。

Node.js 创建的流都是运作在字符串和 Buffer（或 Uint8Array）上。 当然，流的实现也可以使用其它类型的 JavaScript 值（除了 null）。 这些流会以“对象模式”进行操作。

当创建流时，可以使用 objectMode 选项把流实例切换到对象模式。 将已存在的流切换到对象模式是不安全的。

 */

//  缓冲： 可写流和可读流都会在内部的缓冲器中存储数据，可以分别使用的 writable.writableBuffer 或 readable.readableBuffer 来获取。  
// 当调用 stream.push(chunk) 时，数据会被缓冲在可读流中。 如果流的消费者没有调用 stream.read()，则数据会保留在内部队列中直到被消费。 
// 当调用 writable.write(chunk) 时，数据会被缓冲在可写流中。 当内部的可写缓冲的总大小小于 highWaterMark 设置的阈值时，调用 writable.write() 会返回 true。 一旦内部缓冲的大小达到或超过 highWaterMark 时，则会返回 false。
// stream API 的主要目标，特别是 stream.pipe()，是为了限制数据的缓冲到可接受的程度，也就是读写速度不一致的源头与目的地不会压垮内存。
// 因为 Duplex 和 Transform 都是可读又可写的，所以它们各自维护着两个相互独立的内部缓冲器用于读取和写入， 这使得它们在维护数据流时，读取和写入两边可以各自独立地运作。 例如，net.Socket 实例是 Duplex 流，它的可读端可以消费从 socket 接收的数据，而可写端则可以将数据写入到 socket。 因为数据写入到 socket 的速度可能比接收数据的速度快或者慢，所以读写两端应该独立地进行操作（或缓冲）。

const http = require('http');

const server = http.createServer((req, res) => {
  // req 是一个 http.IncomingMessage 实例，它是可读流。
  // res 是一个 http.ServerResponse 实例，它是可写流。

  let body = '';
  // 接收数据为 utf8 字符串，
  // 如果没有设置字符编码，则会接收到 Buffer 对象。
  req.setEncoding('utf8');

  // 如果添加了监听器，则可读流会触发 'data' 事件。
  req.on('data', (chunk) => {
    body += chunk;
  });

  // 'end' 事件表明整个请求体已被接收。 
  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      // 响应信息给用户。
      res.write(typeof data);
      res.end();
    } catch (er) {
      // json 解析失败。
      res.statusCode = 400;
      return res.end(`错误: ${er.message}`);
    }
  });
});

server.listen(1337);

// $ curl localhost:1337 -d "{}"
// object
// $ curl localhost:1337 -d "\"foo\""
// string
// $ curl localhost:1337 -d "not json"
// 错误: Unexpected token o in JSON at position 1