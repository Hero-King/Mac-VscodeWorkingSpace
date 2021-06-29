
import React from 'react'
import {Button} from 'antd'
/**
 * 文件拓展名.tsx
 * 工具命令 tsc
 * 
 * 
 * 
 */


export function HelloWorld() {
    return (
        <div>
            <Greeter firstName="firstName" lastName="lastName"/>
            <Type/>
        </div>
        )

}


interface Person {
    firstName: string;
    lastName: string;
}

export interface TypeProps{
    name: string
}

// 接口
class Type extends React.Component<TypeProps,{}>{
    constructor(props){
        super(props)
    }
    render(){
        return <div>指定类型</div>
    }
}

function Greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
