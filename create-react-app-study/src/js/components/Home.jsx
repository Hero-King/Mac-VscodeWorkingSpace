import React from 'react'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    //constructor 并不是必须的  有的时候用不到可以不写
    render() {
        //当使用Hash Router标签把组件包裹之后，网站就启用路由了 访问的路径加上了#，在一个HashRouter 中只能包裹一个跟标签   如果想再组件里面获取路由的参数  可以console。log一下 this这个组件的对象 里面有很多属性 使用this.props.match.params获取url传过来的参数
        return <div>
            shouye
        </div>


    }
}
