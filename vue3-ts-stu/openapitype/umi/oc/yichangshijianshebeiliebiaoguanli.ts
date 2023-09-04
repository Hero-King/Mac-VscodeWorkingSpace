// @ts-ignore
/* eslint-disable */
import request from '/@/utils/request';

/** 异常事件-关联设备列表 异常事件-关联设备列表 POST /abnormalEventDevice */
export async function save8(body: API.AbnormalEventDeviceDTO, options?: { [key: string]: any }) {
  return request<API.RBoolean>('/abnormalEventDevice', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过id删除异常事件-设备列表 通过id删除异常事件-设备列表 DELETE /abnormalEventDevice */
export async function removeById7(
  body: API.AbnormalEventDeviceDTO,
  options?: { [key: string]: any },
) {
  return request<API.RBoolean>('/abnormalEventDevice', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据异常事件id查询列表 根据异常事件id查询列表 GET /abnormalEventDevice/list */
export async function getAbnormalEventAlarmPage2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAbnormalEventAlarmPage2Params,
  options?: { [key: string]: any },
) {
  return request<API.RListEventDevice>('/abnormalEventDevice/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
