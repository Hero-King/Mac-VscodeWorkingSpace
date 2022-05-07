import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import Counter from '../pages/Counter.jsx'
import Father from '../pages/Father.jsx'
import { BrowserRouter } from "react-router-dom";
import Mobx from '../pages/mobx/mobx.jsx'
import App from './App.jsx'
$(function () {
    ReactDOM.render(
        <div>
            {/* initvalue='3' 是字符串 initvalue={3}是number */}
            <Counter initvalue={3}></Counter>
            <hr />
            {/* <Counter></Counter> */}
            <Father></Father>
        </div>, document.getElementById('div1')

    )

    var show3 = () => {
        console.log(333);
    }
    show3();
    ReactDOM.render(
        <BrowserRouter><App/></BrowserRouter>
        , document.getElementById('root')
    )
})