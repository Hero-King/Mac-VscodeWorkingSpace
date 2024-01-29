## 其他组件
### SearchTable 
弹出选择表单

```jsx
/**
 * defaultShowCode: true
*/
import React,{useState, useEffect} from 'react'
import {SearchTable} from 'dumi-stu'
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
        <SearchTable config={currencyConfig} onChange={e => console.log(e)} selectChange={item => console.log(item)} placeholder="请输入"/>
    </div>
}
```

```jsx
/**
 * defaultShowCode: true
*/
import React,{useState, useEffect} from 'react'
import {SearchTable} from 'dumi-stu'
import { Form, Select} from 'antd'
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
    const [multiple,setmultiple] = React.useState(0)
    return <div>
        <Form.Item label="是否多选">
            <Select value={multiple} onChange={value => setmultiple(value)}>
                <Select.Option value={1}> 多选
                </Select.Option>
                <Select.Option value={0}> 单选
                </Select.Option>
            </Select>
        </Form.Item>
        <SearchTable config={currencyConfig} onChange={e => console.log(e)} initValue="CNY" multiple={!!multiple}/>
    </div>
}
```

### SearchTable Props
| 字段      | 说明   |             类型  |
| ----------- | ----------- |---------|
| value     | 输入框中的值  | string | 
| initValue     | 输入框中初始值  | string | 
| params     | 获取数据时候的接口请求参数  | object | 
| multiple     | 是否多选  | boolean | 
| onChange     | 变化回调,回调是value值  | function | 
| selectChange  | 数值变化的回调,返回的是行项目 | function |
| config  |    配置对象,组件表格展示需要的数据             | object           |
| placeholder  |       placeholder           | string           |
| disabled  |       禁用状态           | boolean           |

### BulkImport
excel导入按钮, 不支持加密的excel导入(如果需要请参考 <a href="import-decryption-button">import-decryption-button</a>)

```jsx
/**
 * defaultShowCode: true
*/
import React from 'react'
import { BulkImport} from 'dumi-stu'
export default (props) => {
    const buttonProps = {type: 'danger', size: "small"}
    return <BulkImport getJsonData={v => console.log(v)} buttonProps={buttonProps}/>
}
```
### BulkImport Props  
| 字段      | 说明   |             类型  |
| ----------- | ----------- |---------|
| needShow     | 需要展示加载中效果  | boolean | 
| getJsonData     | 获取解析之后的JSON  | function | 
| buttonProps     | 按钮组件Props  | object | 

### DefaultPage
分页组件

```jsx
/**
 * defaultShowCode: true
*/
import React from 'react'
import { DefaultPage } from 'dumi-stu'
export default (props) => {
    return <DefaultPage total={100} onChange={obj => console.log(obj)} pageInfo={{page:2} }/>
}
```

```jsx
/**
 * defaultShowCode: true
*/
import React from 'react'
import { DefaultPage } from 'dumi-stu'
export default (props) => {
    const [pageInfo, setpageInfo] = React.useState({})
    // 组件BUG  刷新一次组件 指定页码才生效
    React.useEffect(() => {
        setpageInfo({page: 2})
    },[])
    return <DefaultPage total={200} onChange={obj => console.log(obj)} pageInfo={pageInfo} pageSize={['20','50']} />
}
```

### DefaultPage Props  
| 字段      | 说明   |             类型  |
| ----------- | ----------- |---------|
| onChange  | 回调(必填)          |   function   |
| pageInfo  | 中的page属性指定当前页           |        object       |
| total     | 总数          | number        |
| pageSize  | 一页显示多少条 | array         |

#### 说明
1. pageSize属性传入有BUG;如代码示例2     
2. pageInfo属性传入也有BUG; 建议 `组件的state中currentPage 默认值应该指定this.props.pageInfo.page || 1`

### SimpleTable 

