/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AlarmDevice } from './AlarmDevice';
import type { AlarmStrategyCondition } from './AlarmStrategyCondition';

export type AlarmStrategyDTO = {
    /**
     * 告警策略id
     */
    id?: number;
    /**
     * 是否可用
     */
    isActive?: number;
    /**
     * 告警类型
     */
    alarmType?: string;
    /**
     * 告警等级
     */
    alarmLevel?: string;
    /**
     * 告警名称
     */
    alarmName?: string;
    /**
     * 告警次数
     */
    alarmCount?: number;
    /**
     * 告警状态
     */
    status?: number;
    /**
     * 推送方式
     */
    notifyMethod?: string;
    /**
     * 持续规则次数(事件告警)
     */
    accumulateCount?: number;
    /**
     * 持续规则时间（事件告警）
     */
    accumulateTimeDuration?: string;
    /**
     * 持续规则单位（事件告警）
     */
    accumulateTimeUnit?: string;
    /**
     * 系统提示方式
     */
    systemRemindMethod?: string;
    /**
     * 是否自动创建事件
     */
    isAutoCreateEvent?: number;
    /**
     * 通讯恢复后是否通知我（通讯告警）
     */
    isNeedInformRecover?: number;
    /**
     * 无数据上抛时长（通讯告警）
     */
    offlineTimeDuration?: number;
    /**
     * 无数据上抛时长单位（通讯告警）
     */
    offlineTimeUnit?: string;
    /**
     * 告警时间(星期*)（越线，变位告警）
     */
    weekday?: string;
    /**
     * 告警时间段
     */
    alarmTimeRanges?: string;
    /**
     * 计算方式：瞬时计算，区间计算（事件告警）
     */
    timeMode?: string;
    /**
     * 时间间隔
     */
    intervalTimeDuration?: number;
    /**
     * 时间间隔单位天，时，分，秒
     */
    intervalTimeUnit?: string;
    /**
     * 固定，滑动
     */
    intervalType?: string;
    /**
     * 固定间隔开始时间，当上列为固定区间时，填写
     */
    fixIntervalStartTime?: string;
    /**
     * 公式配置 html（事件告警）
     */
    formula?: string;
    /**
     * 公式配置 需要解析的
     */
    formulaRemark?: string;
    /**
     * 通知用户
     */
    alarmUserIds?: string;
    /**
     * 创建人id
     */
    createBy?: string;
    /**
     * 创建时间
     */
    createTime?: string;
    /**
     * 更新人id
     */
    updateBy?: string;
    /**
     * 更新时间
     */
    updateTime?: string;
    /**
     * 租户id
     */
    tenantId?: number;
    conditionList?: Array<AlarmStrategyCondition>;
    alarmDeviceList?: Array<AlarmDevice>;
};
