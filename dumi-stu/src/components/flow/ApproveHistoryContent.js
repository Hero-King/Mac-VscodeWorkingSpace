/**
 * Created by pengxu on 2018/12/3.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Col, Icon, Row, Tabs, List, Timeline, Divider, message, Empty} from "antd";
import httpUtils from "../../utils/FeatchUtils";
import {isEmpty} from 'lodash';
import {seiLocale} from 'sei-utils';

const {seiIntl} = seiLocale;

class ApproveHistoryContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{},
            messageTips: '暂无数据'
        }
    }

    componentWillMount() {
        this.getInitData();
    }

    getInitData = () => {
        const {orderId}=this.props;
        let formData={'businessId': orderId};
        getFlowHistoryInfo(formData).then(res => {
            if (!isEmpty(res)) {
                this.setState({
                    data:res[0] || {},
                    messageTips: null
                })
            } else {
                this.setState({messageTips: '未找到相应流程历史'})
                message.error(seiIntl.get({key: 'gwmBdm_000137', desc: '未找到相应流程历史'}))
            }
        }).catch(err => {

        }).finally(()=>{
        })
    };

    showTime = val => {
        const day = seiIntl.get({key: "day", desc: "天" });
        const hour = seiIntl.get({key: "hour", desc: "小时" });
        const minute = seiIntl.get({key: "minute", desc: "分钟" });
        const second = seiIntl.get({key: "second", desc: "秒" });

        if (val < 60) {
            return `${val}\t${second}`;
        }
        const minTotal = Math.floor(val / 60); // 分钟
        const sec = Math.floor(val % 60); // 余秒

        if (minTotal < 60) {
            return `${minTotal}\t${minute}${sec}\t${second}`;
        }
        const hourTotal = Math.floor(minTotal / 60); // 小时数
        const min = Math.floor(minTotal % 60); // 余分钟

        if (hourTotal < 24) {
            return `${hourTotal}\t${hour}${min}\t${minute}${sec}\t${second}`;
        }
        const dayTotal = Math.floor(hourTotal / 24);
        const minHour = Math.floor(hourTotal % 24); // 余分钟
        return `${dayTotal}\t${day}${minHour}\t${hour}${min}\t${minute}${sec}\t${second}`;
    };

    render() {
        if(!this.state.data.flowHistoryList){
            return <Empty description={this.state.messageTips} />;
        }
        let flowHistoryList=this.state.data.flowHistoryList;
        let flowInstance=this.state.data.flowInstance;
        let flowTaskList=this.state.data.flowTaskList;
        return (
            <>
                <div style={{fontSize:'16px',color:'#aaa'}}>{seiIntl.get({key: 'gwmBdm_000142', desc: '当前处理状态'})}</div>
                {flowTaskList.length === 0 ? flowHistoryList && flowHistoryList[flowHistoryList.length - 1].depict[0] === "【" ?
                    <div style={{fontSize: "24px", width: "100%", marginLeft: "250px", marginTop: "20px"}}>
                        <b>{seiIntl.get({
                            key: 'gwmBdm_000143',
                            desc: '该流程已被终止'
                        })}                                        </b></div>
                    : <div style={{fontSize: "24px", width: "100%", marginLeft: "250px", marginTop: "20px"}}>
                        <b>{seiIntl.get({
                            key: 'gwmBdm_000144',
                            desc: '流程已处理完成'
                        })}                                        </b></div>
                    :
                    <List
                        itemLayout="horizontal"
                        dataSource={flowTaskList}
                        style={{marginLeft: "30px", marginTop: "10px"}}
                        renderItem={item => (
                            <>
                                <div style={{color: "#18A9FF"}}><Icon type="flag"/> <b>{item.taskName}</b></div>
                                <List.Item>
                                    <List.Item.Meta
                                        description={
                                            <div><Col span={6}>{seiIntl.get({
                                                key: 'gwmBdm_000145',
                                                desc: '等待处理人：'
                                            })}{item.ownerName}</Col><Col span={1}><Divider type="vertical"/></Col>
                                                <Col span={16} style={{textAlign: "right"}}>{seiIntl.get({
                                                    key: 'gwmBdm_000146',
                                                    desc: '任务到达时间：'
                                                })}{item.lastEditedDate}</Col></div>}
                                    />
                                </List.Item>
                            </>
                        )}
                    />
                }
                <div style={{fontSize:'16px',marginBottom:'10px',color:'#aaa'}}>{seiIntl.get({key: 'gwmBdm_000147', desc: '流程处理历史'})}</div>
                <Row>
                    <Col span={6}>
                        <div style={{color: "#18A9FF",marginLeft:'30px'}}><Icon type="flag"/> <b>{seiIntl.get({
                            key: 'gwmBdm_000148',
                            desc: '流程启动'
                        })}</b></div>
                    </Col>
                    <Col span={17}>
                        <div style={{
                            float: "right",
                            marginRight: "30px",
                            color: "rgba(0, 0, 0, 0.45)"
                        }}>{flowInstance.creatorName}<Divider type="vertical"/>
                            {flowInstance.createdDate}</div>
                    </Col>
                </Row>
                <Divider/>
                <Timeline
                    style={{marginLeft: "30px", marginTop: "20px", color: "rgba(0, 0, 0, 0.45)"}}
                >
                    {
                        flowHistoryList.map((item, index) => {
                            return <Timeline.Item key={`${item.flowName}${index}`}
                                                  dot={<Icon type="clock-circle-o" color="red"/>}>
                                <Row gutter={10}>
                                    <Col span={6}>
                                        <div><b>{item.flowTaskName}</b></div>
                                    </Col>
                                    <Col span={17}>
                                        <div style={{float: "right"}}>{seiIntl.get({
                                            key: 'gwmBdm_000149',
                                            desc: '处理人：'
                                        })}{item.executorName + " " + item.actEndTime}
                                        </div>
                                    </Col>
                                </Row>
                                <Row gutter={10} style={{marginTop: "5px"}}>
                                    <Col span={21} offset={2}>
                                        <div style={{
                                            float: "right",
                                            marginRight: "10px"
                                        }}>{seiIntl.get({key: 'gwmBdm_000150', desc: '耗时：'})}
                                            {this.showTime(
                                                (item.actDurationInMillis / 1000).toFixed(0)
                                            )}
                                        </div>
                                    </Col>
                                </Row>
                                <Row gutter={10} style={{marginTop: "5px"}}>
                                    <Col span={21} offset={2}>
                                        <div style={{
                                            float: "right",
                                            marginRight: item.depict[0] === "【" ? "5px" : "10px"
                                        }}>{seiIntl.get({key: 'gwmBdm_000151', desc: '处理摘要：'})}
                                            {item.depict}</div>
                                    </Col>
                                </Row>
                            </Timeline.Item>
                        })
                    }
                    {flowTaskList.length === 0 ?
                        <>
                            <Divider/>
                            <Row>
                                <Col span={6}>
                                    <div style={{color: "#18A9FF"}}><Icon
                                        type="flag"/><b>{seiIntl.get({key: 'gwmBdm_000152', desc: '流程结束'})}</b></div>
                                </Col>
                                <Col span={17}>
                                    <div style={{
                                        float: "right",
                                        color: "rgba(0, 0, 0, 0.45)"
                                    }}>{flowHistoryList[flowHistoryList.length - 1].actEndTime}</div>
                                </Col>
                            </Row></> : null
                    }
                </Timeline>

            </>
        );
    }
}
export const getFlowHistoryInfo= (params = {}) => {
    return httpUtils.post("/flow-service/flowInstance/getProcessTrackVO", params);
};

const mapStateToProps = (state) => {
    return {};
};

export default ApproveHistoryContent
