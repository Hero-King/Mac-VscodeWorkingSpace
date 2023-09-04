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

import { AbnormalEventAlarmDTO, R, RBoolean, RListEventAlarm } from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class AbnormalEventAlarm<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 异常事件-关联告警
   *
   * @tags 异常事件-告警列表管理
   * @name Save10
   * @summary 异常事件-关联告警
   * @request POST:/abnormalEventAlarm
   * @secure
   */
  save10 = (data: AbnormalEventAlarmDTO, params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/abnormalEventAlarm`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 通过id删除异常事件-告警列表
   *
   * @tags 异常事件-告警列表管理
   * @name RemoveById9
   * @summary 通过id删除异常事件-告警列表
   * @request DELETE:/abnormalEventAlarm
   * @secure
   */
  removeById9 = (data: AbnormalEventAlarmDTO, params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/abnormalEventAlarm`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 根据异常事件id查询列表
   *
   * @tags 异常事件-告警列表管理
   * @name GetAbnormalEventAlarmPage4
   * @summary 根据异常事件id查询列表
   * @request GET:/abnormalEventAlarm/list
   * @secure
   */
  getAbnormalEventAlarmPage4 = (
    query: {
      /** @format int64 */
      abnormalEventId: number
    },
    params: RequestParams = {}
  ) =>
    this.request<RListEventAlarm, R>({
      path: `/abnormalEventAlarm/list`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
}
