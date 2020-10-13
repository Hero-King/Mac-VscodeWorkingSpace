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