```jsx
/**
 * defaultShowCode: true
*/
import React from 'react'
import { SimpleTable, CheckAuth } from 'dumi-stu'
import {message} from 'antd'
export default (props) => {
    const [data, setdata] = React.useState([])
    const handleEdit = (record) => {
      message.info(`edit record id: ${record.id}`)
    }
    const onDeleteRightClick = (record) => {
      console.log(record)
    }
    React.useEffect(() => {
        // mock 接口
        setTimeout(() => {
          setdata([{"id":"70D1F769-A143-11E9-8CA5-0242C0A84410","tenantCode":"10001","categoryCode":"BRM_ACT_AirportFeeItem","code":"12506","name":"服务费","value":"12506","valueName":"服务费","frozen":false,"rank":0,"remark":"服务费","display":null},{"id":"A53072CE-A142-11E9-8CA5-0242C0A84410","tenantCode":"10001","categoryCode":"BRM_ACT_AirportFeeItem","code":"12501","name":"票面价","value":"12501","valueName":"票面价","frozen":false,"rank":0,"remark":"票面价","display":null},{"id":"B2D8B1EF-A142-11E9-8CA5-0242C0A84410","tenantCode":"10001","categoryCode":"BRM_ACT_AirportFeeItem","code":"12502","name":"国内机票燃油费","value":"12502","valueName":"国内机票燃油费","frozen":false,"rank":0,"remark":"国内机票燃油费","display":null},{"id":"CB44D4D5-A142-11E9-8CA5-0242C0A84410","tenantCode":"10001","categoryCode":"BRM_ACT_AirportFeeItem","code":"12503","name":"国内机票基建费","value":"12503","valueName":"国内机票基建费","frozen":false,"rank":0,"remark":"国内机票基建费","display":null},{"id":"DD90D269-A142-11E9-8CA5-0242C0A84410","tenantCode":"10001","categoryCode":"BRM_ACT_AirportFeeItem","code":"12504","name":"退改签手续费","value":"12504","valueName":"退改签手续费","frozen":false,"rank":0,"remark":"退改签手续费","display":null},{"id":"EA58004E-A142-11E9-8CA5-0242C0A84410","tenantCode":"10001","categoryCode":"BRM_ACT_AirportFeeItem","code":"12505","name":"保险销售价","value":"12505","valueName":"保险销售价","frozen":false,"rank":0,"remark":"保险销售价","display":null}])
        },200)
    },[])
    const columns = [
      {
        title: '租户代码',
        dataIndex: 'tenantCode',
        width: 120
      },
      {
        title:   '代码',
        dataIndex: 'code',
        width: 120
      },
      {
        title: '名称',
        dataIndex: 'name',
        width: 140
      },
        {
            title: '值',
            width: 140,
            dataIndex: 'value'
        },
      {
        title:   '值描述',
        width: 140,
        dataIndex: 'valueName'
      },
      {
        title:   '描述',
        dataIndex: 'remark',
        width: 200
      },
        {
            title:   '排序',
            dataIndex: 'rank',
            render: (text) => {
                return <div style={{textAlign: "right"}}>{text}</div>
            },
        },
        {
            title:  '冻结',
            align: "center",
            width: 80,
            render: (text, record, index) => (
                <div>
                    <input type="checkbox" checked={record.frozen} disabled={true}/>
                </div>
            ),
        },
        {
          title: "操作",
          render: (text, record) => {
            return <a onClick={e=> handleEdit(record)}>删除</a>
          }
        }
    ];
    return <div>
      <SimpleTable columns={columns}  data={data} noSequence={false} rowsSelected={[]} onSelectRow={e => console.log("onSelectRow",e)} pagination={false}
      />
    </div>
}
```

### SimpleTable Props
| 字段      | 说明   |             类型  |
| ----------- | ----------- |---------|
| heightY |  指定高度  | any    |
| columns | 列配置  | array |
| data    | 表格展示数据(必填) | array |
| noSequence    | 是否自动加序号列 | boolean |
| rowsSelected  | 父组件指定选择行 | array |
| onSelectRow   | 行选择改变时回调 | function |
| pageChange   | 列表分页时回调 | function |
| rowKey   | rowKey,默认为 id | string |
| checkBox   | checkBox,true 为多选框，radio 为单选 | boolean |
| loading   | 是否显示加载 | boolean |
| onRow   | 如果要去掉行点击选中需重写该方法 | function |
| rowSelection   | 同antd rowSelection | function |
| className   | 设置DIV样式 | string |
| pagination   | 是否分页 | boolean |
| showOrderTitle   | 是否显示序号文字 | boolean |

