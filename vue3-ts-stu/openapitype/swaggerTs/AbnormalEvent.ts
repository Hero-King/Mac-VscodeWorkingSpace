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
  AbnormalEvent,
  OrderItem,
  R,
  RAbnormalEventDetailVO,
  RAbnormalEventStatisticsVO,
  RBoolean,
  REventStatisticsVO,
  RIPageAbnormalEvent,
  RIPageEventOutTimeListVO,
  RListAbnormalEventStatisticsCauseVO,
  RListAbnormalEventStatisticsDateVO,
  RListEventStatiscRankVO,
  RLong
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class AbnormalEvent<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 修改异常事件表
   *
   * @tags 异常事件表管理
   * @name UpdateById1
   * @summary 修改异常事件表
   * @request PUT:/abnormalEvent
   * @secure
   */
  updateById1 = (data: AbnormalEvent, params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/abnormalEvent`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 新增异常事件表
   *
   * @tags 异常事件表管理
   * @name Save4
   * @summary 新增异常事件表
   * @request POST:/abnormalEvent
   * @secure
   */
  save4 = (data: AbnormalEvent, params: RequestParams = {}) =>
    this.request<RLong, R>({
      path: `/abnormalEvent`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 解决
   *
   * @tags 异常事件表管理
   * @name Resolve
   * @summary 解决
   * @request PUT:/abnormalEvent/resolve
   * @secure
   */
  resolve = (data: AbnormalEvent, params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/abnormalEvent/resolve`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 重新打开
   *
   * @tags 异常事件表管理
   * @name Reopen
   * @summary 重新打开
   * @request PUT:/abnormalEvent/reopen
   * @secure
   */
  reopen = (data: AbnormalEvent, params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/abnormalEvent/reopen`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 跟进
   *
   * @tags 异常事件表管理
   * @name Follow
   * @summary 跟进
   * @request PUT:/abnormalEvent/follow
   * @secure
   */
  follow = (data: AbnormalEvent, params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/abnormalEvent/follow`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 关闭
   *
   * @tags 异常事件表管理
   * @name Close
   * @summary 关闭
   * @request PUT:/abnormalEvent/close
   * @secure
   */
  close = (data: AbnormalEvent, params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/abnormalEvent/close`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 通过id查询
   *
   * @tags 异常事件表管理
   * @name GetById2
   * @summary 通过id查询
   * @request GET:/abnormalEvent/{id}
   * @secure
   */
  getById2 = (id: number, params: RequestParams = {}) =>
    this.request<RAbnormalEventDetailVO, R>({
      path: `/abnormalEvent/${id}`,
      method: 'GET',
      secure: true,
      ...params
    })
  /**
   * @description 事件统计
   *
   * @tags 异常事件表管理
   * @name Statistics
   * @summary 事件统计
   * @request GET:/abnormalEvent/statistics
   * @secure
   */
  statistics = (params: RequestParams = {}) =>
    this.request<RAbnormalEventStatisticsVO, R>({
      path: `/abnormalEvent/statistics`,
      method: 'GET',
      secure: true,
      ...params
    })
  /**
   * @description 按时间统计
   *
   * @tags 异常事件表管理
   * @name StatisticsByDate
   * @summary 按时间统计
   * @request GET:/abnormalEvent/statisticsByDate
   * @secure
   */
  statisticsByDate = (
    query: {
      startTime: string
      endTime: string
    },
    params: RequestParams = {}
  ) =>
    this.request<RListAbnormalEventStatisticsDateVO, R>({
      path: `/abnormalEvent/statisticsByDate`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  /**
   * No description
   *
   * @tags 异常事件表管理
   * @name StatisticsByCause
   * @summary 原因帕累托图
   * @request GET:/abnormalEvent/statisticsByCause
   * @secure
   */
  statisticsByCause = (
    query: {
      startTime: string
      endTime: string
    },
    params: RequestParams = {}
  ) =>
    this.request<RListAbnormalEventStatisticsCauseVO, R>({
      path: `/abnormalEvent/statisticsByCause`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  /**
   * @description 异常事件统计
   *
   * @tags 异常事件表管理
   * @name GetEventStatics
   * @summary 异常事件统计
   * @request GET:/abnormalEvent/staticsabnormalevent
   * @secure
   */
  getEventStatics = (
    query: {
      startTime: string
      endTime: string
    },
    params: RequestParams = {}
  ) =>
    this.request<REventStatisticsVO, R>({
      path: `/abnormalEvent/staticsabnormalevent`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  /**
   * @description 分页查询
   *
   * @tags 异常事件表管理
   * @name GetAbnormalEventPage
   * @summary 分页查询
   * @request GET:/abnormalEvent/page
   * @secure
   */
  getAbnormalEventPage = (
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
      /** 事件编号、事件标题 */
      eventInfo?: string
      /** 事件类型 */
      eventType?: string
      /** 事件级别 */
      eventLevel?: string
      /** 事件状态 */
      status?: string
      /** 异常原因 */
      cause?: string
      /** 负责人 */
      eventChargePerson?: string
      /** 创建人 */
      createUser?: string
      /** 创建时间(开始) */
      startTime?: string
      /** 创建时间(结束) */
      endTime?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<RIPageAbnormalEvent, R>({
      path: `/abnormalEvent/page`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  /**
   * @description 查询超时事件列表
   *
   * @tags 异常事件表管理
   * @name EventOutTimeList
   * @summary 查询超时事件列表
   * @request GET:/abnormalEvent/listouttimeevent
   * @secure
   */
  eventOutTimeList = (
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
      startTime: string
      endTime: string
    },
    params: RequestParams = {}
  ) =>
    this.request<RIPageEventOutTimeListVO, R>({
      path: `/abnormalEvent/listouttimeevent`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  /**
   * @description 根据告警记录新增异常事件(查询异常事件信息)
   *
   * @tags 异常事件表管理
   * @name GetByRecordId
   * @summary 根据告警记录新增异常事件(查询异常事件信息)
   * @request GET:/abnormalEvent/getByRecordId
   * @secure
   */
  getByRecordId = (
    query: {
      /** @format int64 */
      id: number
    },
    params: RequestParams = {}
  ) =>
    this.request<RAbnormalEventDetailVO, R>({
      path: `/abnormalEvent/getByRecordId`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  /**
   * @description 事件处理排名
   *
   * @tags 异常事件表管理
   * @name SelectEventRank
   * @summary 事件处理排名
   * @request GET:/abnormalEvent/eventrank
   * @secure
   */
  selectEventRank = (
    query: {
      startTime: string
      endTime: string
    },
    params: RequestParams = {}
  ) =>
    this.request<RListEventStatiscRankVO, R>({
      path: `/abnormalEvent/eventrank`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
}
