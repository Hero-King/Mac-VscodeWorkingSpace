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

/** 响应信息主体 */
export interface R {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 数据 */
  data?: object
}

/** 告警记录 */
export interface AlarmRecord {
  /**
   * 唯一主键
   * @format int64
   */
  id?: number
  /**
   * 告警策略id
   * @format int64
   */
  alarmStrategyId?: number
  /** 告警信息 */
  alarmMsg?: string
  /**
   * 告警设备id
   * @format int64
   */
  alarmDeviceId?: number
  /**
   * 状态
   * @format int32
   */
  status?: number
  /**
   * 告警解除时间
   * @format date-time
   */
  alarmSecureTime?: string
  /** 接触告警备注 */
  alarmSecureMsg?: string
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string
  /**
   * 租户id
   * @format int64
   */
  tenantId?: number
}

/** 响应信息主体 */
export interface RBoolean {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 数据 */
  data?: boolean
}

/** 解除警告 */
export interface RecordRemoveAlarmDTO {
  ids?: number[]
  msg?: string
}

/** 异常事件表 */
export interface AbnormalEvent {
  /**
   * 唯一主键
   * @format int64
   */
  id?: number
  /** 事件编号 */
  eventNo?: string
  /** 事件类型 */
  eventType?: string
  /**
   * 事件等级 1一般2主要3重要4紧急
   * @format int32
   */
  eventLevel?: number
  /** 事件名称 */
  eventName?: string
  /** 事件备注 */
  eventRemark?: string
  /**
   * 关闭时间
   * @format date-time
   */
  closeTime?: string
  /** 关闭人 */
  closeBy?: string
  /**
   * 发生时间
   * @format date-time
   */
  occurTime?: string
  /**
   * 期限
   * @format date-time
   */
  allottedTime?: string
  /**
   * 原因
   * @format int64
   */
  cause?: number
  /** 原因备注 */
  causeRemark?: string
  /**
   * 状态
   * @format int32
   */
  status?: number
  /** 负责人 */
  eventChargePerson?: string
  /** 创建人 */
  createBy?: string
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /**
   * 更新人
   * @format date-time
   */
  updateBy?: string
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string
  /** @format int64 */
  tenantId?: number
}

/** 异常原因 */
export interface AbnormalCause {
  /**
   * 唯一主键
   * @format int64
   */
  id?: number
  /** 原因名称 */
  causeName?: string
  /**
   * 排序号
   * @format int32
   */
  sort?: number
  /**
   * 是否可用
   * @format int32
   */
  isActive?: number
  /** 备注 */
  remark?: string
  /** 创建人 */
  createBy?: string
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /** 更新人 */
  updateBy?: string
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string
  /**
   * 租户id
   * @format int64
   */
  tenantId?: number
}

/** 保养记录 */
export interface MeterMaintenance {
  /**
   * 唯一标识
   * @format int64
   */
  id?: number
  /**
   * 表记id
   * @format int64
   */
  mesterId?: number
  /** 保养位置 */
  maintenancePosition?: string
  /** 保养项目 */
  maintenanceProgram?: string
  /** 保养人编号 */
  maintenancePersonCode?: string
  /** 备件更换记录 */
  replacementRecord?: string
  /**
   * 保养开始日期
   * @format date
   */
  maintenanceStartDate?: string
  /**
   * 保养结束日期
   * @format date
   */
  maintenanceEndDate?: string
  /** 备注 */
  remark?: string
  /** 创建人 */
  createBy?: string
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /** 更新人 */
  updateBy?: string
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string
  /** 管理分类 */
  classification?: string
  /**
   * 租户id
   * @format int64
   */
  tenantId?: number
}

/** 响应信息主体 */
export interface RMapStringObject {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 数据 */
  data?: Record<string, object>
}

/** 表计检定管理 */
export interface MeterInspection {
  /**
   * 唯一标识
   * @format int64
   */
  id?: number
  /**
   * 表记id
   * @format int64
   */
  mesterId?: number
  /** 状态 */
  status?: string
  /** 证书编号 */
  certificateNumber?: string
  /** 校验依据 */
  inspectionBasis?: string
  /** 校验结论 */
  inspectionConclusion?: string
  /** 校验员 */
  inspectorsName?: string
  /**
   * 校验时间
   * @format date
   */
  inspectionTime?: string
  /** 校验单位 */
  inspectionUnitName?: string
  /** 文件名称 */
  fileName?: string
  /** 文件地址 */
  fileUrl?: string
  /** 备注 */
  remark?: string
  /**
   * 有效日期
   * @format date
   */
  expirationTime?: string
  /** 创建人 */
  createBy?: string
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /** 更新人 */
  updateBy?: string
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string
  /** 管理分类 */
  classification?: string
  /**
   * 租户id
   * @format int64
   */
  tenantId?: number
}