### SelectWithService

```jsx
/**
 * defaultShowCode: true
*/
import React from 'react'
import { DefaultPage, basicUrl,httpUtils , SelectWithService } from 'dumi-stu'
import { Form } from 'antd'
const FormItem = Form.Item;
async function listAllUserType(params={}){
    return httpUtils.get(basicUrl+"/featureRole/listAllUserType",params);
}

//用户类型
const userTypeConfig = {
  service: listAllUserType,
  key: 'anEnum',
  text: 'remark'
};


class Test extends React.Component {
  constructor(props){
    super(props)
    this.state={
      value: ''
    }
  }
  render (){
    const formItemLayout = {
      labelCol: {
        span: 7
      },
      wrapperCol: {
        span: 15
      },
    };
    const {getFieldDecorator, getFieldValue} = this.props.form;
    return <div>
      <FormItem
        {...formItemLayout}
        label={'公共角色用户类型'}>
        {getFieldDecorator('publicUserType', {
          initialValue: "",
          rules: [{required: true, message: '请选择公共角色用户类型!' }]
        })(
          <SelectWithService config={userTypeConfig} initValue={false}/>
        )}
      </FormItem>
  </div>
  }
}
export default Form.create()(Test); 
```

```jsx
/**
 * defaultShowCode: true
 * desc: 数据双向绑定
*/
import React from 'react'
import { DefaultPage, basicUrl,httpUtils , SelectWithService } from 'dumi-stu'
import { Form } from 'antd'
const FormItem = Form.Item;
async function listAllUserType(params={}){
    return httpUtils.get(basicUrl+"/featureRole/listAllUserType",params);
}

//用户类型
const userTypeConfig = {
  service: listAllUserType,
  key: 'anEnum',
  text: 'remark'
};


class Test extends React.Component {
  constructor(props){
    super(props)
    this.state={
      value: ''
    }
  }
  handleChange = (v,t={anEnum:""}) => {
    this.setState({value: t.anEnum })
  }
  render (){
    const {value} = this.state;
    return <div>
      请选择内容: 
      <SelectWithService style={{width: 300}} value={value} config={userTypeConfig} allowClear={true} onChange={this.handleChange} remoteSearch={true}/>
    </div>
  }
}
export default Test
```

### SelectWithService Props
| 字段      | 说明   |             类型  |
| ----------- | ----------- |---------|
| config |  配置对象  | object    |
| initValue | initValue  | any |
| value   | value   | anyd  |
| onChange | 改变的回调 (必填) | function |
| params |  获取选择数据调用的接口需要的参数 | function |  
| newVal | 指定选择框的value |    any    |
| labelInValue | 是否把每个选项的 label 包装到 value 中 |    boolean    |
| allowClear  | 是否展示清空按钮    | boolean | 
| disabled  | 禁用状态    | boolean | 
| style  | style    | object | 
| remoteSearch  | 控制调用接口是否用{Quick_value:value}   | boolean | 


### RangeDatePicker
日期范围选择

```jsx
/**
 * defaultShowCode: true
*/
import React from 'react'
import {RangeDatePicker} from "dumi-stu"
import moment from 'moment'

export default (props) => {
  const [v,setv] = React.useState({})
  React.useEffect(() => {
    console.log('您选择的时间是: ',v)
  },[v])
  return <div>
    <RangeDatePicker  onChange={e => console.log(e)} allowClear/>
    禁用:
    <RangeDatePicker disabled value={{startDate: moment(), endDate: moment().add(1,'week')}} type="currentTime" onChange={e => console.log(e)} allowClear/>
    双向绑定
    <RangeDatePicker value={v} type="currentTime" onChange={e => setv(e)} allowClear/>
  </div>
}
```

