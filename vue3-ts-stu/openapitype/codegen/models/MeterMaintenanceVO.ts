/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 维修保养分页视图对象
 */
export type MeterMaintenanceVO = {
    /**
     * 唯一标识
     */
    id?: number;
    /**
     * 表记id
     */
    mesterId?: number;
    /**
     * 保养位置
     */
    maintenancePosition?: string;
    /**
     * 保养项目
     */
    maintenanceProgram?: string;
    /**
     * 保养人编号
     */
    maintenancePersonCode?: string;
    /**
     * 备件更换记录
     */
    replacementRecord?: string;
    /**
     * 保养开始日期
     */
    maintenanceStartDate?: string;
    /**
     * 保养结束日期
     */
    maintenanceEndDate?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 创建人
     */
    createBy?: string;
    /**
     * 创建时间
     */
    createTime?: string;
    /**
     * 更新人
     */
    updateBy?: string;
    /**
     * 更新时间
     */
    updateTime?: string;
    /**
     * 管理分类
     */
    classification?: string;
    /**
     * 租户id
     */
    tenantId?: number;
    /**
     * 厂内编号
     */
    deviceMark?: string;
    /**
     * 表计名称
     */
    deviceName?: string;
};
