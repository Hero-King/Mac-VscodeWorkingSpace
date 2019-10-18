webpack-dev-server 配置属性
众所周知webpack-dev-server有三种配置方式，有配置文件方式、package.json方式和纯node的API实现方式，桃子叔叔推荐使用的是第一种：webpack.config.js输出对象中的devServer属性中写配置。其中的原因也是很简单，这种方式最有利于大型前端项目的部署和后期维护，为什么呢？balabalabala～～～～～～，桃子叔叔很任性的告诉你这么简单的问题就不多废话了。

这篇博客主要介绍 webpack-dev-server常用的配置属性，几乎涵盖了所有我们项目中能使用到的，如果小盆友们想查看所有的属性，点击这里：webpack-dev-server官方文档 ，本篇博客所有英文的引用部分均来自官方文档。

首先看一下devServer的一个项目中使用的实际例子：

devServer: {
    contentBase: "./",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    host:'0.0.0.0',
    port:7000,
    hot:true,
    inline: true,//实时刷新
    hot:true,//Enable webpack's Hot Module Replacement feature
    compress:true,//Enable gzip compression for everything served
    overlay: true, //Shows a full-screen overlay in the browser
    stats: "errors-only" ,//To show only errors in your bundle
    open:true, //When open is enabled, the dev server will open the browser.
    proxy: {
        "/api": {
            target: "http://localhost:3000",
            pathRewrite: {"^/api" : ""}
        }
    }，//重定向
 }

接下来我们根据上面的实际例子逐条解析，balabalabala～～～开始了：

1、contentBase
Tell the server where to serve content from. This is only necessary if you want to serve static files. devServer.publicPath will be used to determine where the bundles should be served from, and takes precedence.

用于告诉服务器文件的根目录。这主要用来需要引用静态文件的时候。devServer.publicPath被用来规定变异文件的路径地址，在下面将详细介绍

By default it will use your current working directory to serve content, but you can modify this to another directory:

默认情况下就是当前工作的文件夹地址，但是可以修改为其他的地址

contentBase: path.join(__dirname, "public")
1
2、historyApiFallback
When using the HTML5 History API, the index.html page will likely have to be served in place of any 404 responses. Enable this by passing:

这个配置属性是用来应对返回404页面时定向到特定页面用的

By passing an object this behavior can be controlled further using options like rewrites:

语法是向historyApiFallback对象中的rewrites属性传一个对象格式，如下：

historyApiFallback:{
   rewrites:[
      {from:/./,to:'/404.html'}
   ]
  }

3、host
Specify a host to use. By default this is localhost. If you want your server to be accessible externally, specify it like this:

设置服务器的主机号，默认是localhost，但是可以自己进行设置，如：

host: "0.0.0.0"
1
此时，localhost:7000和0.0.0.0:7000都能访问成功


4、port
Specify a port number to listen for requests on:

设置端口号，如下面的7000

devServer: {
   port:7000
}
1
2
3
5、hot 和 inline
自动刷新和模块热替换机制

5.1 hot
Enable webpack’s Hot Module Replacement feature:

热模块替换机制

hot: true
1
Note that webpack.HotModuleReplacementPlugin is required to fully enable HMR. If webpack or webpack-dev-server are launched with the –hot option, this plugin will be added automatically, so you may not need to add this to your webpack.config.js.

注意，如果你的项目中使用了热模块替换机制，HotModuleReplacementPlugin插件会自动添加到项目中，而不需要再在配置文件中做添加。

5.2 inline
Toggle between the dev-server’s two different modes. By default the application will be served with inline mode enabled. This means that a script will be inserted in your bundle to take care of live reloading, and build messages will appear in the browser console.

webpack-dev-server有两种模式可以实现自动刷新和模块热替换机制
1. Iframe mode(默认,无需配置)
页面被嵌入在一个iframe里面，并且在模块变化的时候重载页面
2.inline mode（需配置）添加到bundle.js中
当刷新页面的时候，一个小型的客户端被添加到webpack.config.js的入口文件中

6、compress
这是一个布尔型的值，当它被设置为true的时候对所有的服务器资源采用gzip压缩
采用gzip压缩的优点和缺点：

优点：对JS，CSS资源的压缩率很高，可以极大得提高文件传输的速率，从而提升web性能
缺点：服务端要对文件进行压缩，而客户端要进行解压，增加了两边的负载
7、overlay
Shows a full-screen overlay in the browser when there are compiler errors or warnings. Disabled by default. If you want to show only compiler errors:

用于在浏览器输出编译错误的，默认是关闭的，需要手动打开：

overlay: true
1
如果你想江warnings一同打印出来，可设置：

overlay: {
  warnings: true,
  errors: true
}
1
2
3
4
8、stats
This option lets you precisely control what bundle information gets displayed. This can be a nice middle ground if you want some bundle information, but not all of it.

这个配置属性用来控制编译的时候shell上的输出内容，因为我们并不需要所有的内容，而只是需要部分的如errors等

To show only errors in your bundle:

在shell中只输出errors：

stats: "errors-only"
1
9、open
When open is enabled, the dev server will open the browser.

当open选项被设置为true时，dev server将直接打开浏览器

10、proxy
Proxying some URLs can be useful when you have a separate API backend development server and you want to send API requests on the same domain.

重定向是解决跨域的好办法，当后端的接口拥有独立的API，而前端想在同一个domain下访问接口的时候，可以通过设置proxy实现。

如果后端接口地址是10.10.10.10:3000,你可以这样设置：

proxy: {
  "/api": "http://10.10.10.10:3000"
}
1
2
3
一个 “/api/users”地址的请求将被重定向到”http://10.10.10.10:3000/api/users“,如果不希望”api”在传递中被传递过去，可以使用rewrite的方式实现：

proxy: {
  "/api": {
    target: "http://localhost:3000",
    pathRewrite: {"^/api" : ""}
  }
}
1
2
3
4
5
6
11、publicPath
The bundled files will be available in the browser under this path.
Imagine that the server is running under http://localhost:8080 and output.filename is set to bundle.js. By default the publicPath is “/”, so your bundle is available as http://localhost:8080/bundle.js.

用于设置编译后文件的路径，假设服务器的运行地址是 http://localhost:8080，输出文件名设置为bundle.js，那么默认情况下publicPath是”/”，因此文件地址为http://localhost:8080/bundle.js 如果想要设置为别的路径可以这样：

publicPath: "/assets/"
1
设置后文件地址为：http://localhost:8080/assets/bundle.js
注意：

Make sure publicPath always starts and ends with a forward slash.

确保publicPath的书写规则：前后都有一个斜杠！

---------------------
作者：桃子叔叔
来源：CSDN
原文：https://blog.csdn.net/franktaoge/article/details/80083317
版权声明：本文为博主原创文章，转载请附上博文链接！