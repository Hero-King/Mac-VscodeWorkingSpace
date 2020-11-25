import React from 'react'
import { Card, Table, Button, Popconfirm, Statistic } from 'antd'
import { ArrowUpOutlined } from '@ant-design/icons'

export default function Index() {

    return (
        // 使用垂直flex布局是的第二个card铺满剩余空间
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Card title="数据统计" bordered={true}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Card title="新增用户" bordered={true} style={{ width: ' 30%' }}>
                        <Statistic
                            title="Active"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />
                    </Card>
                    <Card title="总用户" bordered={true} style={{ width: ' 30%' }}>
                        <Statistic
                            title="Active"
                            value={128}
                            // precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<ArrowUpOutlined />}
                        // suffix="%"
                        />
                    </Card>
                    <Card title="今日订单" bordered={true} style={{ width: ' 30%' }}>
                        <Statistic
                            title="Active"
                            value={80}
                            // precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<ArrowUpOutlined />}
                        // suffix="%"
                        />
                    </Card>
                </div>
            </Card>
            <Card title="其他统计" bordered={true} style={{ flex: 1 }}>

            </Card>
        </div>
    )
}
