// @ts-ignore
/* eslint-disable */
import request from '/@/utils/request';

/** 新增/修改电价设置 新增/修改电价设置 POST /ocElectricityPrice */
export async function saveOrUpdate(
  body: API.ElectricityPriceSetting,
  options?: { [key: string]: any },
) {
  return request<API.RBoolean>('/ocElectricityPrice', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id查询详情 根据id查询详情 GET /ocElectricityPrice/detail */
export async function detail3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detail3Params,
  options?: { [key: string]: any },
) {
  return request<API.RElectricityPriceSetting>('/ocElectricityPrice/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据年月查询电价设置 根据年月查询电价设置 POST /ocElectricityPrice/listByYm */
export async function listByYm(body: string[], options?: { [key: string]: any }) {
  return request<API.RListElectricityPriceSetting>('/ocElectricityPrice/listByYm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 电价设置分页查询 电价设置分页查询 GET /ocElectricityPrice/page */
export async function getElectricityPriceSettingPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getElectricityPriceSettingPageParams,
  options?: { [key: string]: any },
) {
  return request<API.RIPageElectricityPriceSetting>('/ocElectricityPrice/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
