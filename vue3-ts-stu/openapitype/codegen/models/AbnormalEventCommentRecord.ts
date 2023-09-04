/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 异常事件-评论列表
 */
export type AbnormalEventCommentRecord = {
    /**
     * 唯一主键
     */
    id?: number;
    /**
     * 事件id
     */
    abnormalEventId?: number;
    /**
     * 内容
     */
    content?: string;
    /**
     * 上级id
     */
    parentId?: number;
    /**
     * 创建时间
     */
    createTime?: string;
    /**
     * 创建人
     */
    createBy?: string;
    /**
     * 更新人
     */
    updateBy?: string;
    /**
     * 更新时间
     */
    updateTime?: string;
};
