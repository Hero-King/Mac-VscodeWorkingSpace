// @ts-ignore
/* eslint-disable */
import request from '/@/utils/request';

/** 修改告警记录 修改告警记录 PUT /alarmRecord */
export async function updateById(body: API.AlarmRecord, options?: { [key: string]: any }) {
  return request<API.RBoolean>('/alarmRecord', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增告警记录 新增告警记录 POST /alarmRecord */
export async function save3(body: API.AlarmRecord, options?: { [key: string]: any }) {
  return request<API.RBoolean>('/alarmRecord', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过id查询 通过id查询 GET /alarmRecord/${param0} */
export async function getById1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getById1Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.RAlarmRecord>(`/alarmRecord/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 恢复告警 恢复告警 PUT /alarmRecord/alarm */
export async function alarm(body: number[], options?: { [key: string]: any }) {
  return request<API.RBoolean>('/alarmRecord/alarm', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 取消搁置 取消搁置 PUT /alarmRecord/cancelAside */
export async function cancelAside(body: number[], options?: { [key: string]: any }) {
  return request<API.RBoolean>('/alarmRecord/cancelAside', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /alarmRecord/export */
export async function export1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.export1Params,
  options?: { [key: string]: any },
) {
  return request<API.AlarmRecord[]>('/alarmRecord/export', {
    method: 'GET',
    params: {
      ...params,
      alarmRecord: undefined,
      ...params['alarmRecord'],
    },
    ...(options || {}),
  });
}

/** 禁用告警 禁用告警 PUT /alarmRecord/forbidden */
export async function forbidden(body: number[], options?: { [key: string]: any }) {
  return request<API.RBoolean>('/alarmRecord/forbidden', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 搁置 搁置 PUT /alarmRecord/layAside */
export async function layAside(body: number[], options?: { [key: string]: any }) {
  return request<API.RBoolean>('/alarmRecord/layAside', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页查询 分页查询 GET /alarmRecord/page */
export async function getAlarmRecordPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAlarmRecordPageParams,
  options?: { [key: string]: any },
) {
  return request<API.RIPageAlarmRecordVO>('/alarmRecord/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 解除告警 解除告警 PUT /alarmRecord/removeAlarm */
export async function removeAlarm(
  body: API.RecordRemoveAlarmDTO,
  options?: { [key: string]: any },
) {
  return request<API.RBoolean>('/alarmRecord/removeAlarm', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量新增告警记录 批量新增告警记录 POST /alarmRecord/saveBatchOfIn */
export async function saveBatchOfIn(body: API.AlarmRecord[], options?: { [key: string]: any }) {
  return request<API.RBoolean>('/alarmRecord/saveBatchOfIn', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 告警处理排名 告警处理排名 GET /alarmRecord/selectrank */
export async function selectRank(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.selectRankParams,
  options?: { [key: string]: any },
) {
  return request<API.RListAlarmStaticsRankVO>('/alarmRecord/selectrank', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 告警数据统计 告警数据统计 GET /alarmRecord/staticsalarm */
export async function getAlarmStatics(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAlarmStaticsParams,
  options?: { [key: string]: any },
) {
  return request<API.RAlarmStaticsVO>('/alarmRecord/staticsalarm', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
