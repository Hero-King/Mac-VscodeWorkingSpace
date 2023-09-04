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
  AlarmStrategy,
  AlarmStrategyDTO,
  OrderItem,
  R,
  RAlarmStrategyDTO,
  RBoolean,
  REventAlarmInfoDTO,
  RListAlarmInfoDTO
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class OcAlarmStrategy<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 新增/修改告警策略
   *
   * @tags 告警策略管理
   * @name SaveOrUpdate1
   * @summary 新增/修改告警策略
   * @request POST:/ocAlarmStrategy
   * @secure
   */
  saveOrUpdate1 = (data: AlarmStrategyDTO, params: RequestParams = {}) =>
    this.request<R, R>({
      path: `/ocAlarmStrategy`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 通过id删除告警策略
   *
   * @tags 告警策略管理
   * @name RemoveById3
   * @summary 通过id删除告警策略
   * @request DELETE:/ocAlarmStrategy
   * @secure
   */
  removeById3 = (data: number[], params: RequestParams = {}) =>
    this.request<R, R>({
      path: `/ocAlarmStrategy`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    })
  /**
   * @description 通过告警策略id触发异常事件
   *
   * @tags 告警策略管理
   * @name TriggerAbnormalEvent
   * @summary 触发异常事件
   * @request POST:/ocAlarmStrategy/triggerAbnormalEvent
   * @secure
   */
  triggerAbnormalEvent = (
    query: {
      /** @format int64 */
      id: number
    },
    params: RequestParams = {}
  ) =>
    this.request<RBoolean, R>({
      path: `/ocAlarmStrategy/triggerAbnormalEvent`,
      method: 'POST',
      query: query,
      secure: true,
      ...params
    })
  /**
   * @description 通过id查询
   *
   * @tags 告警策略管理
   * @name GetById
   * @summary 通过id查询
   * @request GET:/ocAlarmStrategy/{id}
   * @secure
   */
  getById = (id: number, params: RequestParams = {}) =>
    this.request<RAlarmStrategyDTO, R>({
      path: `/ocAlarmStrategy/${id}`,
      method: 'GET',
      secure: true,
      ...params
    })
  /**
   * @description 分页查询
   *
   * @tags 告警策略管理
   * @name GetAlarmStrategyPage
   * @summary 分页查询
   * @request GET:/ocAlarmStrategy/page
   * @secure
   */
  getAlarmStrategyPage = (
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
      /** 告警策略id */
      id?: string
      /** 是否可用 */
      isActive?: string
      /** 告警类型 */
      alarmType?: string
      /** 告警等级 */
      alarmLevel?: string
      /** 告警名称 */
      alarmName?: string
      /** 告警次数 */
      alarmCount?: string
      /** 告警状态 */
      status?: string
      /** 推送方式 */
      notifyMethod?: string
      /** 持续规则次数(事件告警) */
      accumulateCount?: string
      /** 持续规则时间（事件告警） */
      accumulateTimeDuration?: string
      /** 持续规则单位（事件告警） */
      accumulateTimeUnit?: string
      /** 系统提示方式 */
      systemRemindMethod?: string
      /** 是否自动创建事件 */
      isAutoCreateEvent?: string
      /** 通讯恢复后是否通知我（通讯告警） */
      isNeedInformRecover?: string
      /** 无数据上抛时长（通讯告警） */
      offlineTimeDuration?: string
      /** 无数据上抛时长单位（通讯告警） */
      offlineTimeUnit?: string
      /** 告警时间(星期*)（越线，变位告警） */
      weekday?: string
      /** 告警时间段 */
      alarmTimeRanges?: string
      /** 计算方式：瞬时计算，区间计算（事件告警） */
      timeMode?: string
      /** 时间间隔 */
      intervalTimeDuration?: string
      /** 时间间隔单位天，时，分，秒 */
      intervalTimeUnit?: string
      /** 固定，滑动 */
      intervalType?: string
      /** 固定间隔开始时间，当上列为固定区间时，填写 */
      fixIntervalStartTime?: string
      /** 公式配置 html（事件告警） */
      formula?: string
      /** 公式配置 需要解析的 */
      formulaRemark?: string
      /** 通知用户 */
      alarmUserIds?: string
      /** 创建人id */
      createBy?: string
      /** 创建时间 */
      createTime?: string
      /** 更新人id */
      updateBy?: string
      /** 更新时间 */
      updateTime?: string
      /** 租户id */
      tenantId?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<R, R>({
      path: `/ocAlarmStrategy/page`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  /**
   * @description 测试通讯告警测试使用
   *
   * @tags 告警策略管理
   * @name GetTxTest
   * @summary 测试通讯告警测试使用
   * @request GET:/ocAlarmStrategy/getTxTest
   * @secure
   */
  getTxTest = (params: RequestParams = {}) =>
    this.request<RListAlarmInfoDTO, R>({
      path: `/ocAlarmStrategy/getTxTest`,
      method: 'GET',
      secure: true,
      ...params
    })
  /**
   * @description 获取具备触发告警策略的设备信息
   *
   * @tags 告警策略管理
   * @name GetPreTriggerAlarm
   * @summary 获取具备触发告警策略的设备信息
   * @request GET:/ocAlarmStrategy/getPreTriggerAlarm
   * @secure
   */
  getPreTriggerAlarm = (
    query?: {
      type?: string
    },
    params: RequestParams = {}
  ) =>
    this.request<RListAlarmInfoDTO, R>({
      path: `/ocAlarmStrategy/getPreTriggerAlarm`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
  /**
   * @description 测试事件告警测试使用
   *
   * @tags 告警策略管理
   * @name GetEventTest
   * @summary 测试事件告警测试使用
   * @request GET:/ocAlarmStrategy/getEventTestA
   * @secure
   */
  getEventTest = (params: RequestParams = {}) =>
    this.request<REventAlarmInfoDTO, R>({
      path: `/ocAlarmStrategy/getEventTestA`,
      method: 'GET',
      secure: true,
      ...params
    })
  /**
   * No description
   *
   * @tags 告警策略管理
   * @name Export
   * @request GET:/ocAlarmStrategy/export
   * @secure
   */
  export = (
    query: {
      /** 告警策略 */
      alarmStrategy: AlarmStrategy
    },
    params: RequestParams = {}
  ) =>
    this.request<AlarmStrategy[], R>({
      path: `/ocAlarmStrategy/export`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    })
}
