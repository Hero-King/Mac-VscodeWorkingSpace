import React from 'react'
import { Row, Col } from 'antd';

/**
 * @description Form.Item包装组件 支持grid布局
 */
export default function ({ isGridLayout, colSpan = 6, children }) {
    if (!isGridLayout || colSpan <= 0 || colSpan > 24) {
        return children
    }
    const rows = []
    const oneRowLength = 24 / colSpan
    children = children.flat()
    children.forEach((item, index) => {
        let rowIndex = Math.floor(index / oneRowLength);
        let colIndex = index % oneRowLength;
        if(!rows[rowIndex]){
            rows[rowIndex] = new Array(oneRowLength)
        }
        rows[rowIndex][colIndex] = item
    });
    return <React.Fragment>
        {
            rows.map((cols, index) => <Row key={index}>
                {
                    cols.map((i,outIndex) => <Col span={colSpan} key={outIndex}>
                        {i}
                    </Col>
                    )
                }
            </Row>)
        }
    </React.Fragment>
}