import React from 'react';
import ReactDOM from 'react-dom';

// import './components/editTable'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './index.css'
// import Formstu from './components/formstu'
// import WrappedDynamicFieldSet from './components/formstu2'
// import CollectionsPage from './components/formstu1' //点击按钮调出modal
import NewTable from './components/newtable'
import LayoutStu from './components/layoutstu'
import SomeIcon from './components/Someicon'
import RouterApp from './react-route/routerApp'
import ReactImage from './reactImage'
import Yuansheng from './yuansheng'
import ToDoList from './components/todolist'

// import './threejs'
// import aaaa from './export/exportUse'   // == import default as aaaa from 

import { Statistic, Card, Row, Col ,Select, Divider, Modal  } from 'antd';
import * as icons from '@ant-design/icons';
import Modalstu from './components/Modalstu';
// require('./echartsTest');  //使用这种方式执行 OK！
// import './echartsTest'  // 使用这种方式也可以执行成功
import * as all from './export/exportUse' 
import todolist from './components/todolist';
import TreeSelectStu from './components/treeselectstu';
require('bootstrap')
// require('./components/DateTimePickerTest')
// console.log(aaaa);  // 输出的是暴露出来的default对象
console.log("exportUse export all: " , all);



const props = {
    name: "小灰灰",
    age: 23
}

const AA = (props) => {
    console.log(props,"AA");
    function BB({name,age}){
        console.log(name,"BB");
        return <div>BB</div>
    }
    const CC = () =>{
        return <div>CC</div>
    }
    return <div>AA <BB {...props}/> </div>
}

ReactDOM.render(
    <Router>
    <React.Fragment>
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
            <Select style={{ width: 100}}>
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
            <TreeSelectStu/>
        </div> 
        
        {/* <LayoutStu></LayoutStu> */}
        
        <ReactImage/>
        
        <AA {...props}/>

        <hr style={{color: "red"}}/>
        <Yuansheng/>
        <ToDoList/>
        {/* <DateTimePickerTest/> */}

        {/* <RouterApp/> */}




    <hr/>
     

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

                   
    </React.Fragment>
    </Router>
    , document.getElementById('root'));

console.log("-------------");

// 测试组件里面的函数怎么写

// test jquery 




