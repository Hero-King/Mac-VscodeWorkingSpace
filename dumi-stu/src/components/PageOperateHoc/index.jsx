import React, { Component, Fragment } from 'react';
import {message, Skeleton, Spin} from 'antd';
import propTypes from 'prop-types';
import { checkAuth } from './api.js';
import { Redirect } from 'react-router-dom'
import { getUserInfo, cache } from "../../utils/CommonUtils";
import ExceptionPage from '../../components/ExceptionPage/index.jsx';
import { checkOperateAuth } from '../../utils/CommonUtils.js';
import qs from 'qs';

const PageOperateHoc = WrappedComponent => {
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
      const { history } = this.props;
      const userInfo = getUserInfo() || {};
      const {sessionId="", accessToken=""} = userInfo;
      const queryObj = qs.parse(window.location.href.split('?')[1]);

      let prms = {
        sessionId: queryObj._s,
        url: history.location.pathname,
        appCode: process.env.REACT_APP_MODULE_NAME,
      };
      if (!queryObj._s) {
        prms.sessionId = sessionId;
        prms.accessToken = accessToken;
        prms.appCode = process.env.REACT_APP_MODULE_NAME;
      };

      checkAuth(prms)
      .then(res => {
        const { statusCode, data } = res;
        let componentType = statusCode;
        if (statusCode === 200 && data && data.length) {
          const [sessionUser, featureSet=[]] = data;
          if (sessionUser.authorityPolicy === "NormalUser") {
            this.operateAuthority = featureSet;
          } else {
            this.operateAuthority = 'admin';
          }
          if (!cache.get('Authorization') && queryObj._s) {
            // 外部系统进来的页面，重新获取权限
            sessionStorage.setItem('Authorization', JSON.stringify(sessionUser));
            sessionStorage.setItem('_s', queryObj._s);
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

    checkOperateAuth = (operateCode) => {
      return checkOperateAuth(this.operateAuthority, operateCode);
    }

    getRenderComponent = (type) => {
      const components = {
        "loading": (<Spin spinning={true}></Spin>),
        // "401": (<Redirect to={"/login"}/>),
        "401": (<WrappedComponent operateAuthority={this.operateAuthority} checkOperateAuth={this.checkOperateAuth} {...this.props}></WrappedComponent>),
        "403": (<ExceptionPage type="403"/>),
        "200": (<WrappedComponent operateAuthority={this.operateAuthority} checkOperateAuth={this.checkOperateAuth} {...this.props}></WrappedComponent>),
        "500": (<ExceptionPage type="500"/>)
      };

      return components[type];
    }

    getChildren = () => {
      const { componentType } = this.state;
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

export default PageOperateHoc;
