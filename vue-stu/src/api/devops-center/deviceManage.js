import axios, { get, post, put, del } from '@/utils/request'
const system = {
  baseUrl: '/cms-cloud-front',
  baseApi: '/api/cms-cloud-service',
  businessApi: '/api/business'
}

export function uploadDeviceImg(params) {
  return post(`${system.baseApi}/deviceBook/fileUpload`, params)
}

// 根据locationId查询挂载的设备列表
export function queryDeviceListByLocationId(params) {
  return post(`${system.baseApi}/deviceBook/selectListBylocationId`, params)
}

// 按类型分类设备树
export function queryDeviceGroupData(params) {
  return get(`${system.baseApi}/deviceBook/queryDeviceGroupData`, params)
}

// 设备Id和设备图片关联
export function resourceRelationDevice(params) {
  return axios(`${system.baseApi}/deviceBook/resourceRelationDevice`, { method: 'POST', params })
}

export function exportDeviceList(params) {
  return post(`${system.baseApi}/deviceBook/exportDeviceList`, params)
}

// 获取设备数
export function getTreeQuery(params) {
  return post(system.baseApi+'/locationTree/query', params)
}

export function getNoCacheTopParent(params) {
  return post(system.baseApi+'/locationTree/queryNoCacheTopParent', params)
}

// 获取暖通设备概览详情实时数据
export function queryDeviceParamLastData (data) {
  return post(system.baseApi+'/deviceParamInfo/queryDeviceParamLastData', data)
}

// 保存设备
export function saveDevice (data) {
  return post(system.businessApi+'/device/saveDevice', data)
}
// 设备参数信息列表
export function getDeviceParamInfo (data) {
  return post(system.businessApi+'/device/deviceParamInfoList', data)
}
