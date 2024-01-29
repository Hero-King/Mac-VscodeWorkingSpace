import React, {Component, Fragment} from 'react';
import {Spin} from 'antd';
import propTypes from 'prop-types';
import {checkAuth} from './api.js';
import {getUserInfo} from "../../utils/CommonUtils";
import {ExceptionPage} from "seid";
import qs from 'qs';
function checkOperateAuth(operateAuthority, operateCode) {

    if (operateAuthority === 'admin' ||
        (Array.isArray(operateAuthority) &&
            operateAuthority.includes(operateCode))
    )
    {
        return true;
    } else {
        return false;
    }
}
const ContractLoginHoc = WrappedComponent => {
    return class extends Component {

        static childContextTypes = {
            operateAuthority: propTypes.any
        }

        getChildContext() {
            return {
                operateAuthority: this.operateAuthority
            };
        }

        operateAuthority = []

        state = {
            componentType: 'loading'
        }

        componentDidMount() {
            const {history} = this.props;
            const userInfo = getUserInfo() || {};
            const {sessionId = "", accessToken = ""} = userInfo;
            const queryObj = qs.parse(window.location.href.split('?')[1]);
            let prms = {
                sessionId: queryObj._s,
                url: history.location.pathname,
                appCode: process.env.REACT_APP_MODULE_NAME,
            };
            if (!queryObj._s) {
                prms.sessionId = sessionId;
                prms.accessToken = accessToken;
            }
            ;
            checkAuth(prms)
                .then(res => {
                    const {statusCode, data} = res;
                    let componentType = statusCode;
                    if (statusCode === 200 && data && data.length) {
                        const [sessionUser, featureSet = []] = data;
                        if (sessionUser.authorityPolicy === "NormalUser") {
                            this.operateAuthority = featureSet;
                        } else {
                            this.operateAuthority = 'admin';
                        }
                        if (res.data[0]) {
                            sessionStorage.removeItem('Authorization', JSON.stringify(res.data[0]));
                            sessionStorage.removeItem('_s', res.data[0].sessionId);
                            sessionStorage.setItem('Authorization', JSON.stringify(res.data[0]));
                            sessionStorage.setItem('_s', res.data[0].sessionId);
                        }
                    }
                    this.setState({
                        componentType
                    });
                })
                .catch(err => {
                    this.setState({
                        componentType: '500'
                    });
                })
        }

        doCheckOperateAuth = (operateCode) => {
            return checkOperateAuth(this.operateAuthority, operateCode);
        }

        getRenderComponent = (type) => {
            const components = {
                "loading": (<Spin spinning={true}></Spin>),
                // "401": (<Redirect to={"/login"}/>),
                "401": (<ExceptionPage type="401"/>),
                "403": (<ExceptionPage type="403"/>),
                "200": (<WrappedComponent operateAuthority={this.operateAuthority}
                                          checkOperateAuth={this.doCheckOperateAuth} {...this.props}></WrappedComponent>),
                "500": (<ExceptionPage type="500"/>)
            };

            return components[type];
        }

        getChildren = () => {
            const {componentType} = this.state;
            return this.getRenderComponent(componentType);
        }

        render() {
            return (
                <Fragment>
                    {this.getChildren()}
                </Fragment>
            );
        }
    }
}

export default ContractLoginHoc;
