## 搭建

使用 HBuilder 创建 uni-ui 模板项目

### 安装UView
#### 方式一 下载安装
打开[插件地址](https://ext.dcloud.net.cn/plugin?id=1593) 使用 HBuilderX 导入插件
如果您的项目是由HBuilder X创建的标准uni-app项目，解压后将uview-ui文件夹，复制到项目根目录。
如果您的项目是由vue-cli模式创建的， 请将下载解压的uview-ui文件夹放到项目的src文件夹中即可。
#### 方式二 npm安装
```js
// npm init -y

// 安装
npm install uview-ui

// 更新
npm update uview-ui
```

删除uni_modules里面的uni-ui 组件库

### 技巧
- 通过敲<u关键字(无需<u-后面的-)，HX会通过弹出提示列出uView的所有组件
- uView有很多的自带的js工具函数，挂载在$u对象中同时挂载到了uni对象上，而$u又挂载在Vue.prototype中，外部的js文件中，通过uni.$u.xxx的形式去调用uView提供的一些工具方法
- 内置了一些常用样式
- $u.toast('弹框提示')
- 路由跳转 使用reLaunch方式 来阻止返回功能


> 后续搭建Uni-app项目的话 直接使用u-view示例项目修改 或者使用dcould提供的uni-starter 或者创建项目引入u-view 插件

## 概念

uni-app 打包成 App 后，支持 webview 渲染和 weex 原生渲染这 2 种引擎

- webview 渲染方式，架构和微信小程序一样。微信小程序的 Hybrid 应用框架是业内体验上的标杆，实践证明这种体验足以承载一线互联网开发商获得上亿用户。uni-app 的 App 端体验同微信小程序，超过其他平台的小程序，超过一般的 hybrid 框架。
- weex 原生渲染方式，是 DCloud 改造了 weex 引擎，在原生渲染引擎上实现了 uni-app 的组件和 API。达到更优秀的用户体验。

条件编译
http://uniapp.dcloud.io/tutorial/platform

nvue (native vue 的缩写)

App.vue是uni-app的主组件，所有页面都是在App.vue下进行切换的，是页面入口文件。应用生命周期仅可在App.vue中监听，在页面监听无效。App.vue中定义globalData, 是简单的全局变量，如果使用状态管理，请使用vuex; js中操作globalData的方式如下： getApp().globalData.text = 'test'




## 技巧 & Tips
- uni-app只有两种环境 dev和pro 使用hbuildx创建的项目 运行菜单就是dev 发行菜单就是pro 使用cli创建的项目也只有这两种 [官方环境变量](https://uniapp.dcloud.net.cn/worktile/running-env.html)
- cli创建的项目需要自行安装postcss postcss-loader node-sass sass sass-loader 等工具
- cli项目webpack提示EMS和CMS方式都使用了问题解决: [一] babel中sourceType = 'unambiguous' [二] 只保留EMS写法 CMS写法去掉
- h5端控制台调试eruda 或者vconsole
- uni-app 打包apk怎么区分测试环境/生产环境 ? 使用多个appid 环境
- uniapp tabBar配置后不显示，无效的问题 ?  tabBar.list数组的第一项必须和pages配置中的第一项要相同。
- app不显示导航栏? pages.style.navigationBarTitleText为"custom" 或者 pages.style.app-plus.titleNView为false
- 导航栏 44px /底部选项卡 50px 的高度是固定的  不可变 因此有了下一条
- App 端，在 pages.json 里的 titleNView 或页面里写的 plus api 中涉及的单位，只支持 px，不支持 rpx。
- static目录存放静态文件,会直接复制到最终的打包目录,不会被编译
- setStorageSyns 是持久化存储

每次新建页面，均需在pages.json中配置pages列表；在 uni-app 项目上右键“新建页面”，HBuilderX会自动在pages.json中完成页面注册，开发更方便。

跨端注意 https://uniapp.dcloud.net.cn/matter.html

### 引用组件
easycom: 只要组件安装在项目根目录或uni_modules的components目录下，并符合components/组件名称/组件名称.vue或uni_modules/插件ID/components/组件名称/组件名称.vue目录结构。就可以不用引用、注册，直接在页面中使用。

### 引用JS

可以安装第三方依赖, 如果项目下没有package.json 执行`npm init -y `生成, 在项目根目录执行命令安装npm包即可

为多端兼容考虑，建议优先从 uni-app插件市场 获取插件。直接从 npm 下载库很容易只兼容H5端。
非 H5 端不支持使用含有 dom、window 等操作的 vue 组件和 js 模块，安装的模块及其依赖的模块使用的 API 必须是 uni-app 已有的 API（兼容小程序 API），比如：支持高德地图微信小程序 SDK。类似jQuery 等库只能用于H5端。
node_modules 目录必须在项目根目录下。不管是cli项目还是HBuilderX创建的项目。
关于ui库的获取，详见多端UI库

### CSS
App 端，在 pages.json 里的 titleNView tabBar 或页面里写的 plus api 中涉及的单位，只支持 px。注意此时不支持 rpx
在 uni-app 中不能使用 * 选择器。
微信小程序自定义组件中仅支持 class 选择器
page 相当于 body 节点，
定义在 App.vue 中的样式为全局样式，作用于每一个页面。App.vue 中通过 @import 语句可以导入外联样式，一样作用于每一个页面。
uni.scss文件里预置了一批scss变量预置。也是全部的

## 鉴权
