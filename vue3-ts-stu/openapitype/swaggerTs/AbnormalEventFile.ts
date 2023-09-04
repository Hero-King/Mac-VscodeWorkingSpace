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

import { R, RBoolean, RListAbnormalEventFileVO } from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class AbnormalEventFile<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 新增异常事件-附件列表
   *
   * @tags 异常事件-附件列表管理
   * @name Save7
   * @summary 新增异常事件-附件列表
   * @request POST:/abnormalEventFile
   * @secure
   */
  save7 = (
    query: {
      /** @format int64 */
      abnormalEventId: number
    },
    data: {
      /** @format binary */
      file: File
    },
    params: RequestParams = {}
  ) =>
    this.request<RBoolean, R>({
      path: `/abnormalEventFile`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params
    })
  /**
   * @description 通过id删除异常事件-附件列表
   *
   * @tags 异常事件-附件列表管理
   * @name RemoveById6
   * @summary 通过id删除异常事件-附件列表
   * @request DELETE:/abnormalEventFile
   * @secure
   */
  removeById6 = (data: number[], params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/abnormalEventFile`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 根据异常事件id查询列表
   *
   * @tags 异常事件-附件列表管理
   * @name GetAbnormalEventFilePage
   * @summary 根据异常事件id查询列表
   * @request GET:/abnormalEventFile/list
   * @secure
   */
  getAbnormalEventFilePage = (
    query: {
      /** @format int64 */
      abnormalEventId: number
    },
    params: RequestParams = {}
  ) =>
    this.request<RListAbnormalEventFileVO, R>({
      path: `/abnormalEventFile/list`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
}
