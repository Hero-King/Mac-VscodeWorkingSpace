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
  MeterInspection,
  MeterInspectionVO,
  OrderItem,
  R,
  RBoolean,
  RIPageMeterInspectionVO,
  RMapStringObject,
  RMeterInspectionVO
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class OcMeterInspection<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 新增检定记录
   *
   * @tags 表计检定管理
   * @name Save1
   * @summary 新增检定记录
   * @request POST:/ocMeterInspection
   * @secure
   */
  save1 = (data: MeterInspection, params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/ocMeterInspection`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 通过id删除检定管理记录
   *
   * @tags 表计检定管理
   * @name RemoveById1
   * @summary 通过id删除检定管理记录
   * @request DELETE:/ocMeterInspection
   * @secure
   */
  removeById1 = (data: number[], params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/ocMeterInspection`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 上传
   *
   * @tags 表计检定管理
   * @name Upload1
   * @summary 上传
   * @request POST:/ocMeterInspection/upload
   * @secure
   */
  upload1 = (
    data: {
      /** @format binary */
      file: File
    },
    params: RequestParams = {}
  ) =>
    this.request<RMapStringObject, R>({
      path: `/ocMeterInspection/upload`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params
    })
  /**
   * No description
   *
   * @tags 表计检定管理
   * @name ImportRole
   * @request POST:/ocMeterInspection/import
   * @secure
   */
  importRole = (data: MeterInspectionVO[], params: RequestParams = {}) =>
    this.request<RMeterInspectionVO, R>({
      path: `/ocMeterInspection/import`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 分页查询
   *
   * @tags 表计检定管理
   * @name GetMeterInspectionPage
   * @summary 分页查询
   * @request GET:/ocMeterInspection/page
   * @secure
   */
  getMeterInspectionPage = (
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
      /** 表记id */
      mesterId?: string
      /** 区域id */
      areaId?: string
      /** 厂内编号、表计名称 */
      searchValue?: string
      /** 管理分类 */
      classification?: string
      /** 校验日期（开始时间） */
      startTime?: string
      /** 校验日期（结束时间） */
      endTime?: string
      /** 表计状态，合格，禁用，封存，准用 */
      status?: string
      /** 有效截至日期（开始时间） */
      expirationStartTime?: string
      /** 有效截至日期（结束时间） */
      expirationEndTime?: string
      /** 校准员 */
      inSpectioner?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<RIPageMeterInspectionVO, R>({
      path: `/ocMeterInspection/page`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  /**
   * @description 查询详情
   *
   * @tags 表计检定管理
   * @name Detail1
   * @summary 查询详情
   * @request GET:/ocMeterInspection/detail
   * @secure
   */
  detail1 = (
    query: {
      /** @format int64 */
      id: number
    },
    params: RequestParams = {}
  ) =>
    this.request<RMeterInspectionVO, R>({
      path: `/ocMeterInspection/detail`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
}
