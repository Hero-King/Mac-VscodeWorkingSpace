import React from 'react'
import { log } from 'util';
// 对应index3.html index3-counter.js 文件
export default class Father extends React.Component {
    constructor(args) {
        super(args)

        this.state = {
            msg: '父标签'
        }
    }

    render() {
        return <div>
            <h1>这是父组件</h1>
            <Son></Son>     {/**很优秀 */}
            <button onClick={this.changeMsg1}>点我changeMsg1</button>
            <button onClick={this.changeMsg2}>点我changeMsg2</button>
            <button onClick={this.changeMsg3.bind(this, '弟弟', '第一个是this指向，后面的全是参数')}>点我changeMsg3</button>
        </div>
    }

    /**
    * React中绑定this并传递参数的两种方式
    * 1.就是之前写的箭头函数，普通函数的this是内部对象 如下的changeMsg1()函数
    *
    *2.使用bind 修改内部函数的this指向，让函数内部的this指向bind参数列表中的第一个参数
    bind和apply/call的区别  bind不会立即调用，他两立即调用前面的函数，----bind返回由指定的this值和初始化参数改造的原函数拷贝 是一个函数！！！接受不接受都可以啊 看情况
    *
    */

    /* changeMsg1() {
        console.log(this.state.msg);    //Cannot read property 'state' of undefined
    } */
    changeMsg2 = () => {
        console.log(this.state.msg);
    }   //OK

    changeMsg3(arg1, arg2) {
        console.log(this.state.msg + arg1 + arg2);
    }
}
class Son extends React.Component {
    constructor(args) {
        super(args)

        this.state = {

        }
    }

    render() {
        return <div>
            <h3>这是子组件</h3>
        </div>
    }

    //组件将要接受外界传递过来的新的props时，第一次渲染到页面时不会触发这个函数，只有当组件通过某些事件 修改了props数据后才会触发！ 但是你不是说props是只读的吗，我们可以通过其它方式修改，比如传递的参数是父组件的state中的值，通过修改state达到修改props的目的
    componentWillReceiveProps() {
        //这个函数中获取this.props.XXX仍然是旧的   新的采用nextProps参数传入
    }
}


