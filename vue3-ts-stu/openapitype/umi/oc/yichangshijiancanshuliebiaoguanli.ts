// @ts-ignore
/* eslint-disable */
import request from '/@/utils/request';

/** 异常事件-关联参数列表 异常事件-关联参数列表 POST /abnormalEventParam */
export async function save5(body: API.AbnormalEventParamDTO, options?: { [key: string]: any }) {
  return request<API.RBoolean>('/abnormalEventParam', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过id删除异常事件-参数列表 通过id删除异常事件-参数列表 DELETE /abnormalEventParam */
export async function removeById4(
  body: API.AbnormalEventParamDTO,
  options?: { [key: string]: any },
) {
  return request<API.RBoolean>('/abnormalEventParam', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据异常事件id查询列表 根据异常事件id查询列表 GET /abnormalEventParam/list */
export async function getAbnormalEventAlarmPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAbnormalEventAlarmPageParams,
  options?: { [key: string]: any },
) {
  return request<API.RListEventParam>('/abnormalEventParam/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
