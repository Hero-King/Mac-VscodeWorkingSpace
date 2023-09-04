/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 评论
 */
export type EventComment = {
    /**
     * id
     */
    id?: number;
    /**
     * 创建人
     */
    createBy?: string;
    /**
     * 内容
     */
    content?: string;
    /**
     * 父级id
     */
    parentId?: number;
    /**
     * 父级创建人
     */
    parentCreateBy?: string;
    /**
     * 评论时间
     */
    createTime?: string;
    children?: Array<EventComment>;
};
