declare namespace API {
  type AbnormalCause = {
    /** 唯一主键 */
    id?: number;
    /** 原因名称 */
    causeName?: string;
    /** 排序号 */
    sort?: number;
    /** 是否可用 */
    isActive?: number;
    /** 备注 */
    remark?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新人 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 租户id */
    tenantId?: number;
  };

  type AbnormalEvent = {
    /** 唯一主键 */
    id?: number;
    /** 事件编号 */
    eventNo?: string;
    /** 事件类型 */
    eventType?: string;
    /** 事件等级 1一般2主要3重要4紧急 */
    eventLevel?: number;
    /** 事件名称 */
    eventName?: string;
    /** 事件备注 */
    eventRemark?: string;
    /** 关闭时间 */
    closeTime?: string;
    /** 关闭人 */
    closeBy?: string;
    /** 发生时间 */
    occurTime?: string;
    /** 期限 */
    allottedTime?: string;
    /** 原因 */
    cause?: number;
    /** 原因备注 */
    causeRemark?: string;
    /** 状态 */
    status?: number;
    /** 负责人 */
    eventChargePerson?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新人 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
    tenantId?: number;
  };

  type AbnormalEventAlarmDTO = {
    /** 唯一主键 */
    id?: number;
    /** 事件id */
    abnormalEventId?: number;
    /** 告警记录id */
    alarmRecordId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 告警信息 */
    msg?: string;
  };

  type AbnormalEventCommentRecord = {
    /** 唯一主键 */
    id?: number;
    /** 事件id */
    abnormalEventId?: number;
    /** 内容 */
    content?: string;
    /** 上级id */
    parentId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    createBy?: string;
    /** 更新人 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type AbnormalEventDetailVO = {
    /** 唯一主键 */
    id?: number;
    /** 事件编号 */
    eventNo?: string;
    /** 事件类型 */
    eventType?: string;
    /** 事件等级 1一般2主要3重要4紧急 */
    eventLevel?: number;
    /** 事件名称 */
    eventName?: string;
    /** 事件备注 */
    eventRemark?: string;
    /** 关闭时间 */
    closeTime?: string;
    /** 关闭人 */
    closeBy?: string;
    /** 发生时间 */
    occurTime?: string;
    /** 期限 */
    allottedTime?: string;
    /** 原因 */
    cause?: number;
    /** 原因备注 */
    causeRemark?: string;
    /** 状态 */
    status?: number;
    /** 负责人 */
    eventChargePerson?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新人 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
    tenantId?: number;
    /** 是否关注 */
    isFollow?: boolean;
    /** 附件列表 */
    files?: AbnormalEventFileVO[];
    /** 关联告警 */
    alarms?: EventAlarm[];
    /** 关联设备 */
    devices?: EventDevice[];
    /** 关联参数 */
    params?: EventParam[];
    /** 评论 */
    comments?: EventComment[];
    /** 动作 */
    actions?: EventAction[];
    /** 历史信息 */
    histories?: EventHistory[];
  };

  type AbnormalEventDeviceDTO = {
    /** 唯一主键 */
    id?: number;
    /** 事件id */
    abnormalEventId?: number;
    /** 设备id */
    deviceId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 设备信息 */
    msg?: string;
  };

  type AbnormalEventFileVO = {
    /** 附件id */
    id?: number;
    /** 文件名称 */
    name?: string;
    /** 文件大小 */
    size?: string;
    /** 上传时间 */
    createTime?: string;
    /** 文件地址 */
    filePath?: string;
  };

  type AbnormalEventFollowDTO = {
    /** 异常事件id */
    abnormalEventId: number;
    /** 创建人 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
  };

  type AbnormalEventParamDTO = {
    /** 唯一主键 */
    id?: number;
    /** 事件id */
    abnormalEventId?: number;
    /** 设备参数 */
    paramId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 参数信息 */
    msg?: string;
  };

  type AbnormalEventStatisticsCauseVO = {
    /** 数量 */
    count?: number;
    /** 原因 */
    cause?: string;
    /** 占比 */
    proportion?: string;
  };

  type AbnormalEventStatisticsDateVO = {
    /** 日期 */
    date?: string;
    /** 新建的数量 */
    create?: number;
    /** 进行中的数量 */
    todo?: number;
    /** 关闭的数量 */
    closed?: number;
  };