/** 检定管理分页视图对象 */
export interface MeterInspectionVO {
  /**
   * id
   * @format int64
   */
  id?: number
  /**
   * 表记id
   * @format int64
   */
  mesterId?: number
  /** 表计状态 */
  status?: string
  /** 证书编号 */
  certificateNumber?: string
  /** 校验依据 */
  inspectionBasis?: string
  /** 校验结论 */
  inspectionConclusion?: string
  /** 校验员 */
  inspectorsName?: string
  /**
   * 校验时间
   * @format date
   */
  inspectionTime?: string
  /** 校验单位 */
  inspectionUnitName?: string
  /** 文件名称 */
  fileName?: string
  /** 文件地址 */
  fileUrl?: string
  /** 备注 */
  remark?: string
  /**
   * 有效日期
   * @format date
   */
  expirationTime?: string
  /** 创建人 */
  createBy?: string
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /** 更新人 */
  updateBy?: string
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string
  /** 管理分类 */
  classification?: string
  /**
   * 租户id
   * @format int64
   */
  tenantId?: number
  /** @format int64 */
  lineNum?: number
  /** 厂内编号 */
  deviceMark?: string
  /** 表计名称 */
  deviceName?: string
  /** 型号 */
  model?: string
  /** 规格 */
  specification?: string
  /** 准确度等级 */
  level?: string
  /** 校准员 */
  inSpectioner?: string
}

/** 响应信息主体 */
export interface RMeterInspectionVO {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 检定管理分页视图对象 */
  data?: MeterInspectionVO
}

/** 故障管理 */
export interface MeterFault {
  /**
   * 唯一标识
   * @format int64
   */
  id?: number
  /**
   * 表记id
   * @format int64
   */
  mesterId?: number
  /**
   * 故障日期
   * @format date-time
   */
  faultDate?: string
  /** 故障部位 */
  faultPosition?: string
  /** 故障描述 */
  faultDescribe?: string
  /** 一次原因分析 */
  firstReasonAnalysis?: string
  /** 二次原因分析 */
  secondReasonAnalysis?: string
  /** 解决对策 */
  faultSolution?: string
  /** 备件更换记录 */
  replacementRecord?: string
  /** 维修结果 */
  repairResults?: string
  /**
   * 维修开始日期
   * @format date
   */
  repairStartDate?: string
  /**
   * 维修结束日期
   * @format date
   */
  repairEndDate?: string
  /** 维修时长 */
  repairDuration?: number
  /** 停线时长 */
  stopDuration?: number
  /** 故障等级 低0 中1 高2 */
  faultLevel?: string
  /** 维修人员 */
  repairName?: string
  /** 维修编号 */
  repairCode?: string
  /** 备注 */
  remark?: string
  /** 创建人 */
  createBy?: string
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /** 更新人 */
  updateBy?: string
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string
  /** 管理分类 */
  classification?: string
  /**
   * 租户id
   * @format int64
   */
  tenantId?: number
}

/** 故障管理分页视图对象 */
export interface MeterFaultVO {
  /**
   * id
   * @format int64
   */
  id?: number
  /**
   * 表记id
   * @format int64
   */
  mesterId?: number
  /**
   * 故障日期
   * @format date-time
   */
  faultDate?: string
  /** 故障部位 */
  faultPosition?: string
  /** 故障描述 */
  faultDescribe?: string
  /** 一次原因分析 */
  firstReasonAnalysis?: string
  /** 二次原因分析 */
  secondReasonAnalysis?: string
  /** 解决对策 */
  faultSolution?: string
  /** 备件更换记录 */
  replacementRecord?: string
  /** 维修结果 */
  repairResults?: string
  /**
   * 维修开始日期
   * @format date
   */
  repairStartDate?: string
  /**
   * 维修结束日期
   * @format date
   */
  repairEndDate?: string
  /** 维修时长 */
  repairDuration?: number
  /** 停线时长 */
  stopDuration?: number
  /** 故障等级 低0 中1 高2 */
  faultLevel?: string
  /** 维修人员 */
  repairName?: string
  /** 维修编号 */
  repairCode?: string
  /** 备注 */
  remark?: string
  /** 创建人 */
  createBy?: string
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /** 更新人 */
  updateBy?: string
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string
  /** 管理分类 */
  classification?: string
  /**
   * 租户id
   * @format int64
   */
  tenantId?: number
  /** @format int64 */
  lineNum?: number
  /** 厂内编号 */
  deviceMark?: string
  /** 表计名称 */
  deviceName?: string
  /** 型号 */
  model?: string
}

