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
  MeterFault,
  MeterFaultVO,
  OrderItem,
  R,
  RBoolean,
  RIPageMeterFaultVO,
  RMapStringObject,
  RMeterFaultVO
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class OcMeterFault<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 新增故障记录
   *
   * @tags 表计故障记录
   * @name Save2
   * @summary 新增故障记录
   * @request POST:/ocMeterFault
   * @secure
   */
  save2 = (data: MeterFault, params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/ocMeterFault`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 通过id删除故障记录
   *
   * @tags 表计故障记录
   * @name RemoveById2
   * @summary 通过id删除故障记录
   * @request DELETE:/ocMeterFault
   * @secure
   */
  removeById2 = (data: number[], params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/ocMeterFault`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 上传
   *
   * @tags 表计故障记录
   * @name Upload2
   * @summary 上传
   * @request POST:/ocMeterFault/upload
   * @secure
   */
  upload2 = (
    data: {
      /** @format binary */
      file: File
    },
    params: RequestParams = {}
  ) =>
    this.request<RMapStringObject, R>({
      path: `/ocMeterFault/upload`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params
    })
  /**
   * No description
   *
   * @tags 表计故障记录
   * @name ImportRole1
   * @request POST:/ocMeterFault/import
   * @secure
   */
  importRole1 = (data: MeterFaultVO[], params: RequestParams = {}) =>
    this.request<RMeterFaultVO, R>({
      path: `/ocMeterFault/import`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 分页查询
   *
   * @tags 表计故障记录
   * @name GetMeterFaultPage
   * @summary 分页查询
   * @request GET:/ocMeterFault/page
   * @secure
   */
  getMeterFaultPage = (
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
      /** 日期（开始时间） */
      startTime?: string
      /** 日期（结束时间） */
      endTime?: string
      /** 表计状态，合格，禁用，封存，准用 */
      recStatus?: string
      /** 故障等级 低0 中1 高2 */
      faultLevel?: string
      /** 维修人员 */
      repairName?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<RIPageMeterFaultVO, R>({
      path: `/ocMeterFault/page`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  /**
   * @description 查询详情
   *
   * @tags 表计故障记录
   * @name Detail2
   * @summary 查询详情
   * @request GET:/ocMeterFault/detail
   * @secure
   */
  detail2 = (
    query: {
      /** @format int64 */
      id: number
    },
    params: RequestParams = {}
  ) =>
    this.request<RMeterFaultVO, R>({
      path: `/ocMeterFault/detail`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
}
