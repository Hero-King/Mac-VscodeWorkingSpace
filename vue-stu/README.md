# vue-stu

> vue包 完整版vs 运行版本
完整版：同时包含编译器和运行时的版本。
编译器：用来将模板字符串编译成为 JavaScript 渲染函数的代码。
运行时：用来创建 Vue 实例、渲染并处理虚拟 DOM 等的代码。基本上就是除去编译器的其它一切。
>> 如果你需要在客户端编译模板 (比如传入一个字符串给 template 选项，或挂载到一个元素上并以其 DOM 内部的 HTML 作为模板)，就将需要加上编译器，即完整版
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

> 学习vue
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

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