/** 响应信息主体 */
export interface RMeterFaultVO {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 故障管理分页视图对象 */
  data?: MeterFaultVO
}

/** 电价设置 */
export interface ElectricityPriceSetting {
  /**
   * 电价设置id唯一主键
   * @format int64
   */
  id?: number
  /** 时间(年月) */
  usedDate?: string
  /** 平段时间段 */
  normalTime?: string
  /** 平段价格(合计) */
  normalPrice?: number
  /** 市场交易购电价格 */
  normalTracePrice?: number
  /** 基金附加 */
  normalFundExtraPrice?: number
  /** 输配价格 */
  normalTransportPrice?: number
  /** 分摊损失价格 */
  normalLossPrice?: number
  /** 谷时时间段 */
  valleyTime?: string
  /** 谷时价格 */
  valleyPrice?: number
  /** 峰时时间段 */
  peakTime?: string
  /** 峰时价格 */
  peakPrice?: number
  /** 尖峰时间段 */
  topTime?: string
  /** 尖峰价格 */
  topPrice?: number
  /** 尖峰加价价格 */
  topPriceExtra?: number
  /**
   * 基地id
   * @format int64
   */
  topParentId: number
  /** 能源编号(电) */
  energyCode?: string
  /** 创建人id */
  createBy?: string
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /** 更新人id */
  updateBy?: string
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string
  /**
   * 租户id
   * @format int64
   */
  tenantId?: number
}

/** 响应信息主体 */
export interface RListElectricityPriceSetting {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 数据 */
  data?: ElectricityPriceSetting[]
}

export interface AlarmDevice {
  /** @format int64 */
  deviceId?: number
  /** @format int32 */
  type?: number
}

/** 告警策略条件表 */
export interface AlarmStrategyCondition {
  /**
   * 唯一标识
   * @format int64
   */
  id?: number
  /**
   * 告警策略id
   * @format int64
   */
  alarmStrategyId?: number
  /** 运算符（>,<） */
  operator?: string
  /**
   * 目标值
   * @format int32
   */
  targetValue?: number
  /**
   * 初始值
   * @format int32
   */
  shoftStartValue?: number
  /**
   * 输入值
   * @format int32
   */
  shiftEndValue?: number
  /** 创建人id */
  createBy?: string
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /** 修改人id */
  updateBy?: string
  /**
   * 修改时间
   * @format date-time
   */
  updateTime?: string
}

export interface AlarmStrategyDTO {
  /**
   * 告警策略id
   * @format int64
   */
  id?: number
  /**
   * 是否可用
   * @format int32
   */
  isActive?: number
  /** 告警类型 */
  alarmType?: string
  /** 告警等级 */
  alarmLevel?: string
  /** 告警名称 */
  alarmName?: string
  /**
   * 告警次数
   * @format int32
   */
  alarmCount?: number
  /**
   * 告警状态
   * @format int32
   */
  status?: number
  /** 推送方式 */
  notifyMethod?: string
  /**
   * 持续规则次数(事件告警)
   * @format int32
   */
  accumulateCount?: number
  /** 持续规则时间（事件告警） */
  accumulateTimeDuration?: string
  /** 持续规则单位（事件告警） */
  accumulateTimeUnit?: string
  /** 系统提示方式 */
  systemRemindMethod?: string
  /**
   * 是否自动创建事件
   * @format int32
   */
  isAutoCreateEvent?: number
  /**
   * 通讯恢复后是否通知我（通讯告警）
   * @format int32
   */
  isNeedInformRecover?: number
  /**
   * 无数据上抛时长（通讯告警）
   * @format int32
   */
  offlineTimeDuration?: number
  /** 无数据上抛时长单位（通讯告警） */
  offlineTimeUnit?: string
  /** 告警时间(星期*)（越线，变位告警） */
  weekday?: string
  /** 告警时间段 */
  alarmTimeRanges?: string
  /** 计算方式：瞬时计算，区间计算（事件告警） */
  timeMode?: string
  /**
   * 时间间隔
   * @format int32
   */
  intervalTimeDuration?: number
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
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /** 更新人id */
  updateBy?: string
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string
  /**
   * 租户id
   * @format int64
   */
  tenantId?: number
  conditionList?: AlarmStrategyCondition[]
  alarmDeviceList?: AlarmDevice[]
}

