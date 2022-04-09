import React from 'react'

export default function(props){
    return <div>
        children
        <Child children={<button>child button</button>}/>
    </div>
}

function Child(props){
    return <div>
        {props.children}
    </div>
}