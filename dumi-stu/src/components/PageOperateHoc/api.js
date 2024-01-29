import httpUtils from "../../utils/FeatchUtils.js";
import { authAPI } from "../../configs/DefaultConfig";

//获取认证
export const checkAuth = (params = {}) => {
  // sessionId 应该传字符串，如果是数组处理成字符串
  if (params.sessionId && Array.isArray(params.sessionId)) {
    params.sessionId = params.sessionId[0]
  }
  return httpUtils.postJson(authAPI + "/userAuth/checkAuth", params)
}

