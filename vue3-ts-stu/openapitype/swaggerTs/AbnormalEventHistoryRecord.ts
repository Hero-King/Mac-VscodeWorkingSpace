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

import { R, RListEventHistory } from './data-contracts'
import { HttpClient, RequestParams } from './http-client'

export class AbnormalEventHistoryRecord<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description 根据异常事件id查询列表
   *
   * @tags 异常事件-历史列表管理
   * @name GetAbnormalEventAlarmPage1
   * @summary 根据异常事件id查询列表
   * @request GET:/abnormalEventHistoryRecord/list
   * @secure
   */
  getAbnormalEventAlarmPage1 = (
    query: {
      /** @format int64 */
      abnormalEventId: number
    },
    params: RequestParams = {}
  ) =>
    this.request<RListEventHistory, R>({
      path: `/abnormalEventHistoryRecord/list`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
}
