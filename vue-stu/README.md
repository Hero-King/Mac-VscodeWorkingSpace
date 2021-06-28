# vue-stu

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
