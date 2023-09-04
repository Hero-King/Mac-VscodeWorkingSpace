/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AlarmStrategyDTO } from './AlarmStrategyDTO';

/**
 * 响应信息主体
 */
export type RAlarmStrategyDTO = {
    /**
     * 返回标记：成功标记=0，失败标记=1
     */
    code?: number;
    /**
     * 返回信息
     */
    msg?: string;
    data?: AlarmStrategyDTO;
};
