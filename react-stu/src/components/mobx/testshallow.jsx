import React from "react";
// observer 可以用作包裹 React 组件的高阶组件。
import { observer, inject, } from "mobx-react";
import {toJS} from 'mobx'

@inject("appstore")
@observer
class TestShallow extends React.Component{

    render(){
        // const obj = toJS(this.props.appstore.testShallowObj)
        // const obj = toJS(this.props.appstore.testShallowObj.first)
        const obj = toJS(this.props.appstore.testShallowObj.first.second)
        console.log(obj);
        return <div>
            <h3>测试Shallow</h3>
            <button onClick={e => this.props.appstore.setTestShallowObj(0)}>改变testShallowObj指向</button>
            <button onClick={e => this.props.appstore.setTestShallowObj(1)}>改变first指向</button>
            <button onClick={e => this.props.appstore.setTestShallowObj(2)}>改变second指向</button>
            {JSON.stringify(obj)}
        </div>
    }
}

export default TestShallow