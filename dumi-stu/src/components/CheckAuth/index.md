## 鉴权子内容

### 代码演示
```jsx
/**
 * title: 没有权限情况
 * defaultShowCode: true
*/
import React, { Component,useState } from 'react';
import { CheckAuth } from 'dumi-stu';
import { message } from "antd"

export default (props) => {
    return <CheckAuth operateCode="1111111">
        用户有权可见内容
    </CheckAuth>
}
```
```jsx
/**
 * title: 有权限情况,context写法老旧
 * defaultShowCode: true
*/
import React, { Component,useState } from 'react';
import { CheckAuth } from 'dumi-stu';
import { message } from "antd"

export default class extends React.Component {
    render(){
        return <div>
        context写法老旧, 有兴趣可参考: <a href="https://zh-hans.reactjs.org/docs/legacy-context.html">react context</a>
        <CheckAuth >
            用户有权可见内容 1212
        </CheckAuth>
        </div>
    }
}

```