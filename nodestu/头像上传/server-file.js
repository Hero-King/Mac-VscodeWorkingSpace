/*
* 实现功能：书写index表单 上传个人信息,文件到fileupload 并重命名为文件名
*
* */

var http=require('http');
var express=require('express');
var formidable = require('formidable');
var util = require('util');
var fs=require('fs');
var app =express();
http.createServer(function (req, res) {
    console.log('启动成功11');

    if (req.url == '/fileupload' && req.method.toLowerCase() == 'post') {
        // parse a file upload
        var form = new formidable.IncomingForm();

        //上传路径
        form.uploadDir = './fileupload';
        //formidable固定格式
        form.parse(req, function(err, fields, files) {
            res.writeHead(200, {'content-type': 'text/plain;charset=utf8'});
            res.write('received upload:\n\n');

            //重命名文件
            var oldpath='./'+files.touxiang.path;
            var name=files.touxiang.name;
            var newpath='./fileupload/'+name;
            // console.log(name);
            // console.log(oldpath);
            // console.log(newpath);
            fs.rename(oldpath,newpath,function (err1) {
                if (err1)
                    throw err1;
            })
            console.log(util.inspect({fields: fields, files: files}));
            res.end(' 成功');
        });

        return;
    }


}).listen(3000,'127.0.0.1');