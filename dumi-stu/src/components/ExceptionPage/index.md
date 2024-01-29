## 异常页面

### 代码参考
```jsx
/**
 * defaultShowCode: true
*/
import React from 'react'
import {Select} from 'antd'
import { ExceptionPage } from 'dumi-stu'
const {Option} = Select
export default (props) => {
    const [type, settype] = React.useState("404");

    return <div>
        <div> 异常类型: 
            <Select onChange={v => settype(v)} style={{width: 150}} value={type}>
                <Option value="403">403</Option>
                <Option value="404">404</Option>
                <Option value="500">500</Option>
                <Option value="special500">special500</Option>
                <Option value="nullpage">nullpage</Option>
            </Select>
        </div>
        <ExceptionPage type={type}/>
    </div>
}
```

### props
- type 异常类型
    - `403`
    - `404`
    - `500`
    - `special500`
    - `nullpage`

### 说明
组件依赖 *sei-utils@1.0.77* ,请指定仓库 `npm config set registry  http://rddgit.changhong.com/nexus/repository/npm-sei-group/`