import React from 'react'
import { Card, Table, Button, Popconfirm } from 'antd'
import { genderTableData} from '../../../utils/genderData'

export default function Product(props) {
    const dataSource = [{
        name: "小灰灰",
        price: "9999",
        id: 0
    }]
    const columns = [{
        title: "序号",
        render: (text, record, index) => index + 1,
        width: "60px"
    }, {
        title: "名字",
        dataIndex: "name"
    }, {
        title: "价格",
        dataIndex: "price"
    }, {
        title: "操作",
        render: (text, record, index) => {
            return <div>
                <Button type="primary" onClick={handleEdit} >修改</Button> &nbsp; &nbsp;
                <Popconfirm title="你确定要删除吗？" onConfirm={handleDelete(index)}>
                    <Button type="danger" >删除</Button>
                    {/* 长度使用rem ?? 学习一下 */}
                </Popconfirm>

            </div>
        }
    }]

    const handleEdit = (e) => {
        console.log(e)
    };

    const handleDelete = (index) => {
        console.log(index)
    }

    return (
        <Card title="商品列表" bordered={true} extra={<Button type='primary' size='small' onClick={(e) => props.history.push('/admin/products/edit/1')}>新增</Button>}>
            <Table columns={columns} dataSource={genderTableData(dataSource,100)} rowKey="id" />
        </Card>
    )
}
