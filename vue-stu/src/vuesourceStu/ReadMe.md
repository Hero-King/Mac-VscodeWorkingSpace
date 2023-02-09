## Vue 源码解析系列课程

> https://www.bilibili.com/video/BV1iX4y1K72v?p=1&vd_source=98a09dbe1ae09a78798aa64fe9580abc

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
webpack