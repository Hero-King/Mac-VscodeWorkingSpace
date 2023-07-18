## 学习 electron

### 项目搭建

```
npm init
修改项目入口文件package.json中main
npm install --save-dev electron
```

1. 任何 Electron 应用程序的入口都是 main 文件。 这个文件控制了主进程，它运行在一个完整的 Node.js 环境中，负责控制您应用的生命周期，显示原生界面，执行特殊操作并管理渲染器进程
2. 创建页面,在可以为我们的应用创建窗口前，我们需要先创建加载进该窗口的内容。 在 Electron 中，每个窗口中无论是本地的 HTML 文件还是远程 URL 都可以被加载显示。
3. 导入模块 加载页面 创建窗口
   - 通过预加载脚本从渲染器访问 Node.js。在主进程通过 Node 的全局 process 对象访问这个信息是微不足道的。 然而，你不能直接在主进程中编辑 DOM，因为它无法访问渲染器 文档 上下文。它们存在于完全不同的进程！(这是将 预加载 脚本连接到渲染器时派上用场的地方。 预加载脚本在渲染器进程加载之前加载，并有权访问两个 渲染器全局 (例如 window 和 document) 和 Node.js 环境 -> preload.js)

### electron 流程模型

#### 主进程

每个 Electron 应用都有一个单一的主进程，作为应用程序的入口点。 主进程在 Node.js 环境中运行，这意味着它具有 require 模块和使用所有 Node.js API 的能力。

#### 窗口管理

主进程的主要目的是使用 BrowserWindow 模块创建和管理应用程序窗口。

BrowserWindow 类的每个实例创建一个应用程序窗口，且在单独的渲染器进程中加载一个网页。 您可从主进程用 window 的 webContent 对象与网页内容进行交互。

### 打包
### 老的方式
~electron-packager~
~npm config set ELECTRON_MIRROR http://npm.taobao.org/mirrors/electron/~

### 推荐
```shell

yarn add --dev @electron-forge/cli
npx electron-forge import

yarn make
```
