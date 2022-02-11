---
# title 用于配置该页面的标题，将会被用作该页面标题的子标题以及左侧菜单。
title: FOO默认页
order: 1
# sidemenu: false
# toc 控制锚点目录的显示或位置，值为 false 时不展示，值为 content 时展示在内容区域的右侧（Affix Menu），值为 menu 时会将当前路由的锚点目录展示在左侧菜单中。
# toc: menu
nav:
  title: Foo菜单

---

## FooH2

Demo:

<!-- ```tsx | pure -->
```tsx
/**
 * inline: false
 * compact: true
 * title: 123
 * desc: 我是描述
 * debug: true
 * iframe: false
 */
import React from 'react';

// 这里引入不使用相对路径,直接引用将来生成的包  开发者应该像用户一样使用组件
import { Foo } from 'dumi-stu';

export default () => (
    <div>
        <Foo title="First Demo" />
    </div>
);
```

<Alert type="info">
  注意，内部暂时只能编写 HTML
</Alert>

## 标签测试 <Badge>Hello</Badge>
标签测试