  type AbnormalEventStatisticsVO = {
    /** 全部事件 */
    total?: number;
    /** 已关闭的 */
    closed?: number;
    /** 未关闭的 */
    notClose?: number;
    /** 进行中的 */
    todo?: number;
    /** 新建的 */
    created?: number;
  };

  type AlarmDevice = {
    deviceId?: number;
    type?: number;
  };

  type AlarmInfoCondition = {
    operator?: string;
    targetValue?: number;
    startValue?: number;
    endValue?: number;
  };

  type AlarmInfoDTO = {
    /** 关联id */
    relationId?: number;
    /** 测点标志 */
    pointMark?: string;
    type?: string;
    /** 策略id */
    alarmStrategyId?: number;
    offlineTimeDuration?: number;
    offlineTimeUnit?: string;
    conditionList?: AlarmInfoCondition[];
  };

  type AlarmRecord = {
    /** 唯一主键 */
    id?: number;
    /** 告警策略id */
    alarmStrategyId?: number;
    /** 告警信息 */
    alarmMsg?: string;
    /** 告警设备id */
    alarmDeviceId?: number;
    /** 状态 */
    status?: number;
    /** 告警解除时间 */
    alarmSecureTime?: string;
    /** 接触告警备注 */
    alarmSecureMsg?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 租户id */
    tenantId?: number;
  };

  type AlarmRecordVO = {
    /** id */
    id?: number;
    /** 告警类型 */
    alarmType?: string;
    /** 告警名称 */
    alarmName?: string;
    /** 告警对象 */
    alarmObject?: string;
    /** 告警信息 */
    alarmMsg?: string;
    /** 告警设备id */
    alarmDeviceId?: number;
    /** 告警级别 */
    alarmLevel?: string;
    /** 告警时间 */
    alarmTime?: string;
    /** 状态 1告警2禁用3搁置4已解除 */
    status?: number;
    /** 解除时间 */
    alarmSecureTime?: string;
    /** 备注 */
    remark?: string;
    /** 推送对象 */
    alarmUserIds?: string;
    /** 告警策略id */
    alarmStrategyId?: number;
  };

  type AlarmStaticsRankVO = {
    /** id */
    id?: number;
    /** 负责人 */
    charger?: string;
    /** 处理数量 */
    dealNum?: string;
  };

  type AlarmStaticsVO = {
    /** 告警次数 */
    total?: number;
    /** 告警解除数量 */
    secure?: number;
    /** 告警解除率 */
    secureRate?: string;
    /** 一般告警 */
    generalAlarm?: number;
    /** 一般告警（已解除） */
    unGeneralAlarm?: number;
    /** 主要告警 */
    majorAlarm?: number;
    /** 主要告警（已解除） */
    unMajorAlarm?: number;
    /** 重要告警 */
    importAlarm?: number;
    /** 重要告警（已解除） */
    unImportAlarm?: number;
    /** 紧急告警 */
    emergencyAlarm?: number;
    /** 紧急告警（已解除） */
    unEmergencyAlarm?: number;
    /** 告警处理排名 */
    alarmType?: Record<string, any>[];
  };

  type AlarmStrategy = {
    /** 告警策略id */
    id?: number;
    /** 是否可用 */
    isActive?: number;
    /** 告警类型 */
    alarmType?: string;
    /** 告警等级 */
    alarmLevel?: string;
    /** 告警名称 */
    alarmName?: string;
    /** 告警次数 */
    alarmCount?: number;
    /** 告警状态 */
    status?: number;
    /** 推送方式 */
    notifyMethod?: string;
    /** 持续规则次数(事件告警) */
    accumulateCount?: number;
    /** 持续规则时间（事件告警） */
    accumulateTimeDuration?: string;
    /** 持续规则单位（事件告警） */
    accumulateTimeUnit?: string;
    /** 系统提示方式 */
    systemRemindMethod?: string;
    /** 是否自动创建事件 */
    isAutoCreateEvent?: number;
    /** 通讯恢复后是否通知我（通讯告警） */
    isNeedInformRecover?: number;
    /** 无数据上抛时长（通讯告警） */
    offlineTimeDuration?: number;
    /** 无数据上抛时长单位（通讯告警） */
    offlineTimeUnit?: string;
    /** 告警时间(星期*)（越线，变位告警） */
    weekday?: string;
    /** 告警时间段 */
    alarmTimeRanges?: string;
    /** 计算方式：瞬时计算，区间计算（事件告警） */
    timeMode?: string;
    /** 时间间隔 */
    intervalTimeDuration?: number;
    /** 时间间隔单位天，时，分，秒 */
    intervalTimeUnit?: string;
    /** 固定，滑动 */
    intervalType?: string;
    /** 固定间隔开始时间，当上列为固定区间时，填写 */
    fixIntervalStartTime?: string;
    /** 公式配置 html（事件告警） */
    formula?: string;
    /** 公式配置 需要解析的 */
    formulaRemark?: string;
    /** 通知用户 */
    alarmUserIds?: string;
    /** 创建人id */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新人id */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 租户id */
    tenantId?: number;
  };

