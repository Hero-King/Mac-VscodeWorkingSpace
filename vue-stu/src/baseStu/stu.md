### vue-devtools 安装

chrome 下载 如果引入的 vue.js 是 production 版本 代码中添加: Vue.config.devtools = true

### 计算属性

计算属性还有两个很实用的小技巧容易被忽略：一是计算属性可以依赖其他计算属性： 二是
计算属性不仅可以依赖当前 Vue 实例的数据，还可以依赖其他实例的数据，

### 样式

如果直接在自定义组件上使用 class 或： class ， 样式规则会直接应用到这个组件的根元素上，
react 的话传入样式需要自定义组件解析后绑定

### 指令

v-else-if 要紧跟 v-if, v-else 要紧 Rli! v-else-if 或 v-if，表达式的值为真时， 当前元素／组件及所
有子节点将被渲染，为假时被移除。如果一次判断的是多个元素，可以在 Vue 扣内置的＜ template>
元素上使用条件指令，最终渲染的结果不会包含该元素，

> v-if 和 v-show
> v-if 和 v-show 具有类似的功能，不过 v-if 才是真正的条件渲染，它会根据表达式适当地销毁
> 或重建元素及绑定的事件或子组件。若表达式初始值为 false ，则一开始元素／组件并不会渲染，只
> 有当条件第一次变为真时才开始编译。
> 而 v-show 只是简单的 css 属性切换，无论条件真与否，都会被编译。相比之下， v-if 更适合
> 条件不经常改变的场景，因为它切换开销相对较大，而 v-s how 适用于频繁切换条件。

### vue 数组更新

Vue 的核心是数据与视图的双向绑定，当我们修改数组时， Vue 会检测到数据变化，所以用 v-for 渲染的视图也会立即更新。
Vue 包含了一组观察数组变异的方法，使用它们改变数组也会触发视图更新：
• push()
• pop()
• shift()
• unshift（）
• splice()
• sort()
• reverse()
使用以上方法会改变被这些方法调用的原始数组，有些方法不会改变原数组，例如：
• filter()
• concat()
• slice()
它们返回的是一个新数组，在使用这些非变异方法时，可以用新数组来替换原数组，

需要注意的是，以下变动的数组中， Vue 是不能检测到的，也不会触发视图更新：
• 通过索引直接设置项，比如 app.books[3] = { ... }
• 修改数组长度，比如叩 p.books.length = 1
第一个问题可以这样解决
this.$set(arr, 3 , data) / Vue.set() / 使用数据 splice 方法

### 表单项去除两边空格

`<input v-model.trim="msg">`

### props

注意，在 Javascript 中对象和数组是引用类型，指向同一个内存空间，所以 props 是对
象和数组时，在子组件内改变是会影响父纽件的。
props 选项的值一般是一个数组，一开始也介绍过，除了数组外，还可以是对
象，当 prop 需要验证时，就需要对象写法。

### 监听触发某事件

vm.$on( event, callback )

### 组件通信

在 Vue . 2.x 中， 推荐使用一个空的 Vue 实例作为中央事件总线（ bu s ），也就是一个中介
`var bus = new Vue()`
兄弟组件之前通过 bus 互相通信 `bus.$emit('事件名',XXX)` 另一边 `bus.$on('事件名',XXX)`

还有两种方法可以实现组件间通信：父链和子组件索引(ref)。
在子组件中，使用 this.$parent 可以直接访问该组件的父实例或组件，父组件也可以通过
this.$children 访问它所有的子组件

```javascript
// 这种方式耦合很重 不推荐
Vue.component (’ component-a ’,{
    template :’<button @click＝” handleEvent ”〉通过父链直接修改数据＜／ button ＞’，
    methods: {
    handleEvent: function () {
        访问到父链后，可以做任何操作，比如直接修改数据
        this.$parent.message ＝’来自组件component-a 的内容’；
        }
    }
})
```

### 内联模板

组件的模板一般都是在 template 选项内定义的， Vue 提供了一个内联模板的功能，在使用组
件时，给组件标签使用 inline- mplate 特性，组件就会把它的内容当作模板，而不是把它当内容分
发，这让模板更灵活。
