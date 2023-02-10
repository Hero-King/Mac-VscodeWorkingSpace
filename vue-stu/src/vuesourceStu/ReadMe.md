## Vue 源码解析系列课程

> https://www.bilibili.com/video/BV1iX4y1K72v?p=1&vd_source=98a09dbe1ae09a78798aa64fe9580abc
> 笔记和源码 下载链接：https://pan.baidu.com/s/1QLKyi8NsLf5touOePRfTYg ，提取码：c7zf

### 模板引擎

将数据转变成视图最优雅的方案, 最具有突破意义的是 'mustache.js'

将数据转变成视图从古老到优雅的方案比较:

- 纯 dom 法 笨拙 无实战价值
- 数组 join 法
- es6 反引号
- 模板引擎

#### mustache

umd 包,嵌入标记是{{}} 像胡子, 后面也被 vue 沿用

```
<script src="https://cdn.bootcdn.net/ajax/libs/mustache.js/4.2.0/mustache.js"></script>
```

#### 手动实现

参见 myMustache 项目

### diff 算法

虚拟 DOM: 使用 js 对象描述 DOM 树
使用新的虚拟 DOM 和老的虚拟 DOM 进行 diff (精细化比较),算出最小化更新,最后反应到真实的 DOM 上

#### snabbdom

著名的虚拟 DOM 库,是 diff 算法鼻祖

仓库地址: https://github.com/snabbdom/snabbdom
源码使用 ts 书写, 使用 npm i -D snabbdom 安装 会有编译好的 js 版本 里面多个模块代码拆分的很好

#### h 函数创建虚拟节点 vnode

vnode 结构:

```javascript
{
    children: undefined,
    data: {
        props: {}
    },
    elm: undefined,
    key: undefined,
    sel: 'a',
    text: '哈哈哈'
}
```

#### Diff

diff 算法是一种通过同层的树节点进行比较的高效算法

其有两个特点：

1. 比较只会在同层级进行, 不会跨层级比较(即使是同一片虚拟节点, 但是出现跨级,不会 diff 而是删除从新生成)
2. 在 diff 比较的过程中，循环从两边向中间比较

- 只有是同一个虚拟节点, 才进行精细化比较,否则直接删除就得 插入新的节点  
  如何定义是同一个虚拟节点呢? 选择器相同且 key 相同
