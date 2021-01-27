import React from 'react'
import { Select, Tag } from 'antd'

const { Option } = Select

/**
 * Option属性
 * label 就是显现的文本内容
 * value 就是表单获取的内容
 * 
 * Select属性
 * mode: 多选模式和自定义tag模式
 * 
 */

export default function Selectstu(props) {

    return <div>
        <Select style={{width: 100}} onChange={value => console.log(value)}>
        <Option value="表单获得的value1">value1</Option>
        <Option value="表单获得的value2" title="title2">value2</Option>
        {/* title表示鼠标停留在那个option上面显示的内容 控制台打印: 表单获得的value1*/}
    </Select>

    <Select labelInValue style={{width: 100}} onChange={value => console.log(value)}>
        <Option value="表单获得的value1">value1</Option>
        <Option value="表单获得的value2" title="title2">value2</Option>
        {/*  控制台打印: {value: "表单获得的value1", label: "value1", key: "表单获得的value1"}*/}
    </Select>

    <Select style={{width: 100}} onChange={value => console.log(value)} options={[{value: "value1",label: "label1"}]}>
        {/* 控制台打印: value1 显示的内容是label1 */}
    </Select>

    <Select mode="multiple" style={{width: 200}} tagRender={props => <Tag>{props.label}</Tag> } onChange={value => console.log(value)} >
        <Option value="表单获得的value1">value1</Option>
        <Option value="表单获得的value2" title="title2">value2</Option>
    </Select>

    <h4>事件学习</h4>
    {/* 事件流分为  定义事件的时候选择 使用捕获还是冒泡
        捕获阶段(从dom树向下传递事件,直到捕获) 
        事件目标: 到达目标元素后,执行目标事件处理函数
        事件冒泡: 从触发对象,不断将事件向上传递,如果有绑定事件,会被执行  阻止事件冒泡: stopPropagation
    */}
    <div style={{border: "1px solid red",width: 300, height: 50}} onClick={e => console.log("red click")}>
        <span style={{margin: 10, border: "1px solid green",width: 100, height: 10}} onClick={e => console.log("green click")} >没阻止冒泡</span>
        <span style={{margin: 10, border: "1px solid yellow",width: 100, height: 10}} onClick={e => {e.stopPropagation(); console.log("yellow click")}}>阻止冒泡</span>
    </div>
    </div>
};
