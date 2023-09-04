/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 异常原因
 */
export type AbnormalCause = {
    /**
     * 唯一主键
     */
    id?: number;
    /**
     * 原因名称
     */
    causeName?: string;
    /**
     * 排序号
     */
    sort?: number;
    /**
     * 是否可用
     */
    isActive?: number;
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
     * 租户id
     */
    tenantId?: number;
};
