import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import Counter from '../components/Counter.jsx'
import Father from '../components/Father.jsx'
import { BrowserRouter } from "react-router-dom";
import Mobx from '../components/mobx/mobx.jsx'
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