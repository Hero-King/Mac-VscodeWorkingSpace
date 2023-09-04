/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 事件统计图(按日期)
 */
export type AbnormalEventStatisticsDateVO = {
    /**
     * 日期
     */
    date?: string;
    /**
     * 新建的数量
     */
    create?: number;
    /**
     * 进行中的数量
     */
    todo?: number;
    /**
     * 关闭的数量
     */
    closed?: number;
};
