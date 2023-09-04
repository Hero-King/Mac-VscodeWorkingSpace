/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 异常事件统计(事件看板)
 */
export type AbnormalEventStatisticsVO = {
    /**
     * 全部事件
     */
    total?: number;
    /**
     * 已关闭的
     */
    closed?: number;
    /**
     * 未关闭的
     */
    notClose?: number;
    /**
     * 进行中的
     */
    todo?: number;
    /**
     * 新建的
     */
    created?: number;
};
