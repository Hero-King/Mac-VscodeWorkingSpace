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
  AlarmRecord,
  OrderItem,
  R,
  RAlarmRecord,
  RAlarmStaticsVO,
  RBoolean,
  RIPageAlarmRecordVO,
  RListAlarmStaticsRankVO,
  RecordRemoveAlarmDTO
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class AlarmRecord<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 修改告警记录
   *
   * @tags 告警记录管理
   * @name UpdateById
   * @summary 修改告警记录
   * @request PUT:/alarmRecord
   * @secure
   */
  updateById = (data: AlarmRecord, params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/alarmRecord`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 新增告警记录
   *
   * @tags 告警记录管理
   * @name Save3
   * @summary 新增告警记录
   * @request POST:/alarmRecord
   * @secure
   */
  save3 = (data: AlarmRecord, params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/alarmRecord`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 解除告警
   *
   * @tags 告警记录管理
   * @name RemoveAlarm
   * @summary 解除告警
   * @request PUT:/alarmRecord/removeAlarm
   * @secure
   */
  removeAlarm = (data: RecordRemoveAlarmDTO, params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/alarmRecord/removeAlarm`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 搁置
   *
   * @tags 告警记录管理
   * @name LayAside
   * @summary 搁置
   * @request PUT:/alarmRecord/layAside
   * @secure
   */
  layAside = (data: number[], params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/alarmRecord/layAside`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 禁用告警
   *
   * @tags 告警记录管理
   * @name Forbidden
   * @summary 禁用告警
   * @request PUT:/alarmRecord/forbidden
   * @secure
   */
  forbidden = (data: number[], params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/alarmRecord/forbidden`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 取消搁置
   *
   * @tags 告警记录管理
   * @name CancelAside
   * @summary 取消搁置
   * @request PUT:/alarmRecord/cancelAside
   * @secure
   */
  cancelAside = (data: number[], params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/alarmRecord/cancelAside`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 恢复告警
   *
   * @tags 告警记录管理
   * @name Alarm
   * @summary 恢复告警
   * @request PUT:/alarmRecord/alarm
   * @secure
   */
  alarm = (data: number[], params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/alarmRecord/alarm`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 批量新增告警记录
   *
   * @tags 告警记录管理
   * @name SaveBatchOfIn
   * @summary 批量新增告警记录
   * @request POST:/alarmRecord/saveBatchOfIn
   * @secure
   */
  saveBatchOfIn = (data: AlarmRecord[], params: RequestParams = {}) =>
    this.request<RBoolean, R>({
      path: `/alarmRecord/saveBatchOfIn`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 通过id查询
   *
   * @tags 告警记录管理
   * @name GetById1
   * @summary 通过id查询
   * @request GET:/alarmRecord/{id}
   * @secure
   */
  getById1 = (id: number, params: RequestParams = {}) =>
    this.request<RAlarmRecord, R>({
      path: `/alarmRecord/${id}`,
      method: 'GET',
      secure: true,
      ...params
    })
  /**
   * @description 告警数据统计
   *
   * @tags 告警记录管理
   * @name GetAlarmStatics
   * @summary 告警数据统计
   * @request GET:/alarmRecord/staticsalarm
   * @secure
   */
  getAlarmStatics = (
    query: {
      startTime: string
      endTime: string
    },
    params: RequestParams = {}
  ) =>
    this.request<RAlarmStaticsVO, R>({
      path: `/alarmRecord/staticsalarm`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  /**
   * @description 告警处理排名
   *
   * @tags 告警记录管理
   * @name SelectRank
   * @summary 告警处理排名
   * @request GET:/alarmRecord/selectrank
   * @secure
   */
  selectRank = (
    query: {
      startTime: string
      endTime: string
    },
    params: RequestParams = {}
  ) =>
    this.request<RListAlarmStaticsRankVO, R>({
      path: `/alarmRecord/selectrank`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  /**
   * @description 分页查询
   *
   * @tags 告警记录管理
   * @name GetAlarmRecordPage
   * @summary 分页查询
   * @request GET:/alarmRecord/page
   * @secure
   */
  getAlarmRecordPage = (
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
      alarmName?: string
      /** 告警类型 */
      alarmType?: string
      /** 告警等级 */
      alarmLevel?: string
      /** 状态 */
      status?: string
      /** 告警开始时间 */
      startTime?: string
      /** 告警结束时间 */
      endTime?: string
      /** 设备名称或参数名称 */
      searchValue?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<RIPageAlarmRecordVO, R>({
      path: `/alarmRecord/page`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  /**
   * No description
   *
   * @tags 告警记录管理
   * @name Export1
   * @request GET:/alarmRecord/export
   * @secure
   */
  export1 = (
    query: {
      /** 告警记录 */
      alarmRecord: AlarmRecord
    },
    params: RequestParams = {}
  ) =>
    this.request<AlarmRecord[], R>({
      path: `/alarmRecord/export`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
}
