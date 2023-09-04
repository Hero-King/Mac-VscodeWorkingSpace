// @ts-ignore
/* eslint-disable */
import request from '/@/utils/request';

/** 修改异常原因 修改异常原因 PUT /abnormalCause */
export async function updateById2(body: API.AbnormalCause, options?: { [key: string]: any }) {
  return request<API.RBoolean>('/abnormalCause', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增异常原因 新增异常原因 POST /abnormalCause */
export async function save11(body: API.AbnormalCause, options?: { [key: string]: any }) {
  return request<API.RBoolean>('/abnormalCause', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过id删除异常原因 通过id删除异常原因 DELETE /abnormalCause */
export async function removeById10(body: number[], options?: { [key: string]: any }) {
  return request<API.RBoolean>('/abnormalCause', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过id查询 通过id查询 GET /abnormalCause/${param0} */
export async function getById3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getById3Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.RAbnormalCause>(`/abnormalCause/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 启用 启用 PUT /abnormalCause/enable */
export async function enable(body: number[], options?: { [key: string]: any }) {
  return request<API.RBoolean>('/abnormalCause/enable', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 禁用 禁用 PUT /abnormalCause/forbidden */
export async function forbidden1(body: number[], options?: { [key: string]: any }) {
  return request<API.RBoolean>('/abnormalCause/forbidden', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 异常原因列表 异常原因列表 GET /abnormalCause/list */
export async function getList(options?: { [key: string]: any }) {
  return request<API.RListAbnormalCause>('/abnormalCause/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 分页查询 分页查询 GET /abnormalCause/page */
export async function getAbnormalCausePage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAbnormalCausePageParams,
  options?: { [key: string]: any },
) {
  return request<API.RIPageAbnormalCause>('/abnormalCause/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