### RangeDatePicker Props
| 字段      | 说明   |             类型  |
| ----------- | ----------- |---------|
| value   | {startDate,endDate}   | object  |
| onChange | 改变的回调 (必填) | function |
| allowClear  | 是否展示清空按钮    | boolean | 
| disabled  | 禁用状态    | boolean | 
| style  | style    | object | 

onChange回调的值为 {startDate: Moment, endDate: Moment}

### TreeSelectWithService


```jsx
/**
 * defaultShowCode: true
*/
import React from 'react'
import { DefaultPage, basicUrl,httpUtils , TreeSelectWithService } from 'dumi-stu'
import { Form } from 'antd'
const FormItem = Form.Item;
//通过公司id获取组织机构
const getOrigTreeByCorporationCode = (params = {}) => {
  return httpUtils.get(basicUrl + "/organizationExt/findAllByCorporationCode", params);
};

//通过公司id获取组织机构
const getOrigTreeByCorporationCodeConfig = {
  service: getOrigTreeByCorporationCode,
  key: 'id',
  text: 'name'
};


class Test extends React.Component {
  constructor(props){
    super(props)
    this.state={
      value: ''
    }
  }
  render (){
    const formItemLayout = {
      labelCol: {
        span: 7
      },
      wrapperCol: {
        span: 15
      },
    };
    const {getFieldDecorator, getFieldValue} = this.props.form;
    const params = {"corporationCode":"10001-1100"}
    return <div>
     <FormItem
          {...formItemLayout}
          label={'申请部门'}
      >
          {getFieldDecorator("organizationId", {
              initialValue: "",
              rules: [{required: true, message: '请选择申请部门!'}]
          })(
              <TreeSelectWithService
                  allowClear={false}
                  config={getOrigTreeByCorporationCodeConfig}
                  key={"corporationName"}
                  params={params}
                  // treeCheckable={true}
              />
          )}
      </FormItem>
  </div>
  }
}
export default Form.create()(Test); 
```

### TreeSelectWithService Props
| 字段      | 说明   |             类型  |
| ----------- | ----------- |---------|
| config |  配置对象  | object    |
| onChange | 改变的回调 (必填) | function |
| params |  获取选择数据调用的接口需要的参数 | function |  
| initValue |  initValue | string |  
| allowClear  | 是否展示清空按钮    | boolean | 
| disabled  | 禁用状态    | boolean | 
| style  | style    | object | 
| limitInitRequest  | 是否限制组件挂载完成后请求数据    | boolean | 
| treeCheckable  | 是否允许勾选    | boolean | 
| width  | 组件宽度    | int/string | 

### OrderHeadCard
Card布局组件

```jsx
/**
 * defaultShowCode: true
*/
import React from 'react'
import {OrderHeadCard} from "dumi-stu"
import moment from 'moment'

export default (props) => {
  const editData = {
    creatorName: "admin",
    createdDate: "2022年1月17日",
    flowStatus: "INPROCESS",
    flowStatusRemark: "流程中"
  }
  return <div>
    <OrderHeadCard title="Card Title" style={{wdth: '80%'}} bodyStyle={{padding: 20}} barCode="1111000001" editData={editData}>
      Body Content...
    </OrderHeadCard>
  </div>
}
```
### OrderHeadCard Props
| 字段      | 说明   |             类型  |
| ----------- | ----------- |---------|
| style  | style    | object | 
| bodyStyle  | bodyStyle    | object | 
| headStyle  | headStyle    | object | 
| title  | 同antd Card的title    | string | 
| barCode  | 单据条形码    | int/string | 

#### 说明
组件样式在App.css中写入  没有在当前组件中引入

### PageHeader
表头布局组件

```jsx
/**
 * defaultShowCode: true
*/
import React from 'react'
import {PageHeader} from "dumi-stu"
import { Button } from 'antd'
import moment from 'moment'

export default (props) => {
  return <div>
    <PageHeader title="PageHeader Title" extra={<Button>extra</Button>}>
      Body Content...
    </PageHeader>
  </div>
}
```

