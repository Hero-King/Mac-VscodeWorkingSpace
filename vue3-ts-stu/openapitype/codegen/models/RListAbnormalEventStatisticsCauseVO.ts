/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AbnormalEventStatisticsCauseVO } from './AbnormalEventStatisticsCauseVO';

/**
 * 响应信息主体
 */
export type RListAbnormalEventStatisticsCauseVO = {
    /**
     * 返回标记：成功标记=0，失败标记=1
     */
    code?: number;
    /**
     * 返回信息
     */
    msg?: string;
    /**
     * 数据
     */
    data?: Array<AbnormalEventStatisticsCauseVO>;
};
