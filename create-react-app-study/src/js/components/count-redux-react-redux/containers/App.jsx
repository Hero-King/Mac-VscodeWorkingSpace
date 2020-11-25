/**
 * 主要存放  包装过的组件
 *  App 是包装Counter后生成的组件
 */
import React from 'react'
import Counter from '../components/counter'


export default function(props){
    return <Counter></Counter>
}