### PageHeader Props
| 字段      | 说明   |             类型  |
| ----------- | ----------- |---------|
| showHeader  | 是否展示表头    | boolean | 
| title  | 标题头，居左    | any | 
| extra  | 标题扩展，居右    | any | 

### StandardDropdown

```jsx
/**
 * defaultShowCode: true
*/
import React from 'react'
import {StandardDropdown} from "dumi-stu"
import { Button, InputNumber } from 'antd'

export default (props) => {
  const [num, setnum] = React.useState(1)

  const operator=[
    <a className={'row-operator-item'} key={"edit"} >编辑</a>,
    <a className={'row-operator-item'} key={"detail"} >查看</a>,
    <a className={'row-operator-item'} key={"submit"} >提交审核</a>,
    <a className={'row-operator-item'} key={"delete"} >删除</a>,
  ]
  return <div>
  设置overlay值: <InputNumber onChange={v => setnum(v)} value={num} min={1}/>
  <StandardDropdown operator={operator} overlay={num}/>
  </div>
}
```

### StandardDropdown Props  
| 字段      | 说明   |             类型  |
| ----------- | ----------- |---------|
| operator  | 操作列    | array | 
| overlay  | 几条操作内容直接展示 (没配置overlay时默认展开两个item)   | number | 

### StandardForm

