import React from 'react';
import { Spin } from 'antd'
export default () => {
    return <div style={{display: 'flex', alignItems: "center", height: '60vh', justifyContent: "center"}}>
        <Spin size="large" delay={50} />
    </div>
};