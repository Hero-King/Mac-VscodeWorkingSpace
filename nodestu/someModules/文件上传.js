const express = require('express');
const app = express();

const multer = require('multer');

app.post("/upload", (req, res) => {
    console.log(req.file);      // undefined
    res.json({code: 0})
})

// 使用中间件
app.post("/uploadFile",multer().single("file"), (req, res) => {
    console.log(req.query, req.body);
    console.log(req.file);      // 中间件挂载的对象 包含文件内容等信息
    res.json({code: 0})
})

app.listen(80,() => {
    console.log("server is running ")
})