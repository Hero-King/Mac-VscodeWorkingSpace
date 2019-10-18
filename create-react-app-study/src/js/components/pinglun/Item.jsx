import React from 'react'
import { Button } from 'antd';
export default class Item extends React.Component {
    render() {
        let { comment, id } = this.props
        //console.log(comment);

        return (
            <React.Fragment>
                <h2>{comment.username}说：</h2>
                <p style={{ margin: 10 }}>{comment.comment}</p>
                <Button onClick={this.del}>删除评论</Button>
            </React.Fragment>
        )

    }

    del = () => {
        if (window.confirm(`你确定要删除${this.props.comment.username}的评论吗`)) {
            this.props.del(this.props.id)
        }
    }
} 