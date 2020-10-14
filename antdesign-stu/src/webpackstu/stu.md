### 学习使用webpack
webpack就是把指定的入口文件打包到指定的输出目录中，使得html中只需要加载一个.js文件即可。
指定入口js文件，遍历import语句，使用loader加载其他css.png.等替他格式资源
像jquery这种公共工具，可以使用externals属性指明，webpack不在打包在内

### 安装
不推荐全局安装，因为项目依赖webpack版本不同时候，又得项目将跑不起来
推荐: 局部安装  使用 npx webpack 调用

### loader
注意： loader的顺序是重要的，从右到左，从下到上调用！！
- file-loader 就是把文件复制到指定的目录下，更改成配置的文件名，并返回到代码中  js中引用没有问题 （用于静态资源比较大的场景）
- url-loader  类似file-loader,但是可以把文件做base64加密到bundle.js中，省了http请求 但是加大了bundle.js的大小 （用于静态资源很小的场景） option：{limit属性限制大小}
- css-loader  分析css文件之间的关系（比如某个css通过css语法引入其他css文件）最终把几个css文件合并成一段css
- style-loader 会把css-loader生成的css内容挂载到页面head标签下（用的是style标签方式）
- sass-loader  sass翻译为css
- postcss-loader css3语法自动添加厂商前缀
```
css 引入方式： 
1、链接式
<link type="text/css" rel="styleSheet"  href="CSS文件路径" />
2、导入式
<style type="text/css">
  @import url("css文件路径");
</style>

链接式和导入式的区别
<link>
1、属于XHTML
2、优先加载CSS文件到页面
@import
1、属于CSS2.1
2、先加载HTML结构在加载CSS文件。
```
- imports-loader 使得组件内部的this一直指向windows
### 插件(可以在webpack运行到某个时刻，帮我们做一些事情)
- html-webpack-plugin 打包结束后，自动生成HTML文件，并把打包的js文件引入到其中  可以在实例化时候，传入配置以方便我们使用
- clean-webpack-plugin 帮我们清空打包dist目录下无用的文件

### source map 
在开发者模式下，我们浏览器报错时候希望定位到源代码的哪一行而不是打包后的bundle.js
sourceMap 存放的是打包后的bundle.js中的行  -> 对应的某一个js文件中的哪一行
devtool 有多中方式 model使用development时推荐cheap-module-eval-source-map  线上环境可以使用cheap-module-source-map 或者不用

### dev server
webpack --watch  监听源代码改动，自动打包
webpack-dev-server
webpack-dev-middleware  自己使用express和中间件也可以实现dev-server效果，就是在node中使用webpack

### css modules
所谓的css模块化本质就是 打包css的时候，重命名hash样式名字得到唯一的样式，然后引用的时候使用style.***找到这个唯一的hash样式
import style from './xxx.css'
启用了模块化后xxx.css会暴露出来一个对象，key是classname,value是生成的hash样式名
使用时候class = style.***

### hot module replacement
它能够不变动html的结构，刷新其他资源
比如html页面的结构因为js文件页面变动到一个状态，然后我们要调试样式，使用HMR技术直接改动样式表，页面不会恢复成初始

### code splitting
分割工具块代码和业务代码，使得打包到不同的文件中去，节省浏览器请求资源时间和利用浏览器缓存少加载资源
使用 SplitChunksPlugin 插件