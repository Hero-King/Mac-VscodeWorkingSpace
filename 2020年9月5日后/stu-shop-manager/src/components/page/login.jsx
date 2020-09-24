import React from 'react'
import { Form, Input, Button, Checkbox, Card, message } from 'antd'
import {setToken} from '../../utils/auth'
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export default function Login(props) {

  const onFinish = values => {
    if (values.username === "root" && values.password === "root") {
      setToken(values.username)
      props.history.push("/admin")
    }else{
      message.error("用户名、密码不正确")
    }
  }

  return (
    <div style={{ position: "relative", height: "100%" }}>
      <Card title="Admin Management Page " style={{ width: 500, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} >
        <Form onFinish={onFinish} {...layout} >
          <Form.Item label="用户名" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
          </Button>
          </Form.Item>
        </Form>

      </Card>
    </div>
  )
}
