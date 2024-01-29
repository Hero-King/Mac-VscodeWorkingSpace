## 工具条
财务共享表格上的工具条

### 代码示例
```jsx
/**
 * defaultShowCode: true
*/
import React, {Component} from 'react';
import { ToolBar } from "dumi-stu";
import { seiLocale } from 'sei-utils';
import {message} from 'antd'
const { seiIntl } = seiLocale;
class TbarDemo1 extends Component {
    leftCfg = () => {
       return [
           {
               title: seiIntl.get({key: 'gwmBdm_000074', desc: '新增单据'}),
               props:{
                   onClick: () => { message.info("click")}
               }
           },
           {
               title: seiIntl.get({key: 'gwmBdm_000075', desc: '从模板新增'}),
               type: "uploadFile",
               props:{
                   onClick: () => {}
               }
           },
           {
               type: "form",
               style: {width: 392},
               formItems: [
                //    {
                //        label: seiIntl.get({key: 'gwmBdm_000076', desc: '预算公司'}),
                //        name: "budgetCorporationId",
                //        rules: [{
                //            required: true,
                //            message: seiIntl.get({key: 'gwmBdm_000077', desc: '预算公司!'}),
                //        }],
                //        type: "searchTable",
                //        props: {
                //         //    config: budgetCorporationConfig
                //        }
                //    },
                //    {
                //        label: seiIntl.get({key: 'gwmBdm_000078', desc: '预算类型'}),
                //        name: "budgetTypeId",
                //        rules: [{
                //            required: true,
                //            message: seiIntl.get({key: 'gwmBdm_000079', desc: '预算类型!'}),
                //        }],
                //        type: "searchTable",
                //        props: {
                //         //    config: budgetTypeConfig,
                //            params: ["budgetCorporationId"]
                //        }
                //    }
               ]
           }
       ]
   }
    rightCfg = () => {
        return  [
            {
                type: "search",
                props: {
                    style: {width: 250},
                    placeholder: seiIntl.get({key: 'gwmBdm_000080', desc: '输入代码或名称查询'}),
                    allowClear: true,
                    // value: '',
                    onSearch: (v) => console.log("search value: ",v),
                    // onChange: this.handleQuickValueChange
                }
            }
        ]
    }
    render() {
        return (
            <div>
                <ToolBar
                    leftCfg = { this.leftCfg()}
                    rightCfg={this.rightCfg()}
                />
            </div>
        );
    }
}

export default TbarDemo1;
```

### props
| 字段      | 说明   |             类型  |
| ----------- | ----------- |---------|
| leftCfg   | 左侧按钮配置  | array  |
| rightCfg  | 右侧按钮配置  | array |
| btnsCfg  | 左侧按钮配置 优先使用leftCfg参数  | array |
| searchBtnCfg  | 右侧按钮配置 优先使用rightCfg参数 | array |
| style | 生成组件的样式 | object |
| form  | form实例  | object | 
| formItems | type为form时生成Form.Item  | array |
| onSearch | 查询回调 | function |

按钮配置对象: 
- type  类型  可以是`dropdown`下拉选择框 `import`导入按钮 `advanceSearch`搜索按钮 `search`搜索输入框 `uploadFile`上传按钮 `importDecryption`批导解密按钮 `form`表单 `buttonGroup`按钮组 默认是按钮
- title 按钮的名称
- operateCode 操作权限码 会使用`CheckAuth`组件封装生成组件
- props 传递给生成组件的props
