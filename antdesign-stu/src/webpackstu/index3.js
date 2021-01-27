import React from 'react'
import ReactDOM from 'react-dom'
import '../../node_modules/antd/dist/antd.css'

import {Button} from 'antd'


// const aa =React.createElement('div', {
//     title: 'hello react',className: "imgsmall"
//   }, 'Hello React！！！')
const aa = <div>
    <Button type="primary" style={{width: "2rem"}}>200px</Button>
    <span className="reactdiv">reactdiv  </span>
</div>
ReactDOM.render(aa,document.getElementById("root"))
