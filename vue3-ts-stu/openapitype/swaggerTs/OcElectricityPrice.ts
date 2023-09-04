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
  ElectricityPriceSetting,
  OrderItem,
  R,
  RBoolean,
  RElectricityPriceSetting,
  RIPageElectricityPriceSetting,
  RListElectricityPriceSetting
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class OcElectricityPrice<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 新增/修改电价设置
   *
   * @tags 电价设置
   * @name SaveOrUpdate
   * @summary 新增/修改电价设置
   * @request POST:/ocElectricityPrice
   * @secure
   */
  saveOrUpdate = (data: ElectricityPriceSetting, params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/ocElectricityPrice`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 根据年月查询电价设置
   *
   * @tags 电价设置
   * @name ListByYm
   * @summary 根据年月查询电价设置
   * @request POST:/ocElectricityPrice/listByYm
   * @secure
   */
  listByYm = (data: string[], params: RequestParams = {}) =>
    this.request<RListElectricityPriceSetting, R>({
      path: `/ocElectricityPrice/listByYm`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 电价设置分页查询
   *
   * @tags 电价设置
   * @name GetElectricityPriceSettingPage
   * @summary 电价设置分页查询
   * @request GET:/ocElectricityPrice/page
   * @secure
   */
  getElectricityPriceSettingPage = (
    query: {
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
      /** @format int64 */
      topParentId: number
    },
    params: RequestParams = {}
  ) =>
    this.request<RIPageElectricityPriceSetting, R>({
      path: `/ocElectricityPrice/page`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  /**
   * @description 根据id查询详情
   *
   * @tags 电价设置
   * @name Detail3
   * @summary 根据id查询详情
   * @request GET:/ocElectricityPrice/detail
   * @secure
   */
  detail3 = (
    query: {
      /** @format int64 */
      id: number
    },
    params: RequestParams = {}
  ) =>
    this.request<RElectricityPriceSetting, R>({
      path: `/ocElectricityPrice/detail`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
}
