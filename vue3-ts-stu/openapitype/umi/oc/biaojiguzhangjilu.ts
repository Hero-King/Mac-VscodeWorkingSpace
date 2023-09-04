// @ts-ignore
/* eslint-disable */
import request from '/@/utils/request';

/** 新增故障记录 新增故障记录 POST /ocMeterFault */
export async function save2(body: API.MeterFault, options?: { [key: string]: any }) {
  return request<API.RBoolean>('/ocMeterFault', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过id删除故障记录 通过id删除故障记录 DELETE /ocMeterFault */
export async function removeById2(body: number[], options?: { [key: string]: any }) {
  return request<API.RBoolean>('/ocMeterFault', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询详情 查询详情 GET /ocMeterFault/detail */
export async function detail2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detail2Params,
  options?: { [key: string]: any },
) {
  return request<API.RMeterFaultVO>('/ocMeterFault/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /ocMeterFault/import */
export async function importRole1(body: API.MeterFaultVO[], options?: { [key: string]: any }) {
  return request<API.RMeterFaultVO>('/ocMeterFault/import', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页查询 分页查询 GET /ocMeterFault/page */
export async function getMeterFaultPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMeterFaultPageParams,
  options?: { [key: string]: any },
) {
  return request<API.RIPageMeterFaultVO>('/ocMeterFault/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 上传 上传 POST /ocMeterFault/upload */
export async function upload2(body: {}, options?: { [key: string]: any }) {
  return request<API.RMapStringObject>('/ocMeterFault/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
