import { bigScreenAppApiWrapper } from './deliveryMonitor'

//
export const queryType = (param) => {
  return bigScreenAppApiWrapper({
    url: '/dws/api/production/efficiency/query',
    param
  })
}

// 近12月生产趋势
export const getEfficiencyTrend = (param) => {
  return bigScreenAppApiWrapper({
    url: '/dws/api/production/efficiency/total',
    param
  })
}

// 近12月综合良率&OEE趋势
export const getRecentlyYieldOee = (param) => {
  return bigScreenAppApiWrapper({
    url: '/dws/api/production/efficiency/totalyieldoee',
    param
  })
}

// 瓶颈工序监控趋势
export const getEfficiencyBottleneck = (param) => {
  return bigScreenAppApiWrapper({
    url: '/dws/api/production/efficiency/pj_procedure',
    param
  })
}

// 工序步骤
export const getEfficiencyStep = (param) => {
  return bigScreenAppApiWrapper({
    url: '/dws/api/production/efficiency/procedure',
    param
  })
}
/**
 * 
/dws/api/production/efficiency/procedure 这个接口，总共返回：
1：procedure_code,工序编码
2：good_rate_parent: 综合良率，保留00.0%
3：oee_oee：实际OEE，保留00.0%
4：good_rate_parent_lm：上月综合良率；
  为计算环比使用：环比=（本月-上月）/上月 = (good_rate_parent-good_rate_parent_lm)/good_rate_parent_lm --这个和今天说的有点变化，你看下是否好处理，不行的话，我接口里写好
5：oee_oee_lm,上月OEE，
  为计算环比使用：环比=（本月-上月）/上月 = (oee_oee-oee_oee_lm)/oee_oee_lm
6:act_jp:实际节拍，保留整数就行
7:theory_jp：理论节拍，保留整数就行
 */
