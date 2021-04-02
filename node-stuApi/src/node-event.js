// 事件模块
const EventEmitter = require('events');

const door = new EventEmitter()

door.on('open', () => {
    console.log('打开')
})

door.emit("open")

process.on("error", (err) => {
    console.log(err);
})