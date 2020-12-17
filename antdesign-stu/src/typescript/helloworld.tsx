
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
            aa
        </div>
        )

}


interface Person {
    firstName: string;
    lastName: string;
}

function Greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };
