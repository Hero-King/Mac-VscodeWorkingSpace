var express = require('express');
var app = express(); //创建服务器应用程序
/**
 * Using template engines with Express
 * A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.
 * 
 * Some popular template engines that work with Express are Pug, Mustache, and EJS. The Express application generator uses Pug as its default, but it also supports several others.
 * 
 * 

 第一步：To render template files, set the following application setting properties, set in app.js in the default app created by the generator:

    views, (模板文件目录)the directory where the template files are located. Eg: app.set('views', './views'). This defaults to the views directory in the application root directory.

    view engine, (模板引擎)the template engine to use. For example, to use the Pug template engine: app.set('view engine', 'pug').

第二步：Then install the corresponding template engine npm package; for example to install Pug:
    npm install pug --save
第三步： Create a Pug template file named index.pug in the views directory, with the following content:（创建文件）
第四步： Then create a route to render the index.pug file. If the view engine property is not set, you must specify the extension of the view file. Otherwise, you can omit it.(使用render方法渲染)
    app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})
 */

// 配置使用 art-template 模板引擎
// 第一个参数，表示，当渲染以 .art 结尾的文件的时候，使用 art-template 模板引擎
// express-art-template 是专门用来在 Express 中把 art-template 整合到 Express 中
// 虽然外面这里不需要记载 art-template 但是也必须安装
// 原因就在于 express-art-template 依赖了 art-template
// app.engine('art', require('express-art-template'))
app.engine('html', require('express-art-template'))

// Express 为 Response 相应对象提供了一个方法：render
// render 方法默认是不可以使用，但是如果配置了模板引擎就可以使用了
// res.render('html模板文件', {模板数据})
// 第一个参数是模板文件的路径（相对于view文件夹的路径），默认会去项目中的 views 目录查找该模板文件
// 也就是说 Express 有一个约定：开发人员把所有的视图文件都放到 views 目录中

app.get('/',(req,res)=>{
    res.render('index.html')        //想渲染项目下面的index.html
    //Failed to lookup view "index.html" in views directory "D:\Git\Mac-VscodeWorkingSpace\express-stu\views"  因为没有在view文件夹下面

    // get请求获取参数： req.query
})
app.listen(80)
// 如果想要修改默认的 views 目录，则可以
// app.set('views', render函数的默认路径)