/** 响应信息主体 */
export interface RLong {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /**
   * 数据
   * @format int64
   */
  data?: number
}

/** 异常事件-关联参数 */
export interface AbnormalEventParamDTO {
  /**
   * 唯一主键
   * @format int64
   */
  id?: number
  /**
   * 事件id
   * @format int64
   */
  abnormalEventId?: number
  /**
   * 设备参数
   * @format int64
   */
  paramId?: number
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string
  /** 参数信息 */
  msg?: string
}

/** 异常事件-关注（取消关注） */
export interface AbnormalEventFollowDTO {
  /**
   * 异常事件id
   * @format int64
   */
  abnormalEventId: number
  /** 创建人 */
  createBy?: string
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
}

/** 异常事件-关联设备 */
export interface AbnormalEventDeviceDTO {
  /**
   * 唯一主键
   * @format int64
   */
  id?: number
  /**
   * 事件id
   * @format int64
   */
  abnormalEventId?: number
  /**
   * 设备id
   * @format int64
   */
  deviceId?: number
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string
  /** 设备信息 */
  msg?: string
}

/** 异常事件-评论列表 */
export interface AbnormalEventCommentRecord {
  /**
   * 唯一主键
   * @format int64
   */
  id?: number
  /**
   * 事件id
   * @format int64
   */
  abnormalEventId?: number
  /** 内容 */
  content?: string
  /**
   * 上级id
   * @format int64
   */
  parentId?: number
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /** 创建人 */
  createBy?: string
  /** 更新人 */
  updateBy?: string
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string
}

/** 新增关联警告 */
export interface AbnormalEventAlarmDTO {
  /**
   * 唯一主键
   * @format int64
   */
  id?: number
  /**
   * 事件id
   * @format int64
   */
  abnormalEventId?: number
  /**
   * 告警记录id
   * @format int64
   */
  alarmRecordId?: number
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string
  /** 告警信息 */
  msg?: string
}

export interface OrderItem {
  column?: string
  asc?: boolean
}

/** 数据 */
export interface IPageMeterMaintenanceVO {
  /** @format int64 */
  size?: number
  /** @format int64 */
  total?: number
  /** @format int64 */
  current?: number
  records?: MeterMaintenanceVO[]
  /** @format int64 */
  pages?: number
}

/** 维修保养分页视图对象 */
export interface MeterMaintenanceVO {
  /**
   * 唯一标识
   * @format int64
   */
  id?: number
  /**
   * 表记id
   * @format int64
   */
  mesterId?: number
  /** 保养位置 */
  maintenancePosition?: string
  /** 保养项目 */
  maintenanceProgram?: string
  /** 保养人编号 */
  maintenancePersonCode?: string
  /** 备件更换记录 */
  replacementRecord?: string
  /**
   * 保养开始日期
   * @format date
   */
  maintenanceStartDate?: string
  /**
   * 保养结束日期
   * @format date
   */
  maintenanceEndDate?: string
  /** 备注 */
  remark?: string
  /** 创建人 */
  createBy?: string
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /** 更新人 */
  updateBy?: string
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string
  /** 管理分类 */
  classification?: string
  /**
   * 租户id
   * @format int64
   */
  tenantId?: number
  /** 厂内编号 */
  deviceMark?: string
  /** 表计名称 */
  deviceName?: string
}

/** 响应信息主体 */
export interface RIPageMeterMaintenanceVO {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 数据 */
  data?: IPageMeterMaintenanceVO
}

/** 响应信息主体 */
export interface RMeterMaintenanceVO {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 维修保养分页视图对象 */
  data?: MeterMaintenanceVO
}

/** 数据 */
export interface IPageMeterInspectionVO {
  /** @format int64 */
  size?: number
  /** @format int64 */
  total?: number
  /** @format int64 */
  current?: number
  records?: MeterInspectionVO[]
  /** @format int64 */
  pages?: number
}

/** 响应信息主体 */
export interface RIPageMeterInspectionVO {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 数据 */
  data?: IPageMeterInspectionVO
}

