## 学习rollup打包

### 为什么要学习rollup 而不是使用webpack
我们用到的vue，react脚手架都是基于webpack的，他有各种loader，帮助我们解决各种问题，这针对于开发项目是很有效的，
`但是如果你要开发js库，那webpack的繁琐和打包后的文件体积就不太适用了。有需求就有工具，所以rollup的产生就是针对开发js库的。`

### 主流模块方案
- CJS 使用 require("module") 读取并加载模块。 无法做到提前分析依赖以及 Tree-Shaking 。
- ESM(ECMAScript Module) 使用 import export 来管理依赖;
    - 浏览器直接通过 <script type="module">
    - NodeJS 可以通过使用 mjs 后缀或者在 package.json 添加 "type": "module" 来使用
- UMD  Universal Module Definition，同时兼容 CJS 和 AMD，并且支持直接在前端用 <script src="lib.umd.js"></script> 的方式加载。

### 命令行或者配置文件
