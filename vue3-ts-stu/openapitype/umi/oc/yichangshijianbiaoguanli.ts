// @ts-ignore
/* eslint-disable */
import request from '/@/utils/request';

/** 修改异常事件表 修改异常事件表 PUT /abnormalEvent */
export async function updateById1(body: API.AbnormalEvent, options?: { [key: string]: any }) {
  return request<API.RBoolean>('/abnormalEvent', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增异常事件表 新增异常事件表 POST /abnormalEvent */
export async function save4(body: API.AbnormalEvent, options?: { [key: string]: any }) {
  return request<API.RLong>('/abnormalEvent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过id查询 通过id查询 GET /abnormalEvent/${param0} */
export async function getById2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getById2Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.RAbnormalEventDetailVO>(`/abnormalEvent/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 关闭 关闭 PUT /abnormalEvent/close */
export async function close(body: API.AbnormalEvent, options?: { [key: string]: any }) {
  return request<API.RBoolean>('/abnormalEvent/close', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 事件处理排名 事件处理排名 GET /abnormalEvent/eventrank */
export async function selectEventRank(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.selectEventRankParams,
  options?: { [key: string]: any },
) {
  return request<API.RListEventStatiscRankVO>('/abnormalEvent/eventrank', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 跟进 跟进 PUT /abnormalEvent/follow */
export async function follow(body: API.AbnormalEvent, options?: { [key: string]: any }) {
  return request<API.RBoolean>('/abnormalEvent/follow', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据告警记录新增异常事件(查询异常事件信息) 根据告警记录新增异常事件(查询异常事件信息) GET /abnormalEvent/getByRecordId */
export async function getByRecordId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByRecordIdParams,
  options?: { [key: string]: any },
) {
  return request<API.RAbnormalEventDetailVO>('/abnormalEvent/getByRecordId', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询超时事件列表 查询超时事件列表 GET /abnormalEvent/listouttimeevent */
export async function EventOutTimeList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.EventOutTimeListParams,
  options?: { [key: string]: any },
) {
  return request<API.RIPageEventOutTimeListVO>('/abnormalEvent/listouttimeevent', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询 分页查询 GET /abnormalEvent/page */
export async function getAbnormalEventPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAbnormalEventPageParams,
  options?: { [key: string]: any },
) {
  return request<API.RIPageAbnormalEvent>('/abnormalEvent/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 重新打开 重新打开 PUT /abnormalEvent/reopen */
export async function reopen(body: API.AbnormalEvent, options?: { [key: string]: any }) {
  return request<API.RBoolean>('/abnormalEvent/reopen', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 解决 解决 PUT /abnormalEvent/resolve */
export async function resolve(body: API.AbnormalEvent, options?: { [key: string]: any }) {
  return request<API.RBoolean>('/abnormalEvent/resolve', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 异常事件统计 异常事件统计 GET /abnormalEvent/staticsabnormalevent */
export async function getEventStatics(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getEventStaticsParams,
  options?: { [key: string]: any },
) {
  return request<API.REventStatisticsVO>('/abnormalEvent/staticsabnormalevent', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 事件统计 事件统计 GET /abnormalEvent/statistics */
export async function statistics(options?: { [key: string]: any }) {
  return request<API.RAbnormalEventStatisticsVO>('/abnormalEvent/statistics', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 原因帕累托图 GET /abnormalEvent/statisticsByCause */
export async function statisticsByCause(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.statisticsByCauseParams,
  options?: { [key: string]: any },
) {
  return request<API.RListAbnormalEventStatisticsCauseVO>('/abnormalEvent/statisticsByCause', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 按时间统计 按时间统计 GET /abnormalEvent/statisticsByDate */
export async function statisticsByDate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.statisticsByDateParams,
  options?: { [key: string]: any },
) {
  return request<API.RListAbnormalEventStatisticsDateVO>('/abnormalEvent/statisticsByDate', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
