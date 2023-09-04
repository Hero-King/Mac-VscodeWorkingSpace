// @ts-ignore
/* eslint-disable */
import request from '/@/utils/request';

/** 新增检定记录 新增检定记录 POST /ocMeterInspection */
export async function save1(body: API.MeterInspection, options?: { [key: string]: any }) {
  return request<API.RBoolean>('/ocMeterInspection', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过id删除检定管理记录 通过id删除检定管理记录 DELETE /ocMeterInspection */
export async function removeById1(body: number[], options?: { [key: string]: any }) {
  return request<API.RBoolean>('/ocMeterInspection', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询详情 查询详情 GET /ocMeterInspection/detail */
export async function detail1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detail1Params,
  options?: { [key: string]: any },
) {
  return request<API.RMeterInspectionVO>('/ocMeterInspection/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /ocMeterInspection/import */
export async function importRole(body: API.MeterInspectionVO[], options?: { [key: string]: any }) {
  return request<API.RMeterInspectionVO>('/ocMeterInspection/import', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 分页查询 分页查询 GET /ocMeterInspection/page */
export async function getMeterInspectionPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMeterInspectionPageParams,
  options?: { [key: string]: any },
) {
  return request<API.RIPageMeterInspectionVO>('/ocMeterInspection/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 上传 上传 POST /ocMeterInspection/upload */
export async function upload1(body: {}, options?: { [key: string]: any }) {
  return request<API.RMapStringObject>('/ocMeterInspection/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
