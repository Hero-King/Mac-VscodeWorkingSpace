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
  MeterMaintenance,
  OrderItem,
  R,
  RBoolean,
  RIPageMeterMaintenanceVO,
  RMapStringObject,
  RMeterMaintenanceVO
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class OcMeterMaintenance<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 新增维护保养记录
   *
   * @tags 表计维修保养
   * @name Save
   * @summary 新增维护保养记录
   * @request POST:/ocMeterMaintenance
   * @secure
   */
  save = (data: MeterMaintenance, params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/ocMeterMaintenance`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 通过id删除维护保养记录
   *
   * @tags 表计维修保养
   * @name RemoveById
   * @summary 通过id删除维护保养记录
   * @request DELETE:/ocMeterMaintenance
   * @secure
   */
  removeById = (data: number[], params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/ocMeterMaintenance`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 上传
   *
   * @tags 表计维修保养
   * @name Upload
   * @summary 上传
   * @request POST:/ocMeterMaintenance/upload
   * @secure
   */
  upload = (
    data: {
      /** @format binary */
      file: File
    },
    params: RequestParams = {}
  ) =>
    this.request<RMapStringObject, R>({
      path: `/ocMeterMaintenance/upload`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params
    })
  /**
   * @description 分页查询
   *
   * @tags 表计维修保养
   * @name GetMeterMaintenancePage
   * @summary 分页查询
   * @request GET:/ocMeterMaintenance/page
   * @secure
   */
  getMeterMaintenancePage = (
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
    },
    params: RequestParams = {}
  ) =>
    this.request<RIPageMeterMaintenanceVO, R>({
      path: `/ocMeterMaintenance/page`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  /**
   * @description 查询详情
   *
   * @tags 表计维修保养
   * @name Detail
   * @summary 查询详情
   * @request GET:/ocMeterMaintenance/detail
   * @secure
   */
  detail = (
    query: {
      /** @format int64 */
      id: number
    },
    params: RequestParams = {}
  ) =>
    this.request<RMeterMaintenanceVO, R>({
      path: `/ocMeterMaintenance/detail`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
}
