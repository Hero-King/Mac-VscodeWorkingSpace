/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 告警统计(运维看板)
 */
export type AlarmStaticsVO = {
    /**
     * 告警次数
     */
    total?: number;
    /**
     * 告警解除数量
     */
    secure?: number;
    /**
     * 告警解除率
     */
    secureRate?: string;
    /**
     * 一般告警
     */
    generalAlarm?: number;
    /**
     * 一般告警（已解除）
     */
    unGeneralAlarm?: number;
    /**
     * 主要告警
     */
    majorAlarm?: number;
    /**
     * 主要告警（已解除）
     */
    unMajorAlarm?: number;
    /**
     * 重要告警
     */
    importAlarm?: number;
    /**
     * 重要告警（已解除）
     */
    unImportAlarm?: number;
    /**
     * 紧急告警
     */
    emergencyAlarm?: number;
    /**
     * 紧急告警（已解除）
     */
    unEmergencyAlarm?: number;
    /**
     * 告警处理排名
     */
    alarmType?: Array<Record<string, Record<string, any>>>;
};
