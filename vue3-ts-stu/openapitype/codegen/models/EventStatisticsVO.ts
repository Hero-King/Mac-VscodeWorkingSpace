/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 异常事件统计(运维看板)
 */
export type EventStatisticsVO = {
    /**
     * 异常事件总数
     */
    total?: number;
    /**
     * 已解决数量
     */
    resolved?: number;
    /**
     * 已关闭数量
     */
    closed?: number;
    /**
     * 改善措施达成率
     */
    improveRate?: string;
    /**
     * 事件平均处理时长
     */
    eventAverageTimes?: number;
    /**
     * 处理超时事件数量
     */
    processTimeOut?: number;
    /**
     * 处理超时率
     */
    processTimeOutRate?: string;
    /**
     * 一般事件
     */
    generalEvent?: number;
    /**
     * 一般事件（已关闭）
     */
    unGeneralEvent?: number;
    /**
     * 主要事件
     */
    majorEvent?: number;
    /**
     * 主要事件（已关闭）
     */
    unMajorEvent?: number;
    /**
     * 重要事件
     */
    importEvent?: number;
    /**
     * 重要事件（已关闭）
     */
    unImportEvent?: number;
    /**
     * 紧急事件
     */
    emergencyEvent?: number;
    /**
     * 紧急事件（已关闭）
     */
    unEmergencyEvent?: number;
};
