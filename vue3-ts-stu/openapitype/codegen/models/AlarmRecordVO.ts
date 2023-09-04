/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 告警记录视图VO
 */
export type AlarmRecordVO = {
    /**
     * id
     */
    id?: number;
    /**
     * 告警类型
     */
    alarmType?: string;
    /**
     * 告警名称
     */
    alarmName?: string;
    /**
     * 告警对象
     */
    alarmObject?: string;
    /**
     * 告警信息
     */
    alarmMsg?: string;
    /**
     * 告警设备id
     */
    alarmDeviceId?: number;
    /**
     * 告警级别
     */
    alarmLevel?: string;
    /**
     * 告警时间
     */
    alarmTime?: string;
    /**
     * 状态 1告警2禁用3搁置4已解除
     */
    status?: number;
    /**
     * 解除时间
     */
    alarmSecureTime?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 推送对象
     */
    alarmUserIds?: string;
    /**
     * 告警策略id
     */
    alarmStrategyId?: number;
};