/** 数据 */
export interface IPageMeterFaultVO {
  /** @format int64 */
  size?: number
  /** @format int64 */
  total?: number
  /** @format int64 */
  current?: number
  records?: MeterFaultVO[]
  /** @format int64 */
  pages?: number
}

/** 响应信息主体 */
export interface RIPageMeterFaultVO {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 数据 */
  data?: IPageMeterFaultVO
}

/** 数据 */
export interface IPageElectricityPriceSetting {
  /** @format int64 */
  size?: number
  /** @format int64 */
  total?: number
  /** @format int64 */
  current?: number
  records?: ElectricityPriceSetting[]
  /** @format int64 */
  pages?: number
}

/** 响应信息主体 */
export interface RIPageElectricityPriceSetting {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 数据 */
  data?: IPageElectricityPriceSetting
}

/** 响应信息主体 */
export interface RElectricityPriceSetting {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 电价设置 */
  data?: ElectricityPriceSetting
}

/** 响应信息主体 */
export interface RAlarmStrategyDTO {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  data?: AlarmStrategyDTO
}

export interface AlarmInfoCondition {
  operator?: string
  /** @format int32 */
  targetValue?: number
  /** @format int32 */
  startValue?: number
  /** @format int32 */
  endValue?: number
}

/** 数据 */
export interface AlarmInfoDTO {
  /**
   * 关联id
   * @format int64
   */
  relationId?: number
  /** 测点标志 */
  pointMark?: string
  type?: string
  /**
   * 策略id
   * @format int64
   */
  alarmStrategyId?: number
  /** @format int32 */
  offlineTimeDuration?: number
  offlineTimeUnit?: string
  conditionList?: AlarmInfoCondition[]
}

/** 响应信息主体 */
export interface RListAlarmInfoDTO {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 数据 */
  data?: AlarmInfoDTO[]
}

/** 数据 */
export interface EventAlarmInfoDTO {
  /**
   * 时间间隔
   * @format int64
   */
  intervalTimeDuration?: number
  /** 关联设备Ids */
  relationDeviceIds?: number[]
  /**
   * 策略id
   * @format int64
   */
  alarmStrategyId?: number
  /** 测点标志集合 */
  relationPoints?: RelationPoint[]
  /** 条件集合 */
  conditionList?: AlarmInfoCondition[]
}

/** 响应信息主体 */
export interface REventAlarmInfoDTO {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 数据 */
  data?: EventAlarmInfoDTO
}

/** 测点标志集合 */
export interface RelationPoint {
  /** A 当前值，B前值 */
  type?: string
  name?: string
  value?: string
}

/** 告警策略 */
export interface AlarmStrategy {
  /**
   * 告警策略id
   * @format int64
   */
  id?: number
  /**
   * 是否可用
   * @format int32
   */
  isActive?: number
  /** 告警类型 */
  alarmType?: string
  /** 告警等级 */
  alarmLevel?: string
  /** 告警名称 */
  alarmName?: string
  /**
   * 告警次数
   * @format int32
   */
  alarmCount?: number
  /**
   * 告警状态
   * @format int32
   */
  status?: number
  /** 推送方式 */
  notifyMethod?: string
  /**
   * 持续规则次数(事件告警)
   * @format int32
   */
  accumulateCount?: number
  /** 持续规则时间（事件告警） */
  accumulateTimeDuration?: string
  /** 持续规则单位（事件告警） */
  accumulateTimeUnit?: string
  /** 系统提示方式 */
  systemRemindMethod?: string
  /**
   * 是否自动创建事件
   * @format int32
   */
  isAutoCreateEvent?: number
  /**
   * 通讯恢复后是否通知我（通讯告警）
   * @format int32
   */
  isNeedInformRecover?: number
  /**
   * 无数据上抛时长（通讯告警）
   * @format int32
   */
  offlineTimeDuration?: number
  /** 无数据上抛时长单位（通讯告警） */
  offlineTimeUnit?: string
  /** 告警时间(星期*)（越线，变位告警） */
  weekday?: string
  /** 告警时间段 */
  alarmTimeRanges?: string
  /** 计算方式：瞬时计算，区间计算（事件告警） */
  timeMode?: string
  /**
   * 时间间隔
   * @format int32
   */
  intervalTimeDuration?: number
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
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /** 更新人id */
  updateBy?: string
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string
  /**
   * 租户id
   * @format int64
   */
  tenantId?: number
}