  type AlarmStrategyCondition = {
    /** 唯一标识 */
    id?: number;
    /** 告警策略id */
    alarmStrategyId?: number;
    /** 运算符（>,<） */
    operator?: string;
    /** 目标值 */
    targetValue?: number;
    /** 初始值 */
    shoftStartValue?: number;
    /** 输入值 */
    shiftEndValue?: number;
    /** 创建人id */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateBy?: string;
    /** 修改时间 */
    updateTime?: string;
  };

  type AlarmStrategyDTO = {
    /** 告警策略id */
    id?: number;
    /** 是否可用 */
    isActive?: number;
    /** 告警类型 */
    alarmType?: string;
    /** 告警等级 */
    alarmLevel?: string;
    /** 告警名称 */
    alarmName?: string;
    /** 告警次数 */
    alarmCount?: number;
    /** 告警状态 */
    status?: number;
    /** 推送方式 */
    notifyMethod?: string;
    /** 持续规则次数(事件告警) */
    accumulateCount?: number;
    /** 持续规则时间（事件告警） */
    accumulateTimeDuration?: string;
    /** 持续规则单位（事件告警） */
    accumulateTimeUnit?: string;
    /** 系统提示方式 */
    systemRemindMethod?: string;
    /** 是否自动创建事件 */
    isAutoCreateEvent?: number;
    /** 通讯恢复后是否通知我（通讯告警） */
    isNeedInformRecover?: number;
    /** 无数据上抛时长（通讯告警） */
    offlineTimeDuration?: number;
    /** 无数据上抛时长单位（通讯告警） */
    offlineTimeUnit?: string;
    /** 告警时间(星期*)（越线，变位告警） */
    weekday?: string;
    /** 告警时间段 */
    alarmTimeRanges?: string;
    /** 计算方式：瞬时计算，区间计算（事件告警） */
    timeMode?: string;
    /** 时间间隔 */
    intervalTimeDuration?: number;
    /** 时间间隔单位天，时，分，秒 */
    intervalTimeUnit?: string;
    /** 固定，滑动 */
    intervalType?: string;
    /** 固定间隔开始时间，当上列为固定区间时，填写 */
    fixIntervalStartTime?: string;
    /** 公式配置 html（事件告警） */
    formula?: string;
    /** 公式配置 需要解析的 */
    formulaRemark?: string;
    /** 通知用户 */
    alarmUserIds?: string;
    /** 创建人id */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新人id */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 租户id */
    tenantId?: number;
    conditionList?: AlarmStrategyCondition[];
    alarmDeviceList?: AlarmDevice[];
  };

  type detail1Params = {
    id: number;
  };

  type detail2Params = {
    id: number;
  };

  type detail3Params = {
    id: number;
  };

  type detailParams = {
    id: number;
  };

  type ElectricityPriceSetting = {
    /** 电价设置id唯一主键 */
    id?: number;
    /** 时间(年月) */
    usedDate?: string;
    /** 平段时间段 */
    normalTime?: string;
    /** 平段价格(合计) */
    normalPrice?: number;
    /** 市场交易购电价格 */
    normalTracePrice?: number;
    /** 基金附加 */
    normalFundExtraPrice?: number;
    /** 输配价格 */
    normalTransportPrice?: number;
    /** 分摊损失价格 */
    normalLossPrice?: number;
    /** 谷时时间段 */
    valleyTime?: string;
    /** 谷时价格 */
    valleyPrice?: number;
    /** 峰时时间段 */
    peakTime?: string;
    /** 峰时价格 */
    peakPrice?: number;
    /** 尖峰时间段 */
    topTime?: string;
    /** 尖峰价格 */
    topPrice?: number;
    /** 尖峰加价价格 */
    topPriceExtra?: number;
    /** 基地id */
    topParentId: number;
    /** 能源编号(电) */
    energyCode?: string;
    /** 创建人id */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新人id */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 租户id */
    tenantId?: number;
  };

