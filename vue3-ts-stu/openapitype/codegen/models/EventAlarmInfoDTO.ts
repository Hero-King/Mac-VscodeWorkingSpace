/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AlarmInfoCondition } from './AlarmInfoCondition';
import type { RelationPoint } from './RelationPoint';

/**
 * 数据
 */
export type EventAlarmInfoDTO = {
    /**
     * 时间间隔
     */
    intervalTimeDuration?: number;
    /**
     * 关联设备Ids
     */
    relationDeviceIds?: Array<number>;
    /**
     * 策略id
     */
    alarmStrategyId?: number;
    /**
     * 测点标志集合
     */
    relationPoints?: Array<RelationPoint>;
    /**
     * 条件集合
     */
    conditionList?: Array<AlarmInfoCondition>;
};