```jsx
/**
 * defaultShowCode: true
*/
import React from 'react'
import {StandardForm,httpUtils, bafAPI} from "dumi-stu"
import { Button, InputNumber, Form, Radio, message, Col, Row } from 'antd'

class Test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      disabled: false,
      trebleLine: false,
      doubleLine: false,
      editModel: false
    }
  }
  handleClick = (e) => {
    if(this.form){
      const {form} = this.form.props;
      form.validateFields().then((values) => {
        message.info('提交成功: ' + JSON.stringify(values))
      })
    }
  }

  onChange = (e) => {
    if(e.target.value === 'one'){
      return this.setState({trebleLine: false,doubleLine: false })
    }
    let another = e.target.value === "trebleLine" ?  'doubleLine' : 'trebleLine'
    this.setState({ [e.target.value] : true, [another] : false })
  }


  render(){
    const {disabled, doubleLine, trebleLine, editModel} = this.state;
    let fieldsConfig = [
         {
                name: '成本中心类型',
                code: 'costCenterCategory',
                disabled: true,
            },
            {
                name: 'costCenterName',
                code: 'costCenterName',
                hidden: true
            },
            {
                name: 'researchOrderNumberName',
                code: 'researchOrderNumberName',
                hidden: true
            },
            {
                name: '是否福利部门',
                code: 'welfare',
                type: 'radio',
                defaultValue: false,
                data: [{value: true, text: '是'}, {value: false, text: "否"}]
            },
            {
                name:  '是否培训部门',
                code: 'trainingDepartment',
                type: 'radio',
                defaultValue: false,
                data: [{value: true, text:  '是'}, {value: false, text: "否"}]
            },
            {
                name: 'paymentCauseName',
                code: 'paymentCauseName',
                hidden: true
            },
            {
                name: 'researchExpenditureTypeName',
                code: 'researchExpenditureTypeName',
                hidden: true
            },
            {
                type: 'dataSelect',
                name: '研发支出类型',
                code: 'researchExpenditureTypeCode',
                allowClear: true,
                params: "BRM_ACT_DirectAssist",
                disabled: false,
                rules: [{
                    validator: (rule, value, callback) => {
                        let costCenterCategory = this.payItemForm && this.payItemForm.props.form.getFieldValue('costCenterCategory');
                        if (!value && costCenterCategory && costCenterCategory === 'E') {
                            callback('成本中心类型为E时研发支出类型必填！')
                        }
                        callback()
                    }
                }],
                onChange: (val, obj) => {

                },
            },
            {
                name: '补缴人工号',
                code: 'deductionPersonCode',
                disabled: false,
                rules: [{required: true, message: '请选择补缴人工号'}]
            },
            {
                name: '补缴人姓名',
                code: 'deductionPersonName',
                disabled: false,
                rules: [{required: true, message: '请选择补缴人姓名'}]
            },
            {
                name:'补缴人身份证号',
                code: 'deductionPersonIdNumber',
                disabled: false,
                maxLength: 18,
                rules: [{required: true, message: '请选择补缴人身份证号'}, {
                    pattern: /^\d{17}(\d|X)$/i,
                    message:  '请输入正确格式的18位身份证号'
                }]
            },
            {
                name: '补缴人电话',
                code: 'telephone',
                disabled: false,
                maxLength: 11,
                rules: [{required: true, message:  '请填写补缴人电话'}]
            },
            {
                name: '补缴开始日期',
                code: 'deductionStartDate',
                type: 'datePicker',
                allowClear: false,
                disabled: false,
                rules: [{required: true, message:  '请选择补缴开始日期'}]
            },
            {
                name:  '补缴结束日期',
                code: 'deductionEndDate',
                type: 'datePicker',
                allowClear: false,
                disabled: false,
                rules: [{required: true, message:  '请选择补缴结束日期'}]
            },

    ]

    let editData = {"id":"80BD7AFF-0AE6-11EC-B781-0242C0A84407","salaryRequestId":"80BB7F2E-0AE6-11EC-B781-0242C0A84407","costCenterCode":"110501004Y","costCenterName":"BMS产品线","researchOrderNumber":"000020000001","researchOrderNumberName":"财务专项2","researchExpenditureTypeCode":"Assist","researchExpenditureTypeName":"辅助","researchExpenditureStatusCode":null,"researchExpenditureStatusName":null,"deductionPersonCode":"SV00185886","deductionPersonName":"jack jack","deductionPersonIdNumber":"122222222222222222","deductionStartDate":"2021-09-01 00:00:00","deductionEndDate":"2021-09-02 00:00:00","realStartDate":null,"realEndDate":null,"personDeductionMonth":null,"companyDeductionMonth":null,"personalTotalMoney":0,"companyTotalMoney":0,"tenantCode":"10001","paymentCauseCode":"1","paymentCauseName":"事/病假","firstMonthDays":12,"welfare":false,"trainingDepartment":false,"telephone":"51082466609","payed":null,"wbsCode":"GWM0P10L-30000-1100","corporationProjectId":"C549A1CF-451C-11EB-A417-0242C0A84408","salaryPersonnelPayBackItems":[],"display":null}

    return <div>
    <Row>
      <Col span={12}>
        <Radio.Group onChange={this.onChange} style={{paddingBottom: 10}}>
          <Radio value={'doubleLine'}>两列显示</Radio>
          <Radio value={'trebleLine'}>三列显示</Radio>
          <Radio value={'one'}>单列显示</Radio>
        </Radio.Group>
      </Col>
      <Col span={12}>
        <span title="选中是修改表单值不会同步到Form实例中">editData传入:</span> 　
        <Radio.Group onChange={e => this.setState({editModel: e.target.value == 1},() => {
          this.form && this.form.props.form.resetFields()
        })} style={{paddingBottom: 10}}>
          <Radio value={1} >是</Radio>
          <Radio value={0}>否</Radio>
        </Radio.Group>
      </Col>
    </Row>

      <StandardForm disabled={disabled} fieldsConfig={fieldsConfig} doubleLine={doubleLine} trebleLine={trebleLine} wrappedComponentRef={(ref) => this.form = ref} editData={editModel ? editData : null }/>
      <Button onClick={this.handleClick}>提交</Button>
    </div>
  }
  
}

export default Test
```

### StandardForm Props
| 字段      | 说明   |             类型  |
| ----------- | ----------- |---------|
| disabled  | 只读    | boolean | 
| fieldsConfig  | 配置对象  | object | 
| wrappedComponentRef  | ref回调  | function | 
| doubleLine  |  是否一行两列 | boolean | 
| trebleLine  |  是否一行三列 | boolean | 
| editData  |  行项目数据 | object | 

