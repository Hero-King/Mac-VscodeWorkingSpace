import { get, post, put, del } from '@/utils/request'
import { system } from './systemConfig'

// 工单总体数量
export function workPlanGlobalStatistic(params) {
  return post(`${system.baseApi}/workPlan/workPlanGlobalStatistic`, params)
}

// 工单类型分布
export function workPlanTypeDistribution(params) {
  return post(`${system.baseApi}/workPlan/workPlanTypeDistribution`, params)
}

// 工单统计
export function workPlanStatistics(params) {
  return post(`${system.baseApi}/workPlan/workPlanStatistics`, params)
}

// 工单类型
export function queryWorkPlanType(params) {
  return post(`${system.baseApi}/workPlan/qurryWorkPlanType`, params)
}

// 工单类型编辑
export function editWorkPlanType(params) {
  return post(`${system.baseApi}/workPlan/maintainWorkPlanType`, params)
}

// 工单查询
export function qurryWorkPlan(params) {
  return post(`${system.baseApi}/workPlan/qurryWorkPlan`, params)
}

// 工作量查询
export function queryWorkload(params) {
  return post(`${system.baseApi}/workPlan/queryWorkload`, params)
}

// 我的工单统计
export function myWorkPlanCount(params) {
  return post(`${system.baseApi}/workPlan/myWorkPlanCount`, params)
}

// 我的工单类型查询
export function queryMyWorkPlan(params) {
  return post(`${system.baseApi}/workPlan/qurryMyWorkPlan`, params)
}

// 创建
export function createWorkPlan(params) {
  return post(`${system.baseApi}/workPlan/createWorkPlan`, params)
}

// 催办
export function pressToDo(params) {
  return post(`${system.baseApi}/workPlan/pressToDo`, params)
}

// 撤回
export function review(params) {
  return post(`${system.baseApi}/workPlan/review`, params)
}

export function workPlanDetails(params) {
  return post(`${system.baseApi}/workPlan/workPlanDetails`, params)
}

// 工单指派
export const appointWorkPlanUrl = system.baseApi + '/workPlan/appointWorkPlan'
export const rejectWorkPlanUrl = system.baseApi + '/workPlan/rejectWorkPlan'
export const detailsEntryWorkPlanUrl = system.baseApi + '/workPlan/detailsEntryWorkPlan'
export const confirmWorkPlanUrl = system.baseApi + '/workPlan/confirmWorkPlan'
export const knowledgeBaseWorkPlanUrl = system.baseApi + '/workPlan/knowledgeBaseWorkPlan'
export const permissionListUrl = system.baseApi + '/workPlan/permissionList'
export const newUploadUrl = system.businessApi + '/file/newUpload'
