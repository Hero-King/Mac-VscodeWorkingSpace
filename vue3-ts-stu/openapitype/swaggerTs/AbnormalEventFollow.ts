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

import { AbnormalEventFollowDTO, R, RBoolean } from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class AbnormalEventFollow<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 异常事件-关注
   *
   * @tags 异常事件-关注（取消关注）事件
   * @name Save6
   * @summary 异常事件-关注
   * @request POST:/abnormalEventFollow
   * @secure
   */
  save6 = (data: AbnormalEventFollowDTO, params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/abnormalEventFollow`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 异常事件-取消关注
   *
   * @tags 异常事件-关注（取消关注）事件
   * @name RemoveById5
   * @summary 异常事件-取消关注
   * @request DELETE:/abnormalEventFollow
   * @secure
   */
  removeById5 = (data: AbnormalEventFollowDTO, params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/abnormalEventFollow`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
}