  type EventAction = {
    /** id */
    id?: number;
    /** 创建人 */
    createBy?: string;
    /** 动作名称 */
    actionName?: string;
    /** 创建时间 */
    createTime?: string;
  };

  type EventAlarm = {
    /** id */
    id?: number;
    /** 告警记录id */
    alarmId?: number;
    /** 关联的告警信息 */
    name?: string;
  };

  type EventAlarmInfoDTO = {
    /** 时间间隔 */
    intervalTimeDuration?: number;
    /** 关联设备Ids */
    relationDeviceIds?: number[];
    /** 策略id */
    alarmStrategyId?: number;
    /** 测点标志集合 */
    relationPoints?: RelationPoint[];
    /** 条件集合 */
    conditionList?: AlarmInfoCondition[];
  };

  type EventComment = {
    /** id */
    id?: number;
    /** 创建人 */
    createBy?: string;
    /** 内容 */
    content?: string;
    /** 父级id */
    parentId?: number;
    /** 父级创建人 */
    parentCreateBy?: string;
    /** 评论时间 */
    createTime?: string;
    children?: EventComment[];
  };

  type EventDevice = {
    /** id */
    id?: number;
    /** 设备id */
    deviceId?: number;
    /** 关联的设备信息 */
    name?: string;
  };

  type EventHistory = {
    /** id */
    id?: number;
    /** 创建人 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 历史信息 */
    msg?: string;
  };

