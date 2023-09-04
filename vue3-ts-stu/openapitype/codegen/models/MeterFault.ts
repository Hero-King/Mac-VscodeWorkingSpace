/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 故障管理
 */
export type MeterFault = {
    /**
     * 唯一标识
     */
    id?: number;
    /**
     * 表记id
     */
    mesterId?: number;
    /**
     * 故障日期
     */
    faultDate?: string;
    /**
     * 故障部位
     */
    faultPosition?: string;
    /**
     * 故障描述
     */
    faultDescribe?: string;
    /**
     * 一次原因分析
     */
    firstReasonAnalysis?: string;
    /**
     * 二次原因分析
     */
    secondReasonAnalysis?: string;
    /**
     * 解决对策
     */
    faultSolution?: string;
    /**
     * 备件更换记录
     */
    replacementRecord?: string;
    /**
     * 维修结果
     */
    repairResults?: string;
    /**
     * 维修开始日期
     */
    repairStartDate?: string;
    /**
     * 维修结束日期
     */
    repairEndDate?: string;
    /**
     * 维修时长
     */
    repairDuration?: number;
    /**
     * 停线时长
     */
    stopDuration?: number;
    /**
     * 故障等级 低0 中1 高2
     */
    faultLevel?: string;
    /**
     * 维修人员
     */
    repairName?: string;
    /**
     * 维修编号
     */
    repairCode?: string;
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
};
