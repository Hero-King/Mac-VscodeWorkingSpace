import React from 'react'
import { StepBackwardOutlined } from '@ant-design/icons'
import { Tooltip, message } from 'antd';
import $ from 'jquery'
import {makePost} from '../utils'
// import {StepBackwardOutlined } from 

export default function () {

    function sendAjaxMakePost(params) {
        makePost("localhost:4000",{code: 0}).then((result) => {
            console.log(result);
        }).catch((err) => {
            alert(err)
        });
    }


    function sendAjax(e) {
        $.get("http://localhost:3000/robots.txt", data => {
            console.log(data);
            // message.info('请求结束了',0)


        })
        message.loading('loading', 0.5)
    }

    function sendAjax1(params) {
        console.log($.get("http://localhost:3000/robots.txt"));
        console.log($.get("http://localhost:3000/robots.txt") instanceof Promise);   // false
        $.get("http://localhost:3000/robots.txt").then(data => {
            console.log(data, "success");  // 打印出来了
        }).catch(err => {
            console.log(err, "error");
        }).done(aa => {
            console.log(aa, "done"); // undefined 
        })

        $.get("http://localhost:3001/robots.txt").then(data => {
            console.log(data, "success");
        }).catch(err => {
            console.log(err, "error");  // 执行了
        }).done(aa => {
            console.log(aa, "3001");     // 执行了
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
        let def4 = $.get("http://localhost:3000/manifest.json", "json");
        $.when(def1, def2).then((data1, data2) => {
            console.log(data1, data2, "1--2");   // 一个是3001 请求不通报错了
        })

        $.when(def1, def3).then((data1, data3) => {
            console.log(data1, data3, "1--3");   // success
        })

        $.when(def1, def4).then((data1, data4) => {
            console.log(data1, data4, "1--4");   // success

        })
    }

    function sendAjax3(params) {
        let def1 = $.get("http://localhost:3000/robots.txt");
        let def2 = $.get("http://localhost:3001/manifest.json");
        let def3 = $.get("http://localhost:3000/manifest.json");
        let def4 = $.get("http://localhost:3000/manifest.json", "json");
        $.when(def1, def2).done((data1, data2) => {
            console.log(data1, data2, "done");   // 一个是3001 请求不通报错了 Done:  Add handlers to be called when the Deferred object is resolved.
        })

        $.when(def1, def2).then((data1, data3) => {
            console.log(data1, data3, "then");   // error
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
            <button onClick={sendAjaxMakePost}>测试ajax-- makePost</button>
            <button onClick={sendAjax}>测试ajax</button>
            <button onClick={sendAjax1}>测试ajaxcatch</button>
            <button onClick={sendAjax2}>测试ajaxwhen</button>
            <button onClick={sendAjax3}>测试ajaxdone</button>
            <img src="https://www.baidu.com/img/flexible/logo/pc/result.png" />
            {
                // setTimeout()方法的返回值是一个唯一的数值，这个数值有什么用呢？
                // 如果你想要终止setTimeout()方法的执行，那就必须使用 clearTimeout()方法来终止，而使用这个方法的时候，
                // 系统必须知道你到底要终止的是哪一个setTimeout()方法(因为你可能同时调用了好几个 setTimeout()方法)，
                // 这样clearTimeout()方法就需要一个参数，这个参数就是setTimeout()方法的返回值(数值)，
                // 用这个数值来唯一确定结束哪一个setTimeout()方法。
            }
        </div>

    )
}
