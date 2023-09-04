/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 新增关联警告
 */
export type AbnormalEventAlarmDTO = {
    /**
     * 唯一主键
     */
    id?: number;
    /**
     * 事件id
     */
    abnormalEventId?: number;
    /**
     * 告警记录id
     */
    alarmRecordId?: number;
    /**
     * 创建时间
     */
    createTime?: string;
    /**
     * 更新时间
     */
    updateTime?: string;
    /**
     * 告警信息
     */
    msg?: string;
};
