## 文件上传和下载
财务共享中单据附件

### 代码示例
```jsx
/**
 * defaultShowCode: true
*/
import React from 'react'
import { OrderFileUpload } from 'dumi-stu'

// 设置上传文件限制大小
sessionStorage.setItem("limitSize",10000)

export default (props) => {
    return <div>
        <OrderFileUpload 
            domain="http://fssc-t.svolt.cn"
        />
    </div>
}

```

### props
| 字段      | 说明   |             类型  |
| ----------- | ----------- |---------|
| entityId  | 单据id  |   string |
| domain    | 接口调用的主机名  | string    |
| contextUrl | 上下文地址  | string    |
| onChange  | 上传文件改变,删除文件的回调函数  |  (FileList) => void | 
| onRef     | ref指向          |              |
| defaultFileList | 默认文件列表 | array |
| batchDownloadFileName | 批量下载文件名   | string | 
| viewType | 附件列表显示方式   | 'list','card' |   
| 其他参数  | 参见antd upload组件 |             |  

### 说明
原组件存在未上传完成, 马上下载报错问题 , 已在当前组件中修复