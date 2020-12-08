import React from 'react'
import logo from './logo512.png'

export default function(){
    return (
        <div id="react-image">
            {/* react中引入图片是不可以这么直接引入的 需要使用模块化导入 */}
            {/* <img src="../public/images/logo512.png" alt="error"/>    */}

            <img src={logo} alt="module error" srcset="" style={{width: 100,height: 100}}/>

            <img src={require('./logo512.png')} alt="哈哈哈哈哈 require error" style={{width: 100,height: 100}}/>
        </div>
    )
}