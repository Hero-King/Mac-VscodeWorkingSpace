import React from 'react'

export default class Combox extends React.Component {

    render() {
        return <div>
            <label>评论人：</label><br />
            <input type='text'></input><br />
            <label>评论内容：</label><br />
            <textarea cols="25" rows="3"></textarea><br />
            <input type="submit" value="提交" onClick={this.postComment}></input>
        </div >
    }

    //  数据交换这一块还没学  视频第八 --17React渲染后面没看完
    postComment = () => {

    }
}