说明    
editData和常用文本组建的value属性性质相同,如需传入请双向绑定,否则页面显示不能同步用户操作

### TransferTable 

```jsx
/**
 * defaultShowCode: true
*/
import React from 'react'
import {TransferTable, httpUtils, convertSearchFilter, defaultPageSize, fimUrl} from "dumi-stu"
import { Button, InputNumber, message, Radio } from 'antd'

//查询客户
const listAllCustomer = (params = {}) => {
    params["S_code"] = "ASC";
    params['Q_EQ_frozen_bool'] = false;
    const quickSearchProperties = ["code", "name"];
    const searchFilter = convertSearchFilter({quickSearchProperties, ...params});
    return httpUtils.postJson(fimUrl + "/customer/findByPage", searchFilter);
}

export default (props) => {
  const [rightData, setrightData] = React.useState([])
  const [checkBoxConfig, setcheckBoxConfig] = React.useState({label: "label"})

  React.useEffect(() => {
    console.log("右侧选择数据: ",rightData);
    rightData.length > 0 && message.info("右侧选择数据已打印");
  },[rightData])

  const columns = [
      {
          title: '代码',
          dataIndex: 'code',
          width: 120
      },
      {
          title:  '名称',
          dataIndex: 'name',
          width: 120
      },
      {
          title: '说明',
          dataIndex: 'remark',
          width: 150
      }
  ];

  const rightService = async (params) => {
    return rightData;
  };

  const leftService = async (params) => {
    let result = [];
    const editData = {};
    if (!params.pageInfo) {
        params.pageInfo = {page: 1, rows: defaultPageSize}
    }
    if (!params.selectedKey) {
        params.corporationCode = editData.corporationCode ? editData.corporationCode : ""
    } else {
        params.corporationCode = params.selectedKey;
        delete params.selectedKey
    }
    await listAllCustomer(params).then((res) => {
        result = res;
    });

    return result;
  };

  const handleRightClick = async (rows, rightDataT) => {
        let right = [];
        for (let i = 0; i < rows.length; i++) {
            right.push(rows[i]);
        }
        //获取已分配的数组
        for (let data of rightDataT) {
            // if (rows.findIndex(item => item.id === data.id) > -1) {
            //     continue;
            // }
            right.push(data);
        }
        setrightData(right)
    };

   //删除分配,设置左右表格的值
  const handleLeftClick = async (rows, rightDataT) => {
    let right = [];
    //获取已分配的数组
    for (let data of rightDataT) {
        if (rows.findIndex(item => item.id === data.id) > -1) {
            continue;
        }
        right.push(data);
    }
    setrightData(right)
  }

  return <div>
    <TransferTable heightY={250} leftTitle="所有客户/供应商" rightTitle="已选择" leftColumns={columns} rightColumns={columns} leftService={leftService} rightService={rightService} initValue={true} handleRightClick={handleRightClick} handleLeftClick={handleLeftClick} />
  </div>
}
```

### TransferTable Props
| 字段      | 说明   |             类型  |
| ----------- | ----------- |---------|
| treeSelectConfig  |  传递给TreeSelectWithService组件的配置   | object | 
| searchTableConfig  | 传递给searchTable组件的配置  | object | 
| leftService  | 左侧数据获取方法  | async function | 
| leftTreeService  | 左侧数据获取方法  | async function | 
| rightTreeService  | 右侧数据获取方法  | async function | 
| rightService  | 右侧数据获取方法  | async function | 
| searchLeftKey  | 左侧搜索框检索的key  | array | 
| searchRightKey  | 右侧搜索框检索的key  | array | 
| onRef  | ref回调  | function | 
| initValue  |  是否初始时获取数据 | boolean | 
| checkBoxConfig  | treeSelect时CheckBox配置  | object | 
| leftColumns  |  左侧表格列配置 | array | 
| rightColumns  | 右侧表格列配置  | array | 
| heightY  |  高度配置 | boolean | 
| rightTitle  |  右侧表格标题 | string | 
| leftTitle  |  左侧表格标题 | string | 

