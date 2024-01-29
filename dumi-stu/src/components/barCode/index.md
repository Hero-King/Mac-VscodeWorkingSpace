## 条形码
财务共享表单中的条形码

> 使用jsbarcode组件

### 代码演示
```jsx
/**
 * title: 指定Text内容
*/
import React, { Component,useState } from 'react';
import { BarCode } from 'dumi-stu';
import { message, Input, Form } from "antd"

export default (props) => {
    const [title,settitle] = useState("title")

    return <div>
        <div>
            <Form.Item
                label="指定Text内容"
                labelAlign="left"
                labelCol={{
                    span: 3,
                }}
                wrapperCol={{
                    span: 16,
                }}
                >
                <Input value={title} style={{width: 200}} onChange={e => settitle(e.target.value)}/>
            </Form.Item>
        </div>
        <BarCode showStr={title}/>
    </div>
}

```

```jsx
/**
 * title: 指定barCode
 * desc: barCode不能置空
 * defaultShowCode: true
*/
import React, { Component,useState } from 'react';
import { BarCode } from 'dumi-stu';
import { message, Input, Form } from "antd"

export default (props) => {
    const [barCode, setbarCode] = useState("122222334")
    return <div>
        <div>
            <Form.Item
                label="指定barCode内容"
                labelAlign="left"
                labelCol={{
                    span: 3,
                }}
                wrapperCol={{
                    span: 16,
                }}
                >
                <Input value={barCode} style={{width: 200}} onChange={e => e.target.value && setbarCode(e.target.value)} />
            </Form.Item>
        </div>
        <BarCode barCode={barCode}/>
    </div>
}

```

### props
- showStr 条形码上面的标题,jsbarcode的text
- barCode 指定条码上面的标题

### 说明
组件刷新是不及时的!! componentWillReceiveProps 生命周期中this.props还是上次的数据
