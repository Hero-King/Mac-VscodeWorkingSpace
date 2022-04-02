# vue-stu

项目使用 vue/cli(其学习记录在下面)

> vue 包 完整版 vs 运行版本
> 完整版：同时包含编译器和运行时的版本。
> 编译器：用来将模板字符串编译成为 JavaScript 渲染函数的代码。
> 运行时：用来创建 Vue 实例、渲染并处理虚拟 DOM 等的代码。基本上就是除去编译器的其它一切。
>
> > 如果你需要在客户端编译模板 (比如传入一个字符串给 template 选项，或挂载到一个元素上并以其 DOM 内部的 HTML 作为模板)，就将需要加上编译器，即完整版

```
// 需要编译器
new Vue({
  template: '<div>{{ hi }}</div>'
})

// 不需要编译器
new Vue({
  render (h) {
    return h('div', this.hi)
  }
})
// 当使用 vue-loader 或 vueify 的时候，*.vue 文件内部的模板会在构建时预编译成 JavaScript。你在最终打好的包里实际上是不需要编译器的，所以只用运行时版本即可。
// 我们也就知道了templete 和 render 关键字的主要区别

> 关闭控制台编译警告
找到webpack配置文件 关闭createLintingRule

> 路由懒加载
import()语法需要 npm install --save-dev @babel/plugin-syntax-dynamic-import

```

> 学习 vue

```

Vue实例对外提供了一些有用的实例属性与方法,用前缀$+属性名/方法名表示,以便于和用户定义属性区分开
vm.$el:根实例的挂载DOM结点
vm.$parent:当前实例的父实例
vm.$children:当前实例的子实例
vm.$root:组件树的根实例,如果没有父实例,vm.$root指向自己
vm.$refs:注册过 ref 特性 的所有 DOM 元素和组件实例
vm.$data:指向实例的data属性
vm.$props:指向当前组件的props对象属性
vm.$watch:指向实例的watch方法
vm.$set:这个方法给实例设置的属性是响应式的.直接设置vm.prop不是响应式的
vm.$mount:这个方法等同于el属性,都是给vue实例挂载DOM结点，底层实现一样
vm.$nextTick:DOM完成更新后，自动执行，调用nextTick中的回调函数

less语法支持: npm i less-loader less -D
安装 element-ui  : npm i element-ui -S

使用项目驱动  https://www.bilibili.com/video/BV1EE411B7SU?p=5  vue实战商城项目
存在跨域问题  我们使用token维护登录状态

vue-router  导航守卫  对于没有登录的用户直接用过url访问需要登录权限的页面的时候使用
```

## Vue draggable

npm i -S vuedraggable

## @vue/cli

项目使用@vue/cli 快速搭建

### CLI

CLI (@vue/cli) 是一个全局安装的 npm 包，提供了终端里的 vue 命令

### CLI 服务

CLI 服务 (@vue/cli-service) 是一个开发环境依赖。它是一个 npm 包，局部安装在每个 @vue/cli 创建的项目中。
CLI 服务是构建于 webpack 和 webpack-dev-server 之上的。它包含了:

- 加载其它 CLI 插件的核心服务；
- 一个针对绝大部分应用优化过的内部的 webpack 配置；
- 项目内部的 vue-cli-service 命令，提供 serve、build 和 inspect 命令。
  > 也就是说他也是个开发 serve 提供了命令:

```
vue-cli-service
--open    在服务器启动时打开浏览器
--copy    在服务器启动时将 URL 复制到剪切版
--mode    指定环境模式 (默认值：development)
--host    指定 host (默认值：0.0.0.0)
--port    指定 port (默认值：8080)
--https   使用 https (默认值：false)
```

vue-cli-service serve 命令会启动一个开发服务器 (基于 webpack-dev-server) 并附带开箱即用的模块热重载 (Hot-Module-Replacement)。
**除了通过命令行参数，你也可以使用 vue.config.js 里的 devServer 字段配置开发服务器。**

查看所有命令 npx vue-cli-service help

### CLI 插件

CLI 插件是向你的 Vue 项目提供可选功能的 npm 包,例如 Babel/TypeScript 转译、ESLint 集成、单元测试和 end-to-end 测试等。Vue CLI 插件的名字以 @vue/cli-plugin- (内建插件) 或 vue-cli-plugin- (社区插件) 开头，非常容易使用。
当你在项目内部运行 vue-cli-service 命令时，它会自动解析并加载 package.json 中列出的所有 CLI 插件。

待学习
eslint-loader
postcss Autoprefixer

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## package.json
### 依赖版本指定: 
- 指定版本：比如1.2.2，遵循“大版本.次要版本.小版本”的格式规定，安装时只安装指定版本。
- 波浪号（tilde）+指定版本：比如~1.2.2，表示安装1.2.x的最新版本（不低于1.2.2），但是不安装1.3.x，也就是说安装时不改变大版本号和次要版本号。
- 插入号（caret）+指定版本：比如ˆ1.2.2，表示安装1.x.x的最新版本（不低于1.2.2），但是不安装2.x.x，也就是说安装时不改变大版本号。需要注意的是，如果大版本号为0，则插入号的行为与波浪号相同，这是因为此时处于开发阶段，即使是次要版本号变动，也可能带来程序的不兼容。
- latest：安装最新版本。

### peerDependencies
你安装的依赖他所依赖的包
stylus-loader:^6.2.0 peerDependencies webpack是v5 但是本项目的webpack`cat node_modules/webpack/package.json  | grep version` 是4.46.0 所以需要降低stylus-loader版本；找到 <a href="https://github.com/webpack-contrib/stylus-loader">stylus-loader github网站</a> 查看不同版本的package.json 例如：4.3.3是支持webpack4的

less-loader: 最新版本也是不支持webpack4的  锁定7.3.0

### flex布局子项目里面放el-table
出现了表格长度无限增长的问题
可以在子项目中添加属性oveflow:auto
