import React, { useEffect, useState } from 'react'
import { Form, Table, Input, InputNumber, Select, Checkbox, Button } from 'antd'
import { FormTable } from '../component/index'
import _ from 'lodash'
const { Option } = Select
const { FormContent } = FormTable

export default class FormTableDemo extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = _.debounce(this._handleChange, 100)
        this.state = {
            formItemKey: "label",
            formConfig: {
                layout: 'inline',
                labelCol: {
                    span: 8,
                },
                wrapperCol: {
                    span: 16,
                },
            },
            formItems: [{
                label: "label1",
                name: 'name1',
                rules: [
                    {
                        required: true,
                        message: 'Please input your username!',
                    }
                ],
                children: <Input onChange={this.handleChange} />
            }, {
                label: "label2",
                name: 'name2',
                rules: [
                    {
                        required: true,
                        message: 'Please input your username!',
                    }
                ],
                style: { width: 220 },
                children: <Select onChange={this.handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
            }],
            columns: [{
                title: '姓名',
                dataIndex: 'name',
            },
            {
                title: '年龄',
                dataIndex: 'age',
            },
            {
                title: '住址',
                dataIndex: 'address',
            },],
            tableConfig: {
                dataService: (param) => {
                    return new Promise((res, rej) => {
                        setTimeout(() => {
                            res([{
                                key: '1',
                                name: '胡彦斌',
                                age: 32,
                                address: '西湖区湖底公园1号',
                            },
                            {
                                key: '2',
                                name: '胡彦祖',
                                age: 42,
                                address: '西湖区湖底公园1号',
                            },
                            ])
                        }, 200);
                    })
                }
            }
        }
    }

    componentDidMount() {
        console.log(this.form);
        // TODO 获取前置数据 设置formItems
    }

    _handleChange = () => {
        console.log("handleSubmit");
        this.form.handleSubmit()
    }

    render() {
        const { formConfig, formItems, formItemKey, columns, tableConfig } = this.state
        return <FormTable wrappedComponentRef={(form) => this.form = form} formConfig={formConfig} formItems={formItems} formItemKey={formItemKey} columns={columns} exportFileName="excelName" tableConfig={tableConfig} />
    }
}