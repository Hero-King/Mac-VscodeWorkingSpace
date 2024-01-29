## 流程

### Approve
流程审批组件 
```jsx
/**
 * defaultShowCode: true
 * desc: 组件基础布局, 没有传入instanceId 流程历史不会显示
*/
import React from 'react'
import { Approve } from 'dumi-stu'
import { message } from 'antd'
export default (props) => {
    return <div style={{height: 400}}>
        <Approve taskId="0FF0C0DE-3327-11EC-8282-0242C0A8440F" onCancel={e => message.info("onCancel")}>
        content
    </Approve>
    </div>
}
```

```jsx
/**
 * defaultShowCode: true
 * dsce: content内容后续添加; 使用key欺骗React 强制刷新组件
*/
import React from 'react'
import ReactDOM from 'react-dom'
import { Approve } from 'dumi-stu'
import { Input, Form } from 'antd'
export default (props) => {
    const [taskId,settaskId] = React.useState('0FF0C0DE-3327-11EC-8282-0242C0A8440F')
    const [businessId, setbusinessId] = React.useState('6F7E09FB-E372-11EB-AF1F-0242C0A84413')
    const [instanceId, setinstanceId] = React.useState('55181CA4-EB95-11EB-AA07-0242C0A8440F')
    const [flag, setflag] = React.useState(false)

    return <div>
        <Form name="test-Form" layout="inline" >
            <Form.Item
                name="taskId"
                label="请输入taskId"
                required
            >
                <Input value={taskId} onChange={e => {settaskId(e.target.value); setflag(!flag)}}  />
            </Form.Item>
            <Form.Item
                name="instanceId"
                label="请输入instanceId"
            >
                <Input value={instanceId} onChange={e => setinstanceId(e.target.value) && setflag(!flag)} />
            </Form.Item>
        </Form> 
        <div style={{height: 400}} >
            {
                flag ? <Approve 
                key="1"
                businessId={businessId}
                taskId={taskId}
                instanceId={instanceId}
            >
            content
        </Approve> : <Approve 
                key="2"
                businessId={businessId}
                taskId={taskId}
                instanceId={instanceId}
            >
            content
        </Approve>
            }
        </div>
    </div>

}
```

#### Approve Props
| 字段      | 说明   |             类型  |
| ----------- | ----------- |---------|
| children   | 包裹的组件会被渲染在左侧  | React.Element  |
| taskId      |  任务Id(必传)     | string    |
| instanceId    | 流程Id,传入可展示流程历史    |   string  |
| businessId    | Id    |   string  |
| onRef    |  ref引用  |   function  |
| onCancel | 关闭弹框后的回调 | function   |
| beforeNext | 前往下一个节点前的回调 | function   |

#### 说明
组件在ComponentDidMount中获取数据


### ApproveHistory
流程历史弹框

```jsx
/**
 * defaultShowCode: true
 * desc: 默认传入 historyKey 不会展示内容; 组件嵌套在底层就不会出现这个问题了
*/
import React from 'react'
import { ApproveHistory } from 'dumi-stu'
import { message } from 'antd'
export default (props) => {
    const [historyKey, setHistoryKey] = React.useState('5F13F661-6A0F-11EC-A38F-0242C0A8440D')
    return <div style={{height: 10}}>
        <ApproveHistory historyKey={historyKey} setHistoryKey={setHistoryKey} /> 
    </div>
}
```

```jsx
/**
 * defaultShowCode: true
*/
import React from 'react'
import { ApproveHistory } from 'dumi-stu'
import { message, Button } from 'antd'
export default (props) => {
    const [historyKey, setHistoryKey] = React.useState('')
    return <div style={{height: 10}}>
        <Button onClick={e => setHistoryKey('5F13F661-6A0F-11EC-A38F-0242C0A8440D')}>查看流程历史</Button>
        <ApproveHistory historyKey={historyKey} setHistoryKey={setHistoryKey} /> 
    </div>
}
```

#### ApproveHistory Props
| 字段      | 说明   |             类型  |
| ----------- | ----------- |---------|
| historyKey |  historyKey  | string    |
| setHistoryKey |  setHistoryKey  | function    |

#### 说明
根据historyKey获取数据的时机是componentWillReceiveProps 组件渲染时候直接传入 historyKey 并不会调用接口获取数据进行展示

### ApproveHistoryContent
流程历史嵌入
```jsx
/**
 * defaultShowCode: true
*/
import React from 'react'
import { ApproveHistoryContent } from 'dumi-stu'
import { message, Button } from 'antd'
export default (props) => {
    const [historyKey, setHistoryKey] = React.useState('5F13F661-6A0F-11EC-A38F-0242C0A8440D')
    return <div>
        <ApproveHistoryContent orderId={historyKey}  /> 
    </div>
}
```
#### ApproveHistoryContent Props
| 字段      | 说明   |             类型  |
| ----------- | ----------- |---------|
| orderId |  相当于BusinessId  | string    |


