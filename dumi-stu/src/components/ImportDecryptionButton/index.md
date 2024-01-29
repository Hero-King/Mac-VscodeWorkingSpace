## 批导解密按钮
财务共享中excel文件解密批导

### 代码示例
```jsx
/**
 * defaultShowCode: true
*/
import React from 'react'
import {Form, Select, Input} from 'antd'
import { ImportDecryptionButton } from 'dumi-stu'
export default (props) => {
    const [json, setjson] = React.useState('')
    const [disabled, setdisabled] = React.useState(false);
    const [label,setlabel] = React.useState('批量导入');

    return <div>
        <div>
        <Form name="test-Form" layout="inline" style={{height: 50}}>
            <Form.Item
                name="disabled"
                label="禁用状态"
            >
                <Select onChange={v => setdisabled(v)} style={{width: 100}}>
                    <Select.Option value={true} >禁用 </Select.Option>
                    <Select.Option value={false} >启用 </Select.Option>
                </Select>
            </Form.Item>
            <Form.Item
                name="label"
                label={"按钮文本"}
            >
                <Input
                    style={{ }}
                    onChange = {e => setlabel(e.target.value)}
                />
            </Form.Item>
        </Form> 
        </div>
        <ImportDecryptionButton btnType="primary" label={label} prefixCls="fcny" onChange={v => setjson(v)}
            disabled={disabled}
        />
        {json !== "" && 
        <div style={{height: 200, overflow: 'auto'}}>解密结果:
        {JSON.stringify(json)}
        </div>}
    </div>
}
```

### props
| 字段      | 说明 |             类型  |
| ----------- | ----------- |---------|
| prefixCls  | 样式前缀      |  string  |
| className  | 类名         |    string |
| iconType  | 按钮前面小图标类型 |  string |
| label  | 按钮文本   |   string |
| disabled  | 禁用状态  |   boolean |
| btnType  | 按钮类型  | string |
| onChange  | 文件上传成功事件  |  (resAvailable) => void | 
| getJsonData  | 文件解密后数据  |  (json) => void |

### 说明
组件引用 `antd@3.25.3` 中的Icon组件, antd高版本不存在此组件