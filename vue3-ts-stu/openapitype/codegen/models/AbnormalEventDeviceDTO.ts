/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 异常事件-关联设备
 */
export type AbnormalEventDeviceDTO = {
    /**
     * 唯一主键
     */
    id?: number;
    /**
     * 事件id
     */
    abnormalEventId?: number;
    /**
     * 设备id
     */
    deviceId?: number;
    /**
     * 创建时间
     */
    createTime?: string;
    /**
     * 更新时间
     */
    updateTime?: string;
    /**
     * 设备信息
     */
    msg?: string;
};
