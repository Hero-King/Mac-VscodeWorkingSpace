// @ts-ignore
/* eslint-disable */
import request from '/@/utils/request';

/** 新增异常事件-附件列表 新增异常事件-附件列表 POST /abnormalEventFile */
export async function save7(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.save7Params,
  body: {},
  options?: { [key: string]: any },
) {
  return request<API.RBoolean>('/abnormalEventFile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过id删除异常事件-附件列表 通过id删除异常事件-附件列表 DELETE /abnormalEventFile */
export async function removeById6(body: number[], options?: { [key: string]: any }) {
  return request<API.RBoolean>('/abnormalEventFile', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据异常事件id查询列表 根据异常事件id查询列表 GET /abnormalEventFile/list */
export async function getAbnormalEventFilePage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAbnormalEventFilePageParams,
  options?: { [key: string]: any },
) {
  return request<API.RListAbnormalEventFileVO>('/abnormalEventFile/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
