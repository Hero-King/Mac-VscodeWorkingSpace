## 页面鉴权
高阶组件, 从sessionStorage中获取用户token信息,鉴权当前url是否有权访问

### 代码示例
```jsx
/**
 * title: 
 * defaultShowCode: true
*/
import React from 'react'
import { PageOperateHoc } from 'dumi-stu'
import { history, withRouter  } from 'umi'

@PageOperateHoc
class Test extends React.Component{
    render(){
        const { operateAuthority } = this.props;
        return <div>
            鉴权结果: {JSON.stringify(operateAuthority)}
        </div>
    }
}

export default withRouter(Test)
```

<!-- ```jsx
/**
 * title: 反例
 * debug: true
*/
import React from 'react'
import { PageOperateHoc } from 'dumi-stu'
import { history, withRouter  } from 'umi'

@PageOperateHoc
class Child extends React.Component{

    render(){
        const { operateAuthority } = this.props;
        return <div>
            鉴权结果: {operateAuthority.length}
        </div>
    }
}
const TestResult =  withRouter(Child)

class TokenInput extends React.Component{
    state = {
        flag: false
    }

    componentDidMount(){
        sessionStorage.removeItem("Authorization")
    }
   
    saveToken(token){
        sessionStorage.setItem("Authorization",token)
        this.setState({flag: !this.state.flag})
    }
    render(){
        const {flag} = this.state
        return <div>
        <label> 
            请输入用户token: <input onChange={e => this.saveToken(e.target.value)}/>
        </label>
        { flag && <TestResult />
        }
    </div>
    }
}

export default TokenInput
``` -->

### 说明
高阶组件在DidMount中鉴权, 请在组件挂载前存储好token