/** 响应信息主体 */
export interface RAlarmRecord {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 告警记录 */
  data?: AlarmRecord
}

/** 告警统计(运维看板) */
export interface AlarmStaticsVO {
  /**
   * 告警次数
   * @format int32
   */
  total?: number
  /**
   * 告警解除数量
   * @format int32
   */
  secure?: number
  /** 告警解除率 */
  secureRate?: string
  /**
   * 一般告警
   * @format int32
   */
  generalAlarm?: number
  /**
   * 一般告警（已解除）
   * @format int32
   */
  unGeneralAlarm?: number
  /**
   * 主要告警
   * @format int32
   */
  majorAlarm?: number
  /**
   * 主要告警（已解除）
   * @format int32
   */
  unMajorAlarm?: number
  /**
   * 重要告警
   * @format int32
   */
  importAlarm?: number
  /**
   * 重要告警（已解除）
   * @format int32
   */
  unImportAlarm?: number
  /**
   * 紧急告警
   * @format int32
   */
  emergencyAlarm?: number
  /**
   * 紧急告警（已解除）
   * @format int32
   */
  unEmergencyAlarm?: number
  /** 告警处理排名 */
  alarmType?: Record<string, object>[]
}

/** 响应信息主体 */
export interface RAlarmStaticsVO {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 告警统计(运维看板) */
  data?: AlarmStaticsVO
}

/** 告警处理排名 */
export interface AlarmStaticsRankVO {
  /**
   * id
   * @format int64
   */
  id?: number
  /** 负责人 */
  charger?: string
  /** 处理数量 */
  dealNum?: string
}

/** 响应信息主体 */
export interface RListAlarmStaticsRankVO {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 数据 */
  data?: AlarmStaticsRankVO[]
}

/** 告警记录视图VO */
export interface AlarmRecordVO {
  /**
   * id
   * @format int64
   */
  id?: number
  /** 告警类型 */
  alarmType?: string
  /** 告警名称 */
  alarmName?: string
  /** 告警对象 */
  alarmObject?: string
  /** 告警信息 */
  alarmMsg?: string
  /**
   * 告警设备id
   * @format int64
   */
  alarmDeviceId?: number
  /** 告警级别 */
  alarmLevel?: string
  /**
   * 告警时间
   * @format date-time
   */
  alarmTime?: string
  /**
   * 状态 1告警2禁用3搁置4已解除
   * @format int32
   */
  status?: number
  /**
   * 解除时间
   * @format date-time
   */
  alarmSecureTime?: string
  /** 备注 */
  remark?: string
  /** 推送对象 */
  alarmUserIds?: string
  /**
   * 告警策略id
   * @format int64
   */
  alarmStrategyId?: number
}

/** 数据 */
export interface IPageAlarmRecordVO {
  /** @format int64 */
  size?: number
  /** @format int64 */
  total?: number
  /** @format int64 */
  current?: number
  records?: AlarmRecordVO[]
  /** @format int64 */
  pages?: number
}

/** 响应信息主体 */
export interface RIPageAlarmRecordVO {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 数据 */
  data?: IPageAlarmRecordVO
}

/** 参数 */
export interface EventParam {
  /**
   * id
   * @format int64
   */
  id?: number
  /**
   * 参数id
   * @format int64
   */
  paramId?: number
  /** 关联的参数信息 */
  name?: string
}

/** 响应信息主体 */
export interface RListEventParam {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 数据 */
  data?: EventParam[]
}

/** 历史信息 */
export interface EventHistory {
  /**
   * id
   * @format int64
   */
  id?: number
  /** 创建人 */
  createBy?: string
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /** 历史信息 */
  msg?: string
}

/** 响应信息主体 */
export interface RListEventHistory {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 数据 */
  data?: EventHistory[]
}

/** 附件 */
export interface AbnormalEventFileVO {
  /**
   * 附件id
   * @format int64
   */
  id?: number
  /** 文件名称 */
  name?: string
  /** 文件大小 */
  size?: string
  /**
   * 上传时间
   * @format date-time
   */
  createTime?: string
  /** 文件地址 */
  filePath?: string
}

/** 响应信息主体 */
export interface RListAbnormalEventFileVO {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 数据 */
  data?: AbnormalEventFileVO[]
}

/** 设备 */
export interface EventDevice {
  /**
   * id
   * @format int64
   */
  id?: number
  /**
   * 设备id
   * @format int64
   */
  deviceId?: number
  /** 关联的设备信息 */
  name?: string
}

