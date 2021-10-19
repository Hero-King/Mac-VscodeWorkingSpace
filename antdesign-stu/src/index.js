import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button, ConfigProvider } from 'antd';
import "./index.css"
import ReactApi from './reactApi.js'
import './aa'
// import './components/editTable'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// import Formstu from './components/formstu'
// import WrappedDynamicFieldSet from './components/formstu2'
// import CollectionsPage from './components/formstu1' //点击按钮调出modal
import NewTable from './components/newtable'
import LayoutStu from './react-route/layoutstu'
import SomeIcon from './components/Someicon'
import ReactImage from './reactImage'
import Yuansheng from './yuansheng'
import ToDoList from './components/todolist'
import ComponentIndex from './components/index'

// import aaaa from './export/exportUse'   // == import default as aaaa from 

import { Statistic, Card, Row, Col, Select, Divider, Modal } from 'antd';
import * as icons from '@ant-design/icons';
import Modalstu from './components/Modalstu';
// require('./echartsTest');  //使用这种方式执行 OK！
// import './echartsTest'  // 使用这种方式也可以执行成功
import * as all from './export/exportUse'
import todolist from './components/todolist';
import TreeSelectStu from './components/treeselectstu';
import { HelloWorld } from './typescript/helloworld';
require('bootstrap')
// require('./components/DateTimePickerTest')
// console.log(aaaa);  // 输出的是暴露出来的default对象
console.log("exportUse export all: ", all);



const props = {
    name: "小灰灰",
    age: 23
}

const AA = (props) => {

    // useEffect(() => {
    //     console.log("开始添加 onbeforeunload 事件");
    //     window.onbeforeunload = (e) => {
    //         return "12"
    //     }

    // }, [])

    console.log(props, "AA");
    function BB({ name, age }) {
        console.log(name, "BB");
        return <div>BB</div>
    }
    const CC = () => {
        return <div>CC</div>
    }
    return <div>AA <BB {...props} /> </div>
}

ReactDOM.render(
    <ConfigProvider prefixCls="ant">
        <Router basename="/route">
            <React.Fragment>
                <ComponentIndex />
                {/* <Modal 
            title="1111"
            visible={ false}
        >
            <Modalstu></Modalstu>
        </Modal>
        <Formstu></Formstu>
        <CollectionsPage />
        <WrappedDynamicFieldSet></WrappedDynamicFieldSet>

        
        <Statistic
            title={  <div>1111111</div>}
            value={9.3}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            // prefix={<ArrowDownOutlined />}
            suffix="%"
        /> */}
                <div>
                    <Select style={{ width: 100 }}>
                        <Select.Option value="lucy">
                            11
                    {/* <StepForwardOutlined />
                        22 */}
                            {"00" ? icons["StepForwardOutlined"].render() : null}
                            {/* <StepForwardOutlined /> */}
                        </Select.Option>
                    </Select>
                    <br></br>
                    <SomeIcon></SomeIcon>
                    <NewTable></NewTable>
                    <TreeSelectStu />
                </div>



                <ReactImage />

                <AA {...props} />

                <hr style={{ color: "red" }} />
                <Yuansheng />

                <h3>-------------todolist组件-----------</h3>
                <ToDoList />
                {/* <DateTimePickerTest/> */}

                {/* <RouterApp/> */}




                <hr />


                <div class='input-group date' id='datetimepicker1'>
                    <input type='text' class="form-control" />
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>


                <div class='input-group date' id='datetimepicker2'>
                    <input type='text' class="form-control" />
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>

                <h3>-----------layoutstu------------</h3>
                <LayoutStu></LayoutStu>
                <div className="module">
                    <h4>学习typescript</h4>
                    <HelloWorld />
                </div>

                <div className="module">
                    <h2>学习react hook组件</h2>
                    <ReactApi />
                </div>

                <div className="module">
                    <h2>学习ES7 装饰器decorator</h2>
                </div>

            </React.Fragment>
        </Router>
    </ConfigProvider>
    , document.getElementById('root'));

console.log("-------------");

const antContextDiv = document.getElementById("ant-context")
ReactDOM.render(<Test />, antContextDiv)

function Test(params) {
    return <div>
        <Button size="small">antd button</Button>
    </div>
}



