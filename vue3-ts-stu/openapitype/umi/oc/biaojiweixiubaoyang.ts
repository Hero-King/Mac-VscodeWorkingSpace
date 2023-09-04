// @ts-ignore
/* eslint-disable */
import request from '/@/utils/request';

/** 新增维护保养记录 新增维护保养记录 POST /ocMeterMaintenance */
export async function save(body: API.MeterMaintenance, options?: { [key: string]: any }) {
  return request<API.RBoolean>('/ocMeterMaintenance', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过id删除维护保养记录 通过id删除维护保养记录 DELETE /ocMeterMaintenance */
export async function removeById(body: number[], options?: { [key: string]: any }) {
  return request<API.RBoolean>('/ocMeterMaintenance', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询详情 查询详情 GET /ocMeterMaintenance/detail */
export async function detail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detailParams,
  options?: { [key: string]: any },
) {
  return request<API.RMeterMaintenanceVO>('/ocMeterMaintenance/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询 分页查询 GET /ocMeterMaintenance/page */
export async function getMeterMaintenancePage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMeterMaintenancePageParams,
  options?: { [key: string]: any },
) {
  return request<API.RIPageMeterMaintenanceVO>('/ocMeterMaintenance/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 上传 上传 POST /ocMeterMaintenance/upload */
export async function upload(body: {}, options?: { [key: string]: any }) {
  return request<API.RMapStringObject>('/ocMeterMaintenance/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
