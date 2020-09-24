import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from  'react-dom'
import RouterApp from '../react-route/routerApp'

// 父组件想要执行子组件里面的方法和数据，可以父组件通过ref指向子组件，父组件中使用this.refs。“”》得到子组件实例
// 父组件给调用子组件时候没有给出指定的props 可以再子组件中使用defaultprops定义默认值


export default function(){
    const [inputValue, setinputValue] = useState("");
    const inputRef  = useRef(null)
    const [list, setlist] = useState( localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) :  [{
        title: "1111",
        completeEd: true
    },{
        title: "2222",
        completeEd: false
    }] )

    const handleChange = (index) => {
        list[index].completeEd = !list[index].completeEd;
        setlist([...list])
    }

    useEffect(() => {
        localStorage.setItem("list",JSON.stringify(list))
    },[list])

    return (
        <div>
            <h2>React todolist 展示</h2>
            <input ref={inputRef}></input> <button onClick={(e) => {setlist([{title:inputRef.current.value,completeEd: false},...list]); inputRef.current.value= ""; }}>添加+</button>

            <br/>
            <h2>已完成</h2>
            <ul>
                {
                    list.map((item,index) => {
                        if(item.completeEd){
                            return <li key={index} ><input type="checkbox" checked={item.completeEd} onChange={e => handleChange(index)}/>{item.title}</li>
                        }
                    })
                }
            </ul>
            <br/>
            <h2>未完成</h2>
            <ul>
                {list.map((item,index) => {
                   if(!item.completeEd){
                    return (
                        <li key={index}>
                            <input type="checkbox" checked={item.completeEd} onChange={e => handleChange(index)} />{item.title}
                        </li>
                    )
                   }
                })}
            </ul>

            <hr />
            <h3>todolist组件中挂载的路由组件学习</h3>
            <RouterApp/>
        </div>

    )
}











