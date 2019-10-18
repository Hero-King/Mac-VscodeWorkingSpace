import React from 'react'
import Cmtitem from './Cmtitem.jsx';  //拓展名！！必须写
import Combox from './Combox.jsx'
export default class Cmtlist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                { user: 'wang', content: 'wangwangwang' },
                { user: 'jun', content: 'jnujunjun' },
                { user: 'jie', content: 'jiejiejie' }
            ]
        }
    }

    render() {
        return <div>
            <h1>这是评论列表</h1>

            {/*下面放发表评论组件 */}
            <Combox></Combox>

            {/**下面放评论数据组件--循环 */}
            {this.state.list.map((item, index) => {
                return <Cmtitem key={index} {...item} />  //return 必须存在  属性使用属性扩散  将所有的属性传递给子组件
            })}
        </div>

    }
}