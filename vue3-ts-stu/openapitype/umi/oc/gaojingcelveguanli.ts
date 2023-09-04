// @ts-ignore
/* eslint-disable */
import request from '/@/utils/request';

/** 新增/修改告警策略 新增/修改告警策略 POST /ocAlarmStrategy */
export async function saveOrUpdate1(body: API.AlarmStrategyDTO, options?: { [key: string]: any }) {
  return request<API.R>('/ocAlarmStrategy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过id删除告警策略 通过id删除告警策略 DELETE /ocAlarmStrategy */
export async function removeById3(body: number[], options?: { [key: string]: any }) {
  return request<API.R>('/ocAlarmStrategy', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过id查询 通过id查询 GET /ocAlarmStrategy/${param0} */
export async function getById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.RAlarmStrategyDTO>(`/ocAlarmStrategy/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /ocAlarmStrategy/export */
export async function exportUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.AlarmStrategy[]>('/ocAlarmStrategy/export', {
    method: 'GET',
    params: {
      ...params,
      alarmStrategy: undefined,
      ...params['alarmStrategy'],
    },
    ...(options || {}),
  });
}

/** 测试事件告警测试使用 测试事件告警测试使用 GET /ocAlarmStrategy/getEventTestA */
export async function getEventTest(options?: { [key: string]: any }) {
  return request<API.REventAlarmInfoDTO>('/ocAlarmStrategy/getEventTestA', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取具备触发告警策略的设备信息 获取具备触发告警策略的设备信息 GET /ocAlarmStrategy/getPreTriggerAlarm */
export async function getPreTriggerAlarm(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPreTriggerAlarmParams,
  options?: { [key: string]: any },
) {
  return request<API.RListAlarmInfoDTO>('/ocAlarmStrategy/getPreTriggerAlarm', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 测试通讯告警测试使用 测试通讯告警测试使用 GET /ocAlarmStrategy/getTxTest */
export async function getTxTest(options?: { [key: string]: any }) {
  return request<API.RListAlarmInfoDTO>('/ocAlarmStrategy/getTxTest', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 分页查询 分页查询 GET /ocAlarmStrategy/page */
export async function getAlarmStrategyPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAlarmStrategyPageParams,
  options?: { [key: string]: any },
) {
  return request<API.R>('/ocAlarmStrategy/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 触发异常事件 通过告警策略id触发异常事件 POST /ocAlarmStrategy/triggerAbnormalEvent */
export async function triggerAbnormalEvent(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.triggerAbnormalEventParams,
  options?: { [key: string]: any },
) {
  return request<API.RBoolean>('/ocAlarmStrategy/triggerAbnormalEvent', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
