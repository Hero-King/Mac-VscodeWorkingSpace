/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 异常事件表
 */
export type AbnormalEvent = {
    /**
     * 唯一主键
     */
    id?: number;
    /**
     * 事件编号
     */
    eventNo?: string;
    /**
     * 事件类型
     */
    eventType?: string;
    /**
     * 事件等级 1一般2主要3重要4紧急
     */
    eventLevel?: number;
    /**
     * 事件名称
     */
    eventName?: string;
    /**
     * 事件备注
     */
    eventRemark?: string;
    /**
     * 关闭时间
     */
    closeTime?: string;
    /**
     * 关闭人
     */
    closeBy?: string;
    /**
     * 发生时间
     */
    occurTime?: string;
    /**
     * 期限
     */
    allottedTime?: string;
    /**
     * 原因
     */
    cause?: number;
    /**
     * 原因备注
     */
    causeRemark?: string;
    /**
     * 状态
     */
    status?: number;
    /**
     * 负责人
     */
    eventChargePerson?: string;
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
    tenantId?: number;
};
