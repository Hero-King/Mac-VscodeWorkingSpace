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

import {
  AbnormalCause,
  OrderItem,
  R,
  RAbnormalCause,
  RBoolean,
  RIPageAbnormalCause,
  RListAbnormalCause
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class AbnormalCause<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 修改异常原因
   *
   * @tags 异常原因管理
   * @name UpdateById2
   * @summary 修改异常原因
   * @request PUT:/abnormalCause
   * @secure
   */
  updateById2 = (data: AbnormalCause, params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/abnormalCause`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 新增异常原因
   *
   * @tags 异常原因管理
   * @name Save11
   * @summary 新增异常原因
   * @request POST:/abnormalCause
   * @secure
   */
  save11 = (data: AbnormalCause, params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/abnormalCause`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 通过id删除异常原因
   *
   * @tags 异常原因管理
   * @name RemoveById10
   * @summary 通过id删除异常原因
   * @request DELETE:/abnormalCause
   * @secure
   */
  removeById10 = (data: number[], params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/abnormalCause`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 禁用
   *
   * @tags 异常原因管理
   * @name Forbidden1
   * @summary 禁用
   * @request PUT:/abnormalCause/forbidden
   * @secure
   */
  forbidden1 = (data: number[], params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/abnormalCause/forbidden`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 启用
   *
   * @tags 异常原因管理
   * @name Enable
   * @summary 启用
   * @request PUT:/abnormalCause/enable
   * @secure
   */
  enable = (data: number[], params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/abnormalCause/enable`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 通过id查询
   *
   * @tags 异常原因管理
   * @name GetById3
   * @summary 通过id查询
   * @request GET:/abnormalCause/{id}
   * @secure
   */
  getById3 = (id: number, params: RequestParams = {}) =>
    this.request<RAbnormalCause, R>({
      path: `/abnormalCause/${id}`,
      method: 'GET',
      secure: true,
      ...params
    })
  /**
   * @description 分页查询
   *
   * @tags 异常原因管理
   * @name GetAbnormalCausePage
   * @summary 分页查询
   * @request GET:/abnormalCause/page
   * @secure
   */
  getAbnormalCausePage = (
    query?: {
      records?: object[]
      /** @format int64 */
      total?: number
      /** @format int64 */
      size?: number
      /** @format int64 */
      current?: number
      orders?: OrderItem[]
      optimizeCountSql?: boolean
      searchCount?: boolean
      /** @format int64 */
      maxLimit?: number
      countId?: string
      /** 唯一主键 */
      id?: string
      /** 原因名称 */
      causeName?: string
      /** 排序号 */
      sort?: string
      /** 是否可用 */
      isActive?: string
      /** 备注 */
      remark?: string
      /** 创建人 */
      createBy?: string
      /** 创建时间 */
      createTime?: string
      /** 更新人 */
      updateBy?: string
      /** 更新时间 */
      updateTime?: string
      /** 租户id */
      tenantId?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<RIPageAbnormalCause, R>({
      path: `/abnormalCause/page`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  /**
   * @description 异常原因列表
   *
   * @tags 异常原因管理
   * @name GetList
   * @summary 异常原因列表
   * @request GET:/abnormalCause/list
   * @secure
   */
  getList = (params: RequestParams = {}) =>
    this.request<RListAbnormalCause, R>({
      path: `/abnormalCause/list`,
      method: 'GET',
      secure: true,
      ...params
    })
}
