import React from 'react'

export default class Cmtitem extends React.Component {

    render() {
        return <div style={{ margin: '10, 0', border: '1px solid' }}>
            <h3>评论人：{this.props.user}</h3>
            <h5>评论内容：</h5>
        </div>
    }
}
