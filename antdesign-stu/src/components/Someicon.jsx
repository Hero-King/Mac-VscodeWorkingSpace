import React from 'react'
import { StepBackwardOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd';
import $ from 'jquery'
// import {StepBackwardOutlined } from 

export default function () {

    function sendAjax(e) {
        $.get("http://localhost:3000/robots.txt", data => {
            console.log(data);
        })
    }

    function sendAjax1(params) {
        console.log($.get("http://localhost:3000/robots.txt"));
        console.log($.get("http://localhost:3000/robots.txt") instanceof Promise);   // false
        $.get("http://localhost:3000/robots.txt").then(data => {
            console.log(data, "success");  // 打印出来了
        }).catch(err => {
            console.log(err, "error");
        }).done(aa => {
            console.log(aa,"done"); // undefined 
        })

        $.get("http://localhost:3001/robots.txt").then(data => {
            console.log(data, "success");  
        }).catch(err => {
            console.log(err, "error");  // 执行了
        }).done(aa => {
            console.log(aa,"3001");     // 执行了
        })

        $.get("http://localhost:3001/robots.txt").then(data => {
            console.log(data, "success");  
        }).catch(err => {
            console.log(err, "error");  // 执行了
        }).always(aa => {
            console.log(aa);    // 执行了
        })

    }

    function sendAjax2(params) {
        let def1 = $.get("http://localhost:3000/robots.txt");
        let def2 = $.get("http://localhost:3001/manifest.json");
        let def3 = $.get("http://localhost:3000/manifest.json");
        let def4 = $.get("http://localhost:3000/manifest.json","json");
        $.when(def1,def2).then((data1,data2) => {
            console.log(data1,data2,"1--2");   // 一个是3001 请求不通报错了
        })

        $.when(def1,def3).then((data1,data3) => {
            console.log(data1,data3,"1--3");   // success
        })

        $.when(def1,def4).then((data1,data4) => {
            console.log(data1,data4,"1--4");   // success
            
        })
    }

    function sendAjax3(params) {
        let def1 = $.get("http://localhost:3000/robots.txt");
        let def2 = $.get("http://localhost:3001/manifest.json");
        let def3 = $.get("http://localhost:3000/manifest.json");
        let def4 = $.get("http://localhost:3000/manifest.json","json");
        $.when(def1,def2).done((data1,data2) => {
            console.log(data1,data2,"done");   // 一个是3001 请求不通报错了 Done:  Add handlers to be called when the Deferred object is resolved.
        })

        $.when(def1,def2).then((data1,data3) => {
            console.log(data1,data3,"then");   // error
        })

       
    }

    return (
        <div>
            <StepBackwardOutlined spin={true} onClick={(e) => {
                console.log(e);
            }} />
            asasasasa
        <Tooltip title="哈哈哈" overlayStyle={{ fontSize: 40, color: "red" }}>
                111111111111111111
        </Tooltip>
            <button onClick={sendAjax}>测试ajax</button>
            <button onClick={sendAjax1}>测试ajaxcatch</button>
            <button onClick={sendAjax2}>测试ajaxwhen</button>
            <button onClick={sendAjax3}>测试ajaxdone</button>
            <img src="https://www.baidu.com/img/flexible/logo/pc/result.png"/>
        </div>

    )
}