  type EventOutTimeListParams = {
    records?: Record<string, any>[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    maxLimit?: number;
    countId?: string;
    startTime: string;
    endTime: string;
  };

  type EventOutTimeListVO = {
    /** 事件编号 */
    eventNo?: string;
    /** 事件标题 */
    eventName?: string;
    /** 事件级别 */
    eventLevel?: string;
    /** 发生时间 */
    occurTime?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 处理时长 */
    dealTime?: string;
    /** 状态 */
    status?: number;
    /** 负责人 */
    eventChargePerson?: string;
  };

  type EventParam = {
    /** id */
    id?: number;
    /** 参数id */
    paramId?: number;
    /** 关联的参数信息 */
    name?: string;
  };

  type EventStatiscRankVO = {
    /** id */
    id?: number;
    /** 负责人 */
    charger?: string;
    /** 处理数量 */
    dealNum?: string;
  };

  type EventStatisticsVO = {
    /** 异常事件总数 */
    total?: number;
    /** 已解决数量 */
    resolved?: number;
    /** 已关闭数量 */
    closed?: number;
    /** 改善措施达成率 */
    improveRate?: string;
    /** 事件平均处理时长 */
    eventAverageTimes?: number;
    /** 处理超时事件数量 */
    processTimeOut?: number;
    /** 处理超时率 */
    processTimeOutRate?: string;
    /** 一般事件 */
    generalEvent?: number;
    /** 一般事件（已关闭） */
    unGeneralEvent?: number;
    /** 主要事件 */
    majorEvent?: number;
    /** 主要事件（已关闭） */
    unMajorEvent?: number;
    /** 重要事件 */
    importEvent?: number;
    /** 重要事件（已关闭） */
    unImportEvent?: number;
    /** 紧急事件 */
    emergencyEvent?: number;
    /** 紧急事件（已关闭） */
    unEmergencyEvent?: number;
  };

  type export1Params = {
    alarmRecord: AlarmRecord;
  };

  type exportUsingGETParams = {
    alarmStrategy: AlarmStrategy;
  };

  type getAbnormalCausePageParams = {
    records?: Record<string, any>[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    maxLimit?: number;
    countId?: string;
    /** 唯一主键 */
    id?: string;
    /** 原因名称 */
    causeName?: string;
    /** 排序号 */
    sort?: string;
    /** 是否可用 */
    isActive?: string;
    /** 备注 */
    remark?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新人 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 租户id */
    tenantId?: string;
  };

  type getAbnormalEventAlarmPage1Params = {
    abnormalEventId: number;
  };

  type getAbnormalEventAlarmPage2Params = {
    abnormalEventId: number;
  };

  type getAbnormalEventAlarmPage3Params = {
    abnormalEventId: number;
  };

  type getAbnormalEventAlarmPage4Params = {
    abnormalEventId: number;
  };

  type getAbnormalEventAlarmPage5Params = {
    abnormalEventId: number;
  };

  type getAbnormalEventAlarmPageParams = {
    abnormalEventId: number;
  };

  type getAbnormalEventFilePageParams = {
    abnormalEventId: number;
  };

  type getAbnormalEventPageParams = {
    records?: Record<string, any>[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    maxLimit?: number;
    countId?: string;
    /** 事件编号、事件标题 */
    eventInfo?: string;
    /** 事件类型 */
    eventType?: string;
    /** 事件级别 */
    eventLevel?: string;
    /** 事件状态 */
    status?: string;
    /** 异常原因 */
    cause?: string;
    /** 负责人 */
    eventChargePerson?: string;
    /** 创建人 */
    createUser?: string;
    /** 创建时间(开始) */
    startTime?: string;
    /** 创建时间(结束) */
    endTime?: string;
  };

  type getAlarmRecordPageParams = {
    records?: Record<string, any>[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    maxLimit?: number;
    countId?: string;
    alarmName?: string;
    /** 告警类型 */
    alarmType?: string;
    /** 告警等级 */
    alarmLevel?: string;
    /** 状态 */
    status?: string;
    /** 告警开始时间 */
    startTime?: string;
    /** 告警结束时间 */
    endTime?: string;
    /** 设备名称或参数名称 */
    searchValue?: string;
  };

  type getAlarmStaticsParams = {
    startTime: string;
    endTime: string;
  };

  type getAlarmStrategyPageParams = {
    records?: Record<string, any>[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    maxLimit?: number;
    countId?: string;
    /** 告警策略id */
    id?: string;
    /** 是否可用 */
    isActive?: string;
    /** 告警类型 */
    alarmType?: string;
    /** 告警等级 */
    alarmLevel?: string;
    /** 告警名称 */
    alarmName?: string;
    /** 告警次数 */
    alarmCount?: string;
    /** 告警状态 */
    status?: string;
    /** 推送方式 */
    notifyMethod?: string;
    /** 持续规则次数(事件告警) */
    accumulateCount?: string;
    /** 持续规则时间（事件告警） */
    accumulateTimeDuration?: string;
    /** 持续规则单位（事件告警） */
    accumulateTimeUnit?: string;
    /** 系统提示方式 */
    systemRemindMethod?: string;
    /** 是否自动创建事件 */
    isAutoCreateEvent?: string;
    /** 通讯恢复后是否通知我（通讯告警） */
    isNeedInformRecover?: string;
    /** 无数据上抛时长（通讯告警） */
    offlineTimeDuration?: string;
    /** 无数据上抛时长单位（通讯告警） */
    offlineTimeUnit?: string;
    /** 告警时间(星期*)（越线，变位告警） */
    weekday?: string;
    /** 告警时间段 */
    alarmTimeRanges?: string;
    /** 计算方式：瞬时计算，区间计算（事件告警） */
    timeMode?: string;
    /** 时间间隔 */
    intervalTimeDuration?: string;
    /** 时间间隔单位天，时，分，秒 */
    intervalTimeUnit?: string;
    /** 固定，滑动 */
    intervalType?: string;
    /** 固定间隔开始时间，当上列为固定区间时，填写 */
    fixIntervalStartTime?: string;
    /** 公式配置 html（事件告警） */
    formula?: string;
    /** 公式配置 需要解析的 */
    formulaRemark?: string;
    /** 通知用户 */
    alarmUserIds?: string;
    /** 创建人id */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新人id */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 租户id */
    tenantId?: string;
  };

  type getById1Params = {
    id: number;
  };

  type getById2Params = {
    id: number;
  };

  type getById3Params = {
    id: number;
  };

  type getByIdParams = {
    id: number;
  };

  type getByRecordIdParams = {
    id: number;
  };

  type getElectricityPriceSettingPageParams = {
    records?: Record<string, any>[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    maxLimit?: number;
    countId?: string;
    topParentId: number;
  };

  type getEventStaticsParams = {
    startTime: string;
    endTime: string;
  };

  type getMeterFaultPageParams = {
    records?: Record<string, any>[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    maxLimit?: number;
    countId?: string;
    /** 表记id */
    mesterId?: string;
    /** 区域id */
    areaId?: string;
    /** 厂内编号、表计名称 */
    searchValue?: string;
    /** 管理分类 */
    classification?: string;
    /** 日期（开始时间） */
    startTime?: string;
    /** 日期（结束时间） */
    endTime?: string;
    /** 表计状态，合格，禁用，封存，准用 */
    recStatus?: string;
    /** 故障等级 低0 中1 高2 */
    faultLevel?: string;
    /** 维修人员 */
    repairName?: string;
  };

  type getMeterInspectionPageParams = {
    records?: Record<string, any>[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    maxLimit?: number;
    countId?: string;
    /** 表记id */
    mesterId?: string;
    /** 区域id */
    areaId?: string;
    /** 厂内编号、表计名称 */
    searchValue?: string;
    /** 管理分类 */
    classification?: string;
    /** 校验日期（开始时间） */
    startTime?: string;
    /** 校验日期（结束时间） */
    endTime?: string;
    /** 表计状态，合格，禁用，封存，准用 */
    status?: string;
    /** 有效截至日期（开始时间） */
    expirationStartTime?: string;
    /** 有效截至日期（结束时间） */
    expirationEndTime?: string;
    /** 校准员 */
    inSpectioner?: string;
  };

  type getMeterMaintenancePageParams = {
    records?: Record<string, any>[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    maxLimit?: number;
    countId?: string;
    /** 表记id */
    mesterId?: string;
    /** 区域id */
    areaId?: string;
    /** 厂内编号、表计名称 */
    searchValue?: string;
    /** 管理分类 */
    classification?: string;
    /** 日期（开始时间） */
    startTime?: string;
    /** 日期（结束时间） */
    endTime?: string;
    /** 表计状态，合格，禁用，封存，准用 */
    recStatus?: string;
  };

  type getPreTriggerAlarmParams = {
    type?: string;
  };

  type IPageAbnormalCause = {
    size?: number;
    total?: number;
    current?: number;
    records?: AbnormalCause[];
    pages?: number;
  };

  type IPageAbnormalEvent = {
    size?: number;
    total?: number;
    current?: number;
    records?: AbnormalEvent[];
    pages?: number;
  };

  type IPageAlarmRecordVO = {
    size?: number;
    total?: number;
    current?: number;
    records?: AlarmRecordVO[];
    pages?: number;
  };

  type IPageElectricityPriceSetting = {
    size?: number;
    total?: number;
    current?: number;
    records?: ElectricityPriceSetting[];
    pages?: number;
  };

  type IPageEventOutTimeListVO = {
    size?: number;
    total?: number;
    current?: number;
    records?: EventOutTimeListVO[];
    pages?: number;
  };

  type IPageMeterFaultVO = {
    size?: number;
    total?: number;
    current?: number;
    records?: MeterFaultVO[];
    pages?: number;
  };

  type IPageMeterInspectionVO = {
    size?: number;
    total?: number;
    current?: number;
    records?: MeterInspectionVO[];
    pages?: number;
  };

  type IPageMeterMaintenanceVO = {
    size?: number;
    total?: number;
    current?: number;
    records?: MeterMaintenanceVO[];
    pages?: number;
  };

  type MeterFault = {
    /** 唯一标识 */
    id?: number;
    /** 表记id */
    mesterId?: number;
    /** 故障日期 */
    faultDate?: string;
    /** 故障部位 */
    faultPosition?: string;
    /** 故障描述 */
    faultDescribe?: string;
    /** 一次原因分析 */
    firstReasonAnalysis?: string;
    /** 二次原因分析 */
    secondReasonAnalysis?: string;
    /** 解决对策 */
    faultSolution?: string;
    /** 备件更换记录 */
    replacementRecord?: string;
    /** 维修结果 */
    repairResults?: string;
    /** 维修开始日期 */
    repairStartDate?: string;
    /** 维修结束日期 */
    repairEndDate?: string;
    /** 维修时长 */
    repairDuration?: number;
    /** 停线时长 */
    stopDuration?: number;
    /** 故障等级 低0 中1 高2 */
    faultLevel?: string;
    /** 维修人员 */
    repairName?: string;
    /** 维修编号 */
    repairCode?: string;
    /** 备注 */
    remark?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新人 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 管理分类 */
    classification?: string;
    /** 租户id */
    tenantId?: number;
  };

  type MeterFaultVO = {
    /** id */
    id?: number;
    /** 表记id */
    mesterId?: number;
    /** 故障日期 */
    faultDate?: string;
    /** 故障部位 */
    faultPosition?: string;
    /** 故障描述 */
    faultDescribe?: string;
    /** 一次原因分析 */
    firstReasonAnalysis?: string;
    /** 二次原因分析 */
    secondReasonAnalysis?: string;
    /** 解决对策 */
    faultSolution?: string;
    /** 备件更换记录 */
    replacementRecord?: string;
    /** 维修结果 */
    repairResults?: string;
    /** 维修开始日期 */
    repairStartDate?: string;
    /** 维修结束日期 */
    repairEndDate?: string;
    /** 维修时长 */
    repairDuration?: number;
    /** 停线时长 */
    stopDuration?: number;
    /** 故障等级 低0 中1 高2 */
    faultLevel?: string;
    /** 维修人员 */
    repairName?: string;
    /** 维修编号 */
    repairCode?: string;
    /** 备注 */
    remark?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新人 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 管理分类 */
    classification?: string;
    /** 租户id */
    tenantId?: number;
    lineNum?: number;
    /** 厂内编号 */
    deviceMark?: string;
    /** 表计名称 */
    deviceName?: string;
    /** 型号 */
    model?: string;
  };

  type MeterInspection = {
    /** 唯一标识 */
    id?: number;
    /** 表记id */
    mesterId?: number;
    /** 状态 */
    status?: string;
    /** 证书编号 */
    certificateNumber?: string;
    /** 校验依据 */
    inspectionBasis?: string;
    /** 校验结论 */
    inspectionConclusion?: string;
    /** 校验员 */
    inspectorsName?: string;
    /** 校验时间 */
    inspectionTime?: string;
    /** 校验单位 */
    inspectionUnitName?: string;
    /** 文件名称 */
    fileName?: string;
    /** 文件地址 */
    fileUrl?: string;
    /** 备注 */
    remark?: string;
    /** 有效日期 */
    expirationTime?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新人 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 管理分类 */
    classification?: string;
    /** 租户id */
    tenantId?: number;
  };

  type MeterInspectionVO = {
    /** id */
    id?: number;
    /** 表记id */
    mesterId?: number;
    /** 表计状态 */
    status?: string;
    /** 证书编号 */
    certificateNumber?: string;
    /** 校验依据 */
    inspectionBasis?: string;
    /** 校验结论 */
    inspectionConclusion?: string;
    /** 校验员 */
    inspectorsName?: string;
    /** 校验时间 */
    inspectionTime?: string;
    /** 校验单位 */
    inspectionUnitName?: string;
    /** 文件名称 */
    fileName?: string;
    /** 文件地址 */
    fileUrl?: string;
    /** 备注 */
    remark?: string;
    /** 有效日期 */
    expirationTime?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新人 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 管理分类 */
    classification?: string;
    /** 租户id */
    tenantId?: number;
    lineNum?: number;
    /** 厂内编号 */
    deviceMark?: string;
    /** 表计名称 */
    deviceName?: string;
    /** 型号 */
    model?: string;
    /** 规格 */
    specification?: string;
    /** 准确度等级 */
    level?: string;
    /** 校准员 */
    inSpectioner?: string;
  };

  type MeterMaintenance = {
    /** 唯一标识 */
    id?: number;
    /** 表记id */
    mesterId?: number;
    /** 保养位置 */
    maintenancePosition?: string;
    /** 保养项目 */
    maintenanceProgram?: string;
    /** 保养人编号 */
    maintenancePersonCode?: string;
    /** 备件更换记录 */
    replacementRecord?: string;
    /** 保养开始日期 */
    maintenanceStartDate?: string;
    /** 保养结束日期 */
    maintenanceEndDate?: string;
    /** 备注 */
    remark?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新人 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 管理分类 */
    classification?: string;
    /** 租户id */
    tenantId?: number;
  };

  type MeterMaintenanceVO = {
    /** 唯一标识 */
    id?: number;
    /** 表记id */
    mesterId?: number;
    /** 保养位置 */
    maintenancePosition?: string;
    /** 保养项目 */
    maintenanceProgram?: string;
    /** 保养人编号 */
    maintenancePersonCode?: string;
    /** 备件更换记录 */
    replacementRecord?: string;
    /** 保养开始日期 */
    maintenanceStartDate?: string;
    /** 保养结束日期 */
    maintenanceEndDate?: string;
    /** 备注 */
    remark?: string;
    /** 创建人 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新人 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 管理分类 */
    classification?: string;
    /** 租户id */
    tenantId?: number;
    /** 厂内编号 */
    deviceMark?: string;
    /** 表计名称 */
    deviceName?: string;
  };

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type R = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    /** 数据 */
    data?: Record<string, any>;
  };

  type RAbnormalCause = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    data?: AbnormalCause;
  };

  type RAbnormalEventDetailVO = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    data?: AbnormalEventDetailVO;
  };

  type RAbnormalEventStatisticsVO = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    data?: AbnormalEventStatisticsVO;
  };

  type RAlarmRecord = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    data?: AlarmRecord;
  };

  type RAlarmStaticsVO = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    data?: AlarmStaticsVO;
  };

  type RAlarmStrategyDTO = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    data?: AlarmStrategyDTO;
  };

  type RBoolean = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    /** 数据 */
    data?: boolean;
  };

  type RecordRemoveAlarmDTO = {
    ids?: number[];
    msg?: string;
  };

  type RelationPoint = {
    /** A 当前值，B前值 */
    type?: string;
    name?: string;
    value?: string;
  };

  type RElectricityPriceSetting = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    data?: ElectricityPriceSetting;
  };

