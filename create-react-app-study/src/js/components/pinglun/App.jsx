import React from 'react'
import Add from './Add';
import List from './List'
import { DatePicker } from 'antd'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //用什么来存储评论呢 数组  里面存放JS对象  数据是存储在父组件中的哦
            comments: [
                { username: 'wang', comment: '11111' },
                { username: 'jun', comment: '22222' }
            ]
        }
    }

    //state简单写法---》给组件对象（就是构造函数的实例  就是this）指定state属性
    /**
     * state = {
            //用什么来存储评论呢 数组  里面存放JS对象  数据是存储在父组件中的哦
            comments: [
                { username: 'wang', comment: '11111' },
                { username: 'jun', comment: '22222' }
            ]
        }
     */


    render() {
        let { comments } = this.state  //解构赋值
        const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

        function onChange(date, dateString) {
            console.log(date, dateString);
        }
        return (
            <div>
                <Add add={this.addComment}></Add>   {/** 指向外层了和Render（）同级别的函数hiszh */}
                <List comments={comments} del={this.delComment}></List>
                <RangePicker onChange={onChange} /> {/** 同层里面的函数 */}
            </div>
        )

    }

    addComment = (comment) => {
        let { comments } = this.state
        comments.unshift(comment) //数组前面添加comment元素
        this.setState(comments)
    }

    delComment = (id) => {
        let { comments } = this.state
        comments.splice(id, 1)
        this.setState({
            comments: comments
        })
    }
} 