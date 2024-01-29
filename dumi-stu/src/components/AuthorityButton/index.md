## **鉴权按钮**
判断用户是否有按钮操作权限

### 代码演示
```jsx
/**
 * defaultShowCode: true
*/
import React, { Component,useState } from 'react';
import { AuthorityButton } from 'dumi-stu';
import { message } from "antd"

export default (props) => {
  const handleDelete = (e) => {
    message.warn('are you sure ?')
  }
  return <div>
    <div>
    admin管理员账户鉴权: 
    <AuthorityButton value="添加" operateAuthority="admin"  type="primary" style={{marginLeft: 20}}/>
    </div>

    <div>
    带权限列表校验按钮:
    <AuthorityButton value="删除" operateCode="0000-0001" operateAuthority={["0000-0001","0000-0002"]}  type="danger" style={{marginLeft: 20}} className="fcny" onClick={handleDelete}/>
    </div>

    <div>
    无权限按钮: 
    <AuthorityButton value="添加" operateCode="0000-0003" operateAuthority={["0000-0001","0000-0002"]}  type="primary"/>
    </div>

  </div>
}

```

### props
- value 按钮文本
- operateCode 需要鉴权的操作码
- operateAuthority 用户权限列表,可以从context中获取,也可以指定管理员账户"admin"
- 其他参数参照Antd的的Button