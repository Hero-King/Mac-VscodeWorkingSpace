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

import { AbnormalEventParamDTO, R, RBoolean, RListEventParam } from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class AbnormalEventParam<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 异常事件-关联参数列表
   *
   * @tags 异常事件-参数列表管理
   * @name Save5
   * @summary 异常事件-关联参数列表
   * @request POST:/abnormalEventParam
   * @secure
   */
  save5 = (data: AbnormalEventParamDTO, params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/abnormalEventParam`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 通过id删除异常事件-参数列表
   *
   * @tags 异常事件-参数列表管理
   * @name RemoveById4
   * @summary 通过id删除异常事件-参数列表
   * @request DELETE:/abnormalEventParam
   * @secure
   */
  removeById4 = (data: AbnormalEventParamDTO, params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/abnormalEventParam`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 根据异常事件id查询列表
   *
   * @tags 异常事件-参数列表管理
   * @name GetAbnormalEventAlarmPage
   * @summary 根据异常事件id查询列表
   * @request GET:/abnormalEventParam/list
   * @secure
   */
  getAbnormalEventAlarmPage = (
    query: {
      /** @format int64 */
      abnormalEventId: number
    },
    params: RequestParams = {}
  ) =>
    this.request<RListEventParam, R>({
      path: `/abnormalEventParam/list`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
}
