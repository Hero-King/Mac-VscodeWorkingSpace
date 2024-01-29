## 面包屑页头
财务共享中的面包屑页头

### 代码演示

```jsx
/**
 * title: 
 * defaultShowCode: true
*/
import React, { Component,useState } from 'react';
import { HeadBreadcrumb } from 'dumi-stu';
import { message, Switch,Button } from "antd"

export default (props) => {
    const [hidden,sethidden] = useState(false)

    return <div>
        <Switch checkedChildren="显示" unCheckedChildren="隐藏" onClick={(checked) => sethidden(checked)} />
        <HeadBreadcrumb className={"allocation-page"} hidden={hidden}
                style={{overflow: "hidden"}} pathData={[{name: "业务申请"}, { name: "详情" }]}
                rightExtra={(<Button>返回</Button>)}>
            <div style={{height: 100}}>
            content    
            </div>    
        </HeadBreadcrumb>
    </div>
}

```

```jsx
/**
 * title: autoScroll美化滚动条
*/
import React, { Component,useState } from 'react';
import { HeadBreadcrumb } from 'dumi-stu';
import { message, Switch,Button } from "antd"

export default (props) => {
    const [autoScroll,setautoScroll] = useState(false)
    return <div>
    <Switch checkedChildren="自动滚轮" unCheckedChildren="隐藏滚轮" onClick={(checked) => setautoScroll(checked)} />
        <HeadBreadcrumb className={"allocation-page"} 
                pathData={[{name: "业务申请"}, { name: "详情" }]}
                rightExtra={(<Button>返回</Button>)}
                extra={<div>extra title</div>}
                autoScroll={autoScroll}
                style={{height: 100}}
                >
            <div style={{height: 200}}>
                content content content content content    
            </div>    
        </HeadBreadcrumb>
    </div>
}

```
### props
- pathData: PropType.array, 面包屑路径
- hidden: PropType.bool, 是否隐藏面包屑
- autoScroll: PropType.bool, 是否使用react-custom-scrollbars的美化过的滚动条
- extra: PropType.any, 面包屑body 中head部分
- extraClass: PropType.string, 
- rightExtra: PropType.any, 面包屑head右侧内容
- rightExtraClass: PropType.string,
- children: PropType.any, 面包屑body部分
- style: PropType.object, 面包屑body部分样式
