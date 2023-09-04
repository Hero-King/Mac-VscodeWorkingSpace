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

import { AbnormalEventDeviceDTO, R, RBoolean, RListEventDevice } from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class AbnormalEventDevice<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 异常事件-关联设备列表
   *
   * @tags 异常事件-设备列表管理
   * @name Save8
   * @summary 异常事件-关联设备列表
   * @request POST:/abnormalEventDevice
   * @secure
   */
  save8 = (data: AbnormalEventDeviceDTO, params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/abnormalEventDevice`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 通过id删除异常事件-设备列表
   *
   * @tags 异常事件-设备列表管理
   * @name RemoveById7
   * @summary 通过id删除异常事件-设备列表
   * @request DELETE:/abnormalEventDevice
   * @secure
   */
  removeById7 = (data: AbnormalEventDeviceDTO, params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/abnormalEventDevice`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 根据异常事件id查询列表
   *
   * @tags 异常事件-设备列表管理
   * @name GetAbnormalEventAlarmPage2
   * @summary 根据异常事件id查询列表
   * @request GET:/abnormalEventDevice/list
   * @secure
   */
  getAbnormalEventAlarmPage2 = (
    query: {
      /** @format int64 */
      abnormalEventId: number
    },
    params: RequestParams = {}
  ) =>
    this.request<RListEventDevice, R>({
      path: `/abnormalEventDevice/list`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
}
