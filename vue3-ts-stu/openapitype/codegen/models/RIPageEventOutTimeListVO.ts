/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IPageEventOutTimeListVO } from './IPageEventOutTimeListVO';

/**
 * 响应信息主体
 */
export type RIPageEventOutTimeListVO = {
    /**
     * 返回标记：成功标记=0，失败标记=1
     */
    code?: number;
    /**
     * 返回信息
     */
    msg?: string;
    data?: IPageEventOutTimeListVO;
};