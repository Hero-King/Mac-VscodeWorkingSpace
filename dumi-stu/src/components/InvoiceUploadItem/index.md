## 电子发票
该组件用于识别电子发票

 ```jsx
 /**
  * defaultShowCode: true
 */
import React from 'react'
import {InvoiceUpload} from 'dumi-stu'
const uploadProps = {
      multiple: true,
      domain: 'http://fssc-t.svolt.cn',
      onChange: (docIds) => {
        console.log(docIds);
      },
      defaultFileList: [{
            amount: 100.58,
            tax: { id: 1, name: '测试',taxRate: 0.03 },
            fileName: '1.jpg',
            amount: 118.47,
            taxMoney: 12,
            category: "VAT_Electronic_Ordinary_Invoice",
            categoryRemark: "增值税电子普通发票",
            checkCode: "06461887460449343066",
            docId: "5d8c489834c54f00012f868b",
            fileName: "滴滴电子发票.pdf",
            invoiceCode: "012001900111",
            invoiceDate: "20190805",
            invoiceNumber: "36892758",
            randomCode: "2FA6",
      }],
      taxConfig : {
        columns: [{
          title: '税码',
          dataIndex: 'taxCode',
        }, {
          title: '名称',
          dataIndex: 'name',
        },
        {
          title: '税率',
          dataIndex: 'taxRate',
        }],
        key: 'id',
        text: 'name',
        dataService: () => {
          return Promise.resolve([{
            id:1,
            taxCode: '1',
            name: '测试',
            taxRate: 0.03
          }, {
            id:2,
            taxCode: '2',
            name: '测试2',
            taxRate: 0.07
          }]);
        }
      }
    };

export default (props) => {
  return <div>
  <InvoiceUpload {...uploadProps}/>
</div>
}

```


### props
| 字段      | 说明   |             类型  |
| ----------- | ----------- |---------|
| disabled  | 禁用状态  |   boolean |
| domain    | 接口调用的主机名  | string    |
| taxConfig | 税率信息配置对象  | object    |
| onChange  | 文件上传成功事件  |  (FileList) => void | 
| onRef     | ref指向          |              |
| defaultFileList | 默认文件列表 | array |
| multiple | 多文件上传   | boolean | 

