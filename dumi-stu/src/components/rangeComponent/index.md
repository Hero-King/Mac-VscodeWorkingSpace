## 范围选择

### RangeSelect 代码示例
```jsx
/**
 * defaultShowCode: true
*/
import React from 'react'
import { RangeSelect , httpUtils, fimAPI, searchListByKey} from 'dumi-stu'

async function findAllCurrency(params = {}) {
  return httpUtils.get(fimAPI + "/currency/findAll", params);
}

const currencyConfig = {
  columns: [
    {
      title: '代码',
      dataIndex: 'code',
      width: 140
    },
    {
      title: '名称',
      width: 200,
      dataIndex: 'name',
    }],
  dataService: findAllCurrency,
  searchService: searchListByKey,
  key: 'code',
  text: 'name'
};

export default (props) => {
    return <div>
    <RangeSelect configs={[currencyConfig,currencyConfig]}/>
    </div>
}

```

```jsx
/**
 * defaultShowCode: true
*/
import React,{ useState, useEffect} from 'react'
import { RangeSelect , httpUtils, fimAPI, searchListByKey} from 'dumi-stu'
import { message } from 'antd'

export default (props) => {
    const [value, setvalue] = useState({start: 1, end: 10})
    useEffect(() => {
        console.log("value变化: ", value.start, value.end )    
    }, [value])

    return <div>
    <h4>数值范围选择</h4>
    <RangeSelect type="number" splitStr="~" 
        placeholders={["请选择最小值","请选择最大值"]}
        onChange={({start,end}) => message.info(`start: ${start} and end: ${end}`)}/>
    <h4>数值双向绑定</h4>
    <RangeSelect type="number" value={value} splitStr="~" onChange={(v) => setvalue(v) }
    />
    </div>
}

```

#### props
| 字段      | 说明   |             类型  |
| ----------- | ----------- |---------|
| value     | 包括start 和 end属性  | object | 
| onChange  | 数值变化的回调 | ({start,end}) => void |
| type   |   组件类型`number` `searchTable` `selectWithService` 默认是searchTable   |  string      |
| splitStr |    中间的分割字符,默认为"到"    |  string       |
| configs  |    长度为2的配置对象,传递给type对应的组件             | array           |
| placeholders  |       placeholder配置,长度为2的字符串数组           | array           |

---

### RangeInput 代码示例

```jsx
/**
 * defaultShowCode: true
*/
import React,{ useState, useEffect} from 'react'
import { RangeInput , httpUtils, fimAPI, searchListByKey} from 'dumi-stu'
import { message } from 'antd'

export default (props) => {
    const [value, setvalue] = useState({start: 1, end: 10})
    useEffect(() => {
        console.log("value变化: ", value.start, value.end )    
    }, [value])

    return <div>
    <h4>数值范围选择</h4>
    <RangeInput type="number" splitStr="~" 
        placeholders={["请输入最小值","请输入最大值"]}
        onChange={({start,end}) => message.info(`start: ${start} and end: ${end}`)}/>
    <h4>数值双向绑定</h4>
    <RangeInput type="number" value={value} splitStr="~" onChange={(v) => setvalue(v) }
    />
    </div>
}

```

#### props
同RangeSelect props