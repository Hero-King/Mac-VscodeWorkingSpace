import React from 'react'
import { Form, Card, Input, Button, message } from 'antd'
export default function Edit(props) {
    const form = Form.useForm();

    const handleFinish = (values) => {
        console.log(values);
        message.success('新增成功',() => {
            props.history.push('/admin/products')
        })
    }

    return (
        <Card title="商品编辑" extra={<Button onClick={() => props.history.push("/admin/products")}>返回</Button>}>
            <Form onFinish={handleFinish} >
                <Form.Item label="商品名字"
                    name="name" // 提交表单的字段名
                    rules={[{   //校验规则
                        required: true,
                        message: "请输入商品名称!!"
                    }]}>
                    <Input placeholder="请输入商品名字" />
                </Form.Item>
                <Form.Item label="商品价格"
                    name="price" // 提交表单的字段名
                    rules={[{   //校验规则
                        required: true,
                    }]}>
                    <Input placeholder="请输入商品价格" />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>保存</Button>
                </Form.Item>
            </Form>
        </Card>

    )

}
