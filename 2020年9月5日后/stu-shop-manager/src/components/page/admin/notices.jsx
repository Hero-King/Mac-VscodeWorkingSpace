import React from 'react'
import { Card, List, Typography, Button } from 'antd'
import {connect} from 'react-redux'

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

function Notices(props) {
    // console.log(props,'noti')
    return (
        <Card title="通知中心" extra={<Button onClick={e => props.dispatch({type: 'readAll'})}>全部已读</Button>}>
            <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={item => (
                    <List.Item style={{display: 'flex'}}>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item}
                        <Button size="small">已读</Button>
                    </List.Item>
                )}
            />
        </Card>
    )
}

export default connect(state => state)(Notices)
