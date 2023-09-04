/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AlarmInfoCondition } from './AlarmInfoCondition';

/**
 * 数据
 */
export type AlarmInfoDTO = {
    /**
     * 关联id
     */
    relationId?: number;
    /**
     * 测点标志
     */
    pointMark?: string;
    type?: string;
    /**
     * 策略id
     */
    alarmStrategyId?: number;
    offlineTimeDuration?: number;
    offlineTimeUnit?: string;
    conditionList?: Array<AlarmInfoCondition>;
};
