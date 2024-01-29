/**
 * @Description:
 * @Author: CHEHSHUANG
 * @Date: 2019/3/6
 */
import httpUtils from "../FeatchUtils";
import {basicAuthor,basicUrl} from "../../configs/DefaultConfig";

//登陆
export const login = (params = {}) => {
  params.appId = "1234";
  if (!Object.keys(params).includes("tenantCode")) {
    params.tenantCode = "";
  }
  return httpUtils.post("/auth-service/adLogin", params)
}
//退出
export const logout = (params = {}) => {
  return httpUtils.post(basicAuthor + "/userAuth/logout", params)
}
//域
export const getDomains = (params = {}) => {
  return httpUtils.get("/auth-service/userAuth/domains", params);
}
/** 获取当前用户有权限的功能项集合 */
export const getAuthorizedFeatures = (params = {}) => {
  return httpUtils.get(basicUrl + "/user/getUserAuthorizedFeatureMaps", params);
}
export const getSizeLimit = () => {
  return httpUtils.get(basicUrl + '/commonExt/getDataDictByCode?categoryCode=LIMIT_SIZE_Attachment&code=sizeLimit');
}
