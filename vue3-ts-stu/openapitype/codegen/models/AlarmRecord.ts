/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 告警记录
 */
export type AlarmRecord = {
    /**
     * 唯一主键
     */
    id?: number;
    /**
     * 告警策略id
     */
    alarmStrategyId?: number;
    /**
     * 告警信息
     */
    alarmMsg?: string;
    /**
     * 告警设备id
     */
    alarmDeviceId?: number;
    /**
     * 状态
     */
    status?: number;
    /**
     * 告警解除时间
     */
    alarmSecureTime?: string;
    /**
     * 接触告警备注
     */
    alarmSecureMsg?: string;
    /**
     * 创建时间
     */
    createTime?: string;
    /**
     * 更新时间
     */
    updateTime?: string;
    /**
     * 租户id
     */
    tenantId?: number;
};