/** 响应信息主体 */
export interface RListEventDevice {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 数据 */
  data?: EventDevice[]
}

/** 评论 */
export interface EventComment {
  /**
   * id
   * @format int64
   */
  id?: number
  /** 创建人 */
  createBy?: string
  /** 内容 */
  content?: string
  /**
   * 父级id
   * @format int64
   */
  parentId?: number
  /** 父级创建人 */
  parentCreateBy?: string
  /**
   * 评论时间
   * @format date-time
   */
  createTime?: string
  children?: EventComment[]
}

/** 响应信息主体 */
export interface RListEventComment {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 数据 */
  data?: EventComment[]
}

/** 告警 */
export interface EventAlarm {
  /**
   * id
   * @format int64
   */
  id?: number
  /**
   * 告警记录id
   * @format int64
   */
  alarmId?: number
  /** 关联的告警信息 */
  name?: string
}

/** 响应信息主体 */
export interface RListEventAlarm {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 数据 */
  data?: EventAlarm[]
}

/** 动作 */
export interface EventAction {
  /**
   * id
   * @format int64
   */
  id?: number
  /** 创建人 */
  createBy?: string
  /** 动作名称 */
  actionName?: string
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
}

/** 响应信息主体 */
export interface RListEventAction {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 数据 */
  data?: EventAction[]
}

/** 异常事件详情 */
export interface AbnormalEventDetailVO {
  /**
   * 唯一主键
   * @format int64
   */
  id?: number
  /** 事件编号 */
  eventNo?: string
  /** 事件类型 */
  eventType?: string
  /**
   * 事件等级 1一般2主要3重要4紧急
   * @format int32
   */
  eventLevel?: number
  /** 事件名称 */
  eventName?: string
  /** 事件备注 */
  eventRemark?: string
  /**
   * 关闭时间
   * @format date-time
   */
  closeTime?: string
  /** 关闭人 */
  closeBy?: string
  /**
   * 发生时间
   * @format date-time
   */
  occurTime?: string
  /**
   * 期限
   * @format date-time
   */
  allottedTime?: string
  /**
   * 原因
   * @format int64
   */
  cause?: number
  /** 原因备注 */
  causeRemark?: string
  /**
   * 状态
   * @format int32
   */
  status?: number
  /** 负责人 */
  eventChargePerson?: string
  /** 创建人 */
  createBy?: string
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /**
   * 更新人
   * @format date-time
   */
  updateBy?: string
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string
  /** @format int64 */
  tenantId?: number
  /** 是否关注 */
  isFollow?: boolean
  /** 附件列表 */
  files?: AbnormalEventFileVO[]
  /** 关联告警 */
  alarms?: EventAlarm[]
  /** 关联设备 */
  devices?: EventDevice[]
  /** 关联参数 */
  params?: EventParam[]
  /** 评论 */
  comments?: EventComment[]
  /** 动作 */
  actions?: EventAction[]
  /** 历史信息 */
  histories?: EventHistory[]
}

/** 响应信息主体 */
export interface RAbnormalEventDetailVO {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 异常事件详情 */
  data?: AbnormalEventDetailVO
}

/** 异常事件统计(事件看板) */
export interface AbnormalEventStatisticsVO {
  /**
   * 全部事件
   * @format int32
   */
  total?: number
  /**
   * 已关闭的
   * @format int32
   */
  closed?: number
  /**
   * 未关闭的
   * @format int32
   */
  notClose?: number
  /**
   * 进行中的
   * @format int32
   */
  todo?: number
  /**
   * 新建的
   * @format int32
   */
  created?: number
}

/** 响应信息主体 */
export interface RAbnormalEventStatisticsVO {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 异常事件统计(事件看板) */
  data?: AbnormalEventStatisticsVO
}

/** 事件统计图(按日期) */
export interface AbnormalEventStatisticsDateVO {
  /**
   * 日期
   * @format date
   */
  date?: string
  /**
   * 新建的数量
   * @format int32
   */
  create?: number
  /**
   * 进行中的数量
   * @format int32
   */
  todo?: number
  /**
   * 关闭的数量
   * @format int32
   */
  closed?: number
}

/** 响应信息主体 */
export interface RListAbnormalEventStatisticsDateVO {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 数据 */
  data?: AbnormalEventStatisticsDateVO[]
}

