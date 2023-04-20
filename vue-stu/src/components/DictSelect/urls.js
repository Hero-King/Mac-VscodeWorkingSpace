const system = {
  baseUrl: '/cms-cloud-front',
  baseApi: '/api/cms-cloud-service',
  businessApi: '/api/business'
}

export const factorySelectUrl = system.baseApi + '/locationTree/queryCacheAllTop'
export const deviceTypeListUrl = system.businessApi + '/hvDeviceInfo/deviceTypeList'
export const queryWorkPlanTypeUrl = system.baseApi + '/workPlan/qurryWorkPlanType'
export const locationTreeUrl = system.baseApi + '/locationTree/queryNoCacheTopParent'
export const selectBaseTypeUrl = system.baseApi + '/maintainKnowledge/selectBaseType'

export const newUploadUrl = system.businessApi + '/file/newUpload'

// 导出URL
export const exportWorkPlanUrl = system.baseApi + '/workPlan/exportWorkPlan'
export const exportWorkloadUrl = system.baseApi + '/workPlan/exportWorkload'
export const exportPageListUrl = system.baseApi + '/maintainKnowledge/exportPageList'
export const exportGraphTopologyUrl = system.baseApi + '/maintainKnowledge/exportGraphTopology'
