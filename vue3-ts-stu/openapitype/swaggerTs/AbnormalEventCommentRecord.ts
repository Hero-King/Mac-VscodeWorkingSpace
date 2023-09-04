/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { AbnormalEventCommentRecord, R, RBoolean, RListEventComment } from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class AbnormalEventCommentRecord<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description 新增异常事件-评论列表
   *
   * @tags 异常事件-评论列表管理
   * @name Save9
   * @summary 新增异常事件-评论列表
   * @request POST:/abnormalEventCommentRecord
   * @secure
   */
  save9 = (data: AbnormalEventCommentRecord, params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/abnormalEventCommentRecord`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 通过id删除异常事件-评论列表
   *
   * @tags 异常事件-评论列表管理
   * @name RemoveById8
   * @summary 通过id删除异常事件-评论列表
   * @request DELETE:/abnormalEventCommentRecord
   * @secure
   */
  removeById8 = (data: AbnormalEventCommentRecord, params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/abnormalEventCommentRecord`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 根据异常事件id查询列表
   *
   * @tags 异常事件-评论列表管理
   * @name GetAbnormalEventAlarmPage3
   * @summary 根据异常事件id查询列表
   * @request GET:/abnormalEventCommentRecord/list
   * @secure
   */
  getAbnormalEventAlarmPage3 = (
    query: {
      /** @format int64 */
      abnormalEventId: number
    },
    params: RequestParams = {}
  ) =>
    this.request<RListEventComment, R>({
      path: `/abnormalEventCommentRecord/list`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
}
