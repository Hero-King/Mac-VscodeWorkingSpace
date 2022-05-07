/**
 * @description A antd Table with Form 带搜索表单的表格 基于antd3.X书写
 * @author wangjj
 */

import React from 'react'
import PropTypes from 'prop-types'
import XLSX from 'xlsx';
import { Form, Table, Input, InputNumber, Select, Checkbox, Button, message } from 'antd'
import './formTable.less'
class FormTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            dataSource: []
        }
    }

    handleSubmit = e => {
        e && e.preventDefault();
        const { tableConfig: { dataService } } = this.props
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                dataService({}).then((result) => {
                    this.setState({ dataSource: result })
                }).catch((err) => {

                });
                if (this.props.formConfig.onSubmit) {
                    this.props.formConfig.onSubmit(values)
                }
            } else {
                console.error(err);
            }
        });
    };

    json_to_sheet(header, data, fileName, bookType = 'xlsx',) {
        const worksheet = XLSX.utils.json_to_sheet(data)
        XLSX.utils.sheet_add_aoa(worksheet, [header], { origin: 'A1' })
        const workbook = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(workbook, worksheet)
        XLSX.writeFile(workbook, fileName + "." + bookType)
    }

    handleExportExcel = () => {
        const { dataSource } = this.state
        const { columns, exportFileName } = this.props
        if (dataSource.length == 0) {
            return message.error("导出数据不能为空")
        }
        this.json_to_sheet(columns.map(i => i.title), dataSource, exportFileName)
    }

    render() {
        const { formConfig, btnText, formItems, formItemKey, className, columns, form, exportFileName, ...props } = this.props
        const { getFieldDecorator } = form
        const { loading, dataSource } = this.state;
        const isLoading = loading || props.loading

        return <div className={`fcny-formtable-wrap ${className || ''}`}>
            <Form
                {...formConfig}
                onSubmit={this.handleSubmit}
            >
                {
                    formItems.map((formItem, index) => {
                        console.log(formItem);
                        const { name, children, className, style, ...formItemConfig } = formItem
                        return <Form.Item
                            {...formItemConfig}
                            style={style}
                            className={className}
                            key={formItem[formItemKey] || formItem.label || index}
                        >
                            {
                                getFieldDecorator(name, formItemConfig)(
                                    children
                                )
                            }

                        </Form.Item>
                    })
                }
                <Form.Item>
                    <Button type="primary" htmlType="submit" >
                        {btnText}
                    </Button>
                </Form.Item>
            </Form>
            <div className="button-row">
                {
                    exportFileName.length > 0 && <Button style={{ marginRight: 8 }} type="default" onClick={this.handleExportExcel}>导出</Button>
                }
            </div>
            <Table className="formtable-table-wrap" columns={columns} dataSource={dataSource} loading={isLoading} />
        </div>
    }
}

FormTable.defaultProps = {
    columns: [],
    exportFileName: '',
    btnText: "搜索",
    formConfig: {
        layout: 'inline',
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        }
    }
}

FormTable.propTypes = {
    // 表格是否加载中
    loading: PropTypes.bool,
    exportFileName: PropTypes.string,
    tableConfig: PropTypes.shape({
        // 获取表格数据方法
        dataService: PropTypes.func.isRequired
    })
}

export default Form.create({})(FormTable)