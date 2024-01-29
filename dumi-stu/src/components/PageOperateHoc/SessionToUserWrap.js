/**
 * @Description: 外部系统进入流程页面，重新生成权限，OA回调
 * @Author: wanghao
 * @Date: 2021/4/20
 */
import React, {Component} from "react";
import {message, Spin} from "antd";
import {mainTabAction} from "sei-utils";
import queryString from "query-string";
import {checkAuth} from './api.js';
import {cache} from "../../utils/CommonUtils";
import httpUtils from "../../utils/FeatchUtils";
import {basicUrl} from "../../configs/DefaultConfig";

//获取对应code下数据字典的值
const listAllDataValue = (param) => {
    param.isAll = false;
    return httpUtils.get(basicUrl + "/dataDict/getDataDictItems", param);
};
const getSizeLimit = () => {
    return httpUtils.get(basicUrl + '/commonExt/getDataDictByCode?categoryCode=LIMIT_SIZE_Attachment&code=sizeLimit');
}
const SessionToUserWrap = WrappedComponent => {
    return class extends Component {
        state = {
            loading: false,
            oaUrl: null
        }

        afterCompleteTask = (taskId) => {
            const {oaUrl} = this.state;
            const queryObj = queryString.parse(this.props.location.search);
            if (queryObj.oa === "1" && !queryObj.fc) {
                window.location.href = oaUrl + "/workflow/request/ViewRequestOS.jsp?reflush=1";
            } else {
                mainTabAction.tabClose(taskId)
            }
        };

        componentWillMount() {
            const queryObj = queryString.parse(this.props.location.search);
            // oa系统推过来的单据会带有 oa=1
            if (queryObj.oa === "1") {
                this.getToken(queryObj);
            }
        }

        getToken = (queryObj) => {
            if (!cache.get('Authorization') && queryObj._s) {
                const params = {
                    sessionId: queryObj._s,
                    url: this.props.history.location.pathname,
                    appCode: process.env.REACT_APP_MODULE_NAME,
                };
                this.setState({loading: true})
                checkAuth(params)
                    .then(res => {
                        const {statusCode, data} = res;
                        if (statusCode === 200 && data && data.length) {
                            const [sessionUser, featureSet = []] = data;
                            sessionStorage.setItem('Authorization', JSON.stringify(sessionUser));
                            sessionStorage.setItem('_s', queryObj._s);
                            this.getOaUrl();
                        }
                    })
                    .catch(err => {
                        message.error(err);
                    })
                    .finally(() => {
                        this.setState({loading: false})
                    });
            } else {
                this.getOaUrl();
            }
        };

        getOaUrl = () => {
            listAllDataValue({categoryCode: "OA_IP_ADDRESS"})
                .then(res => {
                    if (res.success) {
                        this.setState({oaUrl: res.data[0].value})
                    }
                })
                .catch(err => {
                    message.error(err);
                })
                .finally(() => {});
            getSizeLimit().then(ds => {
                if (ds.success) {
                    let num = Number(ds.data.value);
                    let result = !isNaN(num) ? num : 1000000;
                    sessionStorage.setItem('limitSize', result);
                }
            });
        };

        render() {
            const {loading} = this.state;
            if (loading) {
                return (
                    <div style={{height: "100vh", width: "100%", textAlign: "center"}}>
                        <Spin tip="权限校验中..."/>
                    </div>
                )
            }
            return <WrappedComponent {...this.props} afterCompleteTask={this.afterCompleteTask}/>
        }
    }
};
export default SessionToUserWrap;