/** 原因帕累托图 */
export interface AbnormalEventStatisticsCauseVO {
  /**
   * 数量
   * @format int32
   */
  count?: number
  /** 原因 */
  cause?: string
  /** 占比 */
  proportion?: string
}

/** 响应信息主体 */
export interface RListAbnormalEventStatisticsCauseVO {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 数据 */
  data?: AbnormalEventStatisticsCauseVO[]
}

/** 异常事件统计(运维看板) */
export interface EventStatisticsVO {
  /**
   * 异常事件总数
   * @format int32
   */
  total?: number
  /**
   * 已解决数量
   * @format int64
   */
  resolved?: number
  /**
   * 已关闭数量
   * @format int32
   */
  closed?: number
  /** 改善措施达成率 */
  improveRate?: string
  /**
   * 事件平均处理时长
   * @format int64
   */
  eventAverageTimes?: number
  /**
   * 处理超时事件数量
   * @format int32
   */
  processTimeOut?: number
  /** 处理超时率 */
  processTimeOutRate?: string
  /**
   * 一般事件
   * @format int64
   */
  generalEvent?: number
  /**
   * 一般事件（已关闭）
   * @format int64
   */
  unGeneralEvent?: number
  /**
   * 主要事件
   * @format int64
   */
  majorEvent?: number
  /**
   * 主要事件（已关闭）
   * @format int64
   */
  unMajorEvent?: number
  /**
   * 重要事件
   * @format int64
   */
  importEvent?: number
  /**
   * 重要事件（已关闭）
   * @format int64
   */
  unImportEvent?: number
  /**
   * 紧急事件
   * @format int64
   */
  emergencyEvent?: number
  /**
   * 紧急事件（已关闭）
   * @format int64
   */
  unEmergencyEvent?: number
}

/** 响应信息主体 */
export interface REventStatisticsVO {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 异常事件统计(运维看板) */
  data?: EventStatisticsVO
}

/** 数据 */
export interface IPageAbnormalEvent {
  /** @format int64 */
  size?: number
  /** @format int64 */
  total?: number
  /** @format int64 */
  current?: number
  records?: AbnormalEvent[]
  /** @format int64 */
  pages?: number
}

/** 响应信息主体 */
export interface RIPageAbnormalEvent {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 数据 */
  data?: IPageAbnormalEvent
}

/** 处理超时事件列表 */
export interface EventOutTimeListVO {
  /** 事件编号 */
  eventNo?: string
  /** 事件标题 */
  eventName?: string
  /** 事件级别 */
  eventLevel?: string
  /**
   * 发生时间
   * @format date-time
   */
  occurTime?: string
  /** 创建人 */
  createBy?: string
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /** 处理时长 */
  dealTime?: string
  /**
   * 状态
   * @format int32
   */
  status?: number
  /** 负责人 */
  eventChargePerson?: string
}

/** 数据 */
export interface IPageEventOutTimeListVO {
  /** @format int64 */
  size?: number
  /** @format int64 */
  total?: number
  /** @format int64 */
  current?: number
  records?: EventOutTimeListVO[]
  /** @format int64 */
  pages?: number
}

/** 响应信息主体 */
export interface RIPageEventOutTimeListVO {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 数据 */
  data?: IPageEventOutTimeListVO
}

/** 事件处理排名 */
export interface EventStatiscRankVO {
  /**
   * id
   * @format int64
   */
  id?: number
  /** 负责人 */
  charger?: string
  /** 处理数量 */
  dealNum?: string
}

/** 响应信息主体 */
export interface RListEventStatiscRankVO {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 数据 */
  data?: EventStatiscRankVO[]
}

/** 响应信息主体 */
export interface RAbnormalCause {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 异常原因 */
  data?: AbnormalCause
}

/** 数据 */
export interface IPageAbnormalCause {
  /** @format int64 */
  size?: number
  /** @format int64 */
  total?: number
  /** @format int64 */
  current?: number
  records?: AbnormalCause[]
  /** @format int64 */
  pages?: number
}

/** 响应信息主体 */
export interface RIPageAbnormalCause {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 数据 */
  data?: IPageAbnormalCause
}

/** 响应信息主体 */
export interface RListAbnormalCause {
  /**
   * 返回标记：成功标记=0，失败标记=1
   * @format int32
   */
  code?: number
  /** 返回信息 */
  msg?: string
  /** 数据 */
  data?: AbnormalCause[]
}