  type REventAlarmInfoDTO = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    data?: EventAlarmInfoDTO;
  };

  type REventStatisticsVO = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    data?: EventStatisticsVO;
  };

  type RIPageAbnormalCause = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    data?: IPageAbnormalCause;
  };

  type RIPageAbnormalEvent = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    data?: IPageAbnormalEvent;
  };

  type RIPageAlarmRecordVO = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    data?: IPageAlarmRecordVO;
  };

  type RIPageElectricityPriceSetting = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    data?: IPageElectricityPriceSetting;
  };

  type RIPageEventOutTimeListVO = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    data?: IPageEventOutTimeListVO;
  };

  type RIPageMeterFaultVO = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    data?: IPageMeterFaultVO;
  };

  type RIPageMeterInspectionVO = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    data?: IPageMeterInspectionVO;
  };

  type RIPageMeterMaintenanceVO = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    data?: IPageMeterMaintenanceVO;
  };

  type RListAbnormalCause = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    /** 数据 */
    data?: AbnormalCause[];
  };

  type RListAbnormalEventFileVO = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    /** 数据 */
    data?: AbnormalEventFileVO[];
  };

  type RListAbnormalEventStatisticsCauseVO = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    /** 数据 */
    data?: AbnormalEventStatisticsCauseVO[];
  };

  type RListAbnormalEventStatisticsDateVO = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    /** 数据 */
    data?: AbnormalEventStatisticsDateVO[];
  };

  type RListAlarmInfoDTO = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    /** 数据 */
    data?: AlarmInfoDTO[];
  };

  type RListAlarmStaticsRankVO = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    /** 数据 */
    data?: AlarmStaticsRankVO[];
  };

  type RListElectricityPriceSetting = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    /** 数据 */
    data?: ElectricityPriceSetting[];
  };

  type RListEventAction = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    /** 数据 */
    data?: EventAction[];
  };

  type RListEventAlarm = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    /** 数据 */
    data?: EventAlarm[];
  };

  type RListEventComment = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    /** 数据 */
    data?: EventComment[];
  };

  type RListEventDevice = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    /** 数据 */
    data?: EventDevice[];
  };

  type RListEventHistory = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    /** 数据 */
    data?: EventHistory[];
  };

  type RListEventParam = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    /** 数据 */
    data?: EventParam[];
  };

  type RListEventStatiscRankVO = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    /** 数据 */
    data?: EventStatiscRankVO[];
  };

  type RLong = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    /** 数据 */
    data?: number;
  };

  type RMapStringObject = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    /** 数据 */
    data?: Record<string, any>;
  };

  type RMeterFaultVO = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    data?: MeterFaultVO;
  };

  type RMeterInspectionVO = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    data?: MeterInspectionVO;
  };

  type RMeterMaintenanceVO = {
    /** 返回标记：成功标记=0，失败标记=1 */
    code?: number;
    /** 返回信息 */
    msg?: string;
    data?: MeterMaintenanceVO;
  };

  type save7Params = {
    abnormalEventId: number;
  };

  type selectEventRankParams = {
    startTime: string;
    endTime: string;
  };

  type selectRankParams = {
    startTime: string;
    endTime: string;
  };

  type statisticsByCauseParams = {
    startTime: string;
    endTime: string;
  };

  type statisticsByDateParams = {
    startTime: string;
    endTime: string;
  };

  type triggerAbnormalEventParams = {
    id: number;
  };
}
