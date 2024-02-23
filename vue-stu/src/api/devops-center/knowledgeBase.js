import { get, post, put, del } from '@/utils/request'
import { system } from './systemConfig'

// 查询运维记录分页列表
export const selectRecordPageList = (params) => {
  return post(`${system.baseApi}/maintainKnowledge/selectRecordPageList`, params)
}
// 查询标准知识库类型
export const selectBaseType = (params) => {
  return get(`${system.baseApi}/maintainKnowledge/selectBaseType`, params)
}
// 查询标准知识库分页列表
export const selectBasePageList = (params) => {
  return post(`${system.baseApi}/maintainKnowledge/selectBasePageList`, params)
}
// 新增标准知识库
export const insertKnowledge = (params) => {
  return post(`${system.baseApi}/maintainKnowledge/insertOrUpdateKnowledge`, params)
}
// 新增标准知识库类型
export const insertBaseType = (params) => {
  return post(`${system.baseApi}/maintainKnowledge/insertBaseType`, params)
}
// 查询知识图谱
export const selectGraphTopology = (params) => {
  return post(`${system.baseApi}/maintainKnowledge/selectGraphTopology`, params)
}
// 级联查询类型
export const selectRealType = (params) => {
  return post(`${system.baseApi}/maintainKnowledge/selectRealType`, params)
}
