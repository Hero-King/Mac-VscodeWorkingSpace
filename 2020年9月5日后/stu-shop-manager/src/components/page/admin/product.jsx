import React from 'react'
import { Card, Table, Button, Popconfirm } from 'antd'

export default function Product() {
    const dataSource = [{
        name: "小灰灰",
        price: "9999"
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
                </Popconfirm>

            </div>
        }
    }]

    const handleEdit = (e) => {
        console.log(e)
    };

    const handleDelete =(index) => {
        console.log(index)
    }

    return (
        <div>
            <Card title="商品列表" bordered={true} >
                <Table columns={columns} dataSource={dataSource} />
            </Card>
        </div>
    )
}
