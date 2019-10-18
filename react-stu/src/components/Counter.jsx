import React from 'react'
import proptypes from 'prop-types';
/**
 * 组件创建阶段执行的生命周期函数：
 * this.statu 
 * defaultProps
 * componentWillMount
 * render
 * componentDidMount
 * 
 * 写计数器获取点击元素应该写在哪里？
 *  */

//对于我们封装好的组件  不一定就是自己用   别人也会使用，如果引入的props不合法，是不是达不到我们想要的结果  我们应该做一些类型校验  比如使用中 
//<Counter initvalue='哈哈哈哈,我就是来捣乱的这个参数你敢用吗'></Counter>

//这里面写计数器的组件样子  组件名字要不要大写？
class Counter extends React.Component {
    constructor(props) {
        super(props)//props 代表外界传过来的参数--外面写的标签的属性值

        //这里存放私有数据  ajax引用等等
        this.state = {      //state 状态 status地位; 身份; 职位; 高级职位
            msg: 'nihao',
            initvalue: props.initvalue
        }
    }

    /**
     * 对于没有给初始化参数的组件怎么办？ 我们一般需要设置 
     * static defaultProps   引入@babel/plugin-proposal-class-properties插件   proposal 提案
     */
    static defaultProps = {
        initvalue: 0
    }

    //创建一个静态的propTypes对象，用于类型校验,需要安装react提供的第三方包 prop-types
    static propTypes = {
        initvalue: proptypes.number //定义initvalue是number类型 
    }

    //组件还没有被挂载阶段，这里没有页面组件DOM的某标签，可以获得上面的props
    componentWillMount() {
        console.log(this.props.initvalue);
        console.log(document.getElementById('myh3')); //null
        this.myfun() //可以输出--表明组件身上的所有函数已经初始化好了
    }


    //render函数return一个虚拟DOM，return之前并没有创建
    render() {

        // console.log(this.refs.h3.innerHTML);    //会报错  因为第一次render还没有h3元素 undefined  应该这么写: A&&B A是空的话 B就不执行了
        console.log(this.refs.h3 && this.refs.h3.innerHTML);


        console.log(document.getElementById('myh3')); //null
        return <div>
            <input type='button' value='+1' id='btn' onClick={this.increment} />
            <hr />
            <h3 id='myh3' ref='h3'>当前的计数值是：{this.state.initvalue}</h3>
        </div>
        //return/render执行完毕，创建了虚拟DOM节点，但是并没有被挂载到真正页面当中，页面是没有数据的
    }

    //当组件挂载到页面上之后，进入这个生命周期函数，此时页面已经有可见的DOM元素
    componentDidMount() {
        console.log(document.getElementById('myh3'));//在这个函数中，可以操作需要的使用的DOM元素了
        // document.getElementById('btn').onclick = function () {
        //     this.props.initvalue++ //Cannot read property 'initvalue' of undefined 不能读取undefined对象的initvalue属性，说明this.props是一个undefined对象  
        //     console.log(this.props);    //因为this代表了点击的对象，不是我们的组件了
        // }

        //这种原声的方式不推荐  react有自己的事件
        /* document.getElementById('btn').onclick = () => {
            // this.props.initvalue++;     //Cannot assign to read only property 'initvalue' of object  还记得吗  props是只读属性  想要修改只能是私有属性 state
            // this.state.initvalue++;   不行 直接修改state，组件并不会重新触发render  正确的修改方式是使用setSate()  

            // this.setState({ initvalue: this.state.initvalue + 1 })
            // console.log(this.state.initvalue);//注意 setState()函数是异步的，log出来的数据不是最新的  应该使用回调函数

            this.setState({ initvalue: this.state.initvalue + 1 }, () => {
                console.log(this.state.initvalue);

            })

        } */


        //react自己的事件机制
    }

    myfun(params) {
        console.log('这是我自己定义的函数');//输出了<h3>标签信息

    }

    /* increment() {   //Cannot read property 'setState' of undefined  说明this又不对了   把increment改成箭头函数 并赋给increment  （箭头函数看上去是匿名函数的一种简写，但实际上，箭头函数和匿名函数有个明显的区别：箭头函数内部的this是词法作用域，由上下文确定。）
        let show1 = function () {
            console.log(111);
        }
        show1()  //输出111       更换写法：
        let show2 = () => {
            console.log(222);

        }
        show2()     //输出222
        this.setState({ initvalue: this.state.initvalue + 1 })
    } */

    increment = () => {
        this.setState({ initvalue: this.state.initvalue + 1 })
    }

    //组件运行中生命周期
    shouldComponentUpdate() {
        //Component always returns true
        //return false;   运行中时state发生改变时是否需要组件更新，默认是true，返回false的话退回运行中的状态，state的值会被改变

        /* return this.state.initvalue % 2 === 0 ? true : false; */
        //出现的效果不一致哎  奇数更新  偶数不更新   因为并没有获取到最新的数据 异步的setState（）

        console.log(this.state.initvalue); //3   可以使用nextState  nextProps 两个参数传入 他两是最新的数据
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.initvalue % 2 === 0 ? true : false;
    }

    //组件将要更新，此时尚未更新，在进入这个生命周期函数的时候，内存中的虚拟DOM是旧的，页面上DOM元素也是旧的
    componentWillUpdate() {
        /*元素定位的新方式：ref ref 有三种用法：
        1、ref 加在普通的元素上，用this.refs.name 获取到的是dom元素 上面h3添加了ref='h33'属性
        2、ref 加在子组件上，用this.refs.name 获取到的是组件实例，可以使用组件的所有方法。
        3、如何利用 v -for 和 ref 获取一组数组或者dom 节点
        */
        console.log(this.refs.h3.innerHTML);
        /**     JS中函数什么时候需要加（） 什么时候不需要  --也是属性的一种  需要返回值时候用（）
         * 函数名后面加括号，是表示要立即执行这个函数，然后返回函数的运行结果；
            不加括号，则代表函数本身（函数本身也是一个对象）。
            oDiv.onmouseover=toGreen;
            这是把toGreen这个函数绑定到oDiv的onmouseover事件上
            oDiv.onmouseover=toGreen();
            这是把toGreen这个函数的返回值“绑定”到oDiv的onmouseover事件上，这显然是错误的
         * 
         */

    }

    //此时组件完成更新，state props 虚拟DOM 页面DOM都是最新的，可以放心大胆的去操作DOM
    componentDidUpdate() {
        console.log(this.refs.h3.innerHTML);

    }

}

export default Counter;