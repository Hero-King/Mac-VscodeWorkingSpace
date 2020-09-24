import React, { useState } from 'react'

export default function () {

    const [inputValue1, setinputValue1] = useState("")
    const [inputValue2, setinputValue2] = useState("")
    const [optionVlaue, setoptionValue] = useState("")
    const arr = [{
        title:"1111",
        checked: true
    },{
        title: "2222",
        cheched: false
    }]
    const [radioSelect, setRadioSelect] = useState("1")

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(radioSelect,optionVlaue);
    }

    return <div>
        <h3>react使用原生的html标签</h3>

        1. 获取input输入框的值
        <input onChange={(e) => { setinputValue1(e.target.value) }} /> <button onClick={(e) => console.log(inputValue1)}>点击获取值</button>
        <br />
        2.input标签的双向绑定
        {/* <input value={inputValue2} ></input>   error  value属性绑定动态数据必须同时提供onChange事件处理程序 defaultValue不需要  */}
        {/* <input defaultValue={inputValue2}/> */}
        <input value={inputValue2} onChange={(e) => { setinputValue2(e.target.value) }} />
        { inputValue2 === ""  ? null : inputValue2}
        <br/>
        3.使用form需要阻止form的默认行为
        <form onSubmit={handleSubmit}>
            性别： <input type="radio" value="1" checked={radioSelect ==1 } onChange={(e) => setRadioSelect("1")}/>男
            <input type="radio" value="2"  checked={radioSelect ==2 } onChange={(e) => setRadioSelect("2")}/>女
            

            <select value={optionVlaue} onChange={e => setoptionValue(e.target.value)}>
                {arr.map((item,index) => {
                    return (
                        <option key={index} cheched={item.cheched}>{item.title}</option>
                    )
                })}
            </select>
            
            <input type="submit" value="提交"/>
        </form>
    </div>
}