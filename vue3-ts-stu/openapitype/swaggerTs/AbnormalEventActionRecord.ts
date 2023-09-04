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

import { R, RListEventAction } from './data-contracts'
import { HttpClient, RequestParams } from './http-client'

export class AbnormalEventActionRecord<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description 根据异常事件id查询列表
   *
   * @tags 异常事件-动作列表管理
   * @name GetAbnormalEventAlarmPage5
   * @summary 根据异常事件id查询列表
   * @request GET:/abnormalEventActionRecord/list
   * @secure
   */
  getAbnormalEventAlarmPage5 = (
    query: {
      /** @format int64 */
      abnormalEventId: number
    },
    params: RequestParams = {}
  ) =>
    this.request<RListEventAction, R>({
      path: `/abnormalEventActionRecord/list`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
}
