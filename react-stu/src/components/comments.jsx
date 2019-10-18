import React from 'react';

class Comment extends React.Component {
    constructor() {
        super()

        //定义私有数据
        this.state = {
            coms: [
                { id: 1, user: '张三1', content: '111111' },
                { id: 2, user: '张三2', content: '222222' },
                { id: 3, user: '张三3', content: '333333' },
                { id: 4, user: '张三4', content: '444444' },
                { id: 5, user: '张三5', content: '555555' }
            ]
        }
    }
    render() {
        //循环遍历出coms的user
        //-------方式一
        // var arr = [] 
        // this.state.coms.forEach(item => {
        //     arr.push(<h2>{item.user}</h2>)
        // })
        // return <div>{arr}</div>

        //-----------方式二
        // return <div>
        //     {this.state.coms.map(item => {
        //         return <div key={item.id}>
        //             <h2>评论人：{item.user}</h2>
        //             <h2>评论内容：{item.content}</h2>
        //         </div>
        //     })}
        // </div>
        //-----------方式三  key
        return <div>
            {this.state.coms.map((item, i) => {
                return <div key={i}>
                    <h2>评论人：{item.user}</h2>
                    <h2>评论内容：{item.content}</h2>
                </div>
            })}
        </div>
    }
}
export default Comment;
