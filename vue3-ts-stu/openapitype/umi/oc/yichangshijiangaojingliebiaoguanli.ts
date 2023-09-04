// @ts-ignore
/* eslint-disable */
import request from '/@/utils/request';

/** 异常事件-关联告警 异常事件-关联告警 POST /abnormalEventAlarm */
export async function save10(body: API.AbnormalEventAlarmDTO, options?: { [key: string]: any }) {
  return request<API.RBoolean>('/abnormalEventAlarm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过id删除异常事件-告警列表 通过id删除异常事件-告警列表 DELETE /abnormalEventAlarm */
export async function removeById9(
  body: API.AbnormalEventAlarmDTO,
  options?: { [key: string]: any },
) {
  return request<API.RBoolean>('/abnormalEventAlarm', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据异常事件id查询列表 根据异常事件id查询列表 GET /abnormalEventAlarm/list */
export async function getAbnormalEventAlarmPage4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAbnormalEventAlarmPage4Params,
  options?: { [key: string]: any },
) {
  return request<API.RListEventAlarm>('/abnormalEventAlarm/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
