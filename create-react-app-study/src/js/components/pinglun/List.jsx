import React from 'react'
import Item from './Item';
export default class List extends React.Component {
    render() {
        let comments1 = this.props.comments;
        console.log(comments1);
        let { comments } = this.props
        return (
            <div>
                {
                    comments.map((item, index) => {
                        return <Item key={index} comment={item} id={index} del={this.props.del}></Item>
                    })
                }
            </div>
        )

    }
} 