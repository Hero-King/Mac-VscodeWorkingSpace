import React from 'react'
import { Button } from 'antd'
export default class Add extends React.Component {

    render() {
        return (
            <div>
                用户名：<input placeholder="评论人" ref="user" style={{ width: 100 }} /><br />
                评论<textarea cols='12' rows='4' ref="comment"></textarea>
                <Button type="primary" onClick={this.addComment}>发表</Button>
            </div>
        )

    }

    //unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
    addComment = () => {    //箭头函数该变this指向
        console.log('11');
        //收集数据   获得元素  ref
        let username = this.refs.user.value
        console.log(username);

        let comment = this.refs.comment.value

        if (!username || !comment) {
            alert('请输入内容')
            return;
        }
        //整理数据
        let obj = { username, comment } //使用结构赋值  将数据封装成对象  最终到state 父组件里面
        //将数据交给App
        this.props.add(obj)

        //将文本框内容 空
        this.refs.user.value = ''
        this.refs.comment.value = ''
    }
} 