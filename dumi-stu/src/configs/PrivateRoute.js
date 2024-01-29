/**
 * @description
 * @autor liusonglin
 * @date 2018/8/28.
 */
import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import {Spin} from 'antd';


class PrivateRoute extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { component: Component,componentProps, ...rest } = this.props;
        return (
            <Route
                {...rest}
                render={props =>{
                    return <Component {...props} {...componentProps} />}  }
            />
        )

    }
}

export default PrivateRoute
