import {amAPI, bafAPI, basicAPI, basicUrl, bmAPI, brmBafUrl, cmAPI, fimUrl, pmAPI, smAPI} from "./DefaultConfig";
import httpUtils from "../commons/utils/FeatchUtils";
import { convertSearchFilter } from "../utils/CommonUtils";

//查找所有的事务类别
export async function assetClassificationFindAll (params = {}) {
  return httpUtils.get(amAPI + "/assetClassification/findAll", params);
}
//根据业务类型查找事务类型
export async function findByAssetBusinessTypeId (params = {}) {
  return httpUtils.get(amAPI + "/assetTransactionType/findByAssetBusinessTypeId", params);
}
//获取数量单位
export async function findAll (params = {}) {
  Object.assign(params, { quickSearchProperties: ["code", "name"], sortOrders: [{ "property": "code", "direction": "ASC" }] });
  return httpUtils.postJson(amAPI + "/unit/findByPage", convertSearchFilter(params));
}
//分页获取总账科目
export async function ledgerAccountList (params = {}) {
  Object.assign(params, { quickSearchProperties: ["code", "name"] });
  return httpUtils.postJson(fimUrl + '/ledgerAccount/findByPage', convertSearchFilter(params));
}
export async function assetBusinessCategoryList () {
  return httpUtils.get(amAPI + "/getEnum/getAssetBusinessCategoryEnum");
}
//资产大类通过assetBusinessCategoryId查业务类型
export async function assetBusinessTypeFindList (params) {
  return httpUtils.get(amAPI + "/assetBusinessType/findByCategoryId", params);
}
//利润中心
export async function profitCenterList (params = {}) {
  Object.assign(params, { quickSearchProperties: ["code", "name"], sortOrders: [{ "property": "code", "direction": "ASC" }] });
  return httpUtils.postJson(fimUrl + '/profitCenter/findByPageInAuth', convertSearchFilter(params));
}
//资产类型
export async function assetClassificationListAll (params = {}) {
  return httpUtils.get(amAPI + "/assetClassification/findAll", params);
}
//通过code获取组织机构
export const organizationAllOrgs = (params = {}) => {
  return httpUtils.get(basicAPI + "/organization/findOrgTreeWithoutFrozen", params);
};
//通过公司id获取组织机构
export const getOrigTreeByCorporationCode = (params = {}) => {
  return httpUtils.get(basicAPI + "/organizationExt/findAllByCorporationCode", params);
};
//通过相关权限的组织机构
export const getUserAuthorizedTreeEntities = (params = {}) => {
  return httpUtils.get(basicAPI + "/organizationExt/getUserAuthorizedTreeEntities", params);
};
//税率
export const taxRateListAll = (params = {}) => {
  return httpUtils.get(fimUrl + "/taxRate/findAll", params);
};
export const taxRateAllByRank = (params = {}) => {
  return httpUtils.get(fimUrl + "/taxRate/findAllOrderByRank", params);
};
export const taxRateAllByRankByType = (params = {}) => {
  return httpUtils.get(fimUrl + "/taxRate/findAllOrderByRank", params).then(res => {
    return new Promise((resolve) => {
      let { type } = params;
      let newArray = [];
      for (let item of res) {
        if (type === "allot") {
          if (item.taxCode.includes("J") || item.taxCode.includes("FJ")) {
            newArray.push(item);
          }
        } else {
          if (item.taxCode.includes(type)) {
            newArray.push(item)
          }
        }
      }
      resolve(newArray);
    })
  });
};
export async function regulatoryTypeFindAll (params = {}) {
  return httpUtils.get(amAPI + "/regulatoryType/findAll", params);
}

//查询款项性质
export const listAllData = (params = {}) => {
  Object.assign(params, { quickSearchProperties: ["paymentNatureCode", "paymentNatureName"] });
  params["S_createdDate"] = "DESC";
  const searchFilter = convertSearchFilter(params);
  return httpUtils.postJson(pmAPI + "/paymentNature/findByPage", searchFilter)
}

//查询款项性质 区分客户供应商
export const findPaymentNatureListBySupplyAndConsumer = (params = {}) => {
  Object.assign(params, { quickSearchProperties: ["paymentNatureCode", "paymentNatureName"] });
  params["S_createdDate"] = "DESC";
  const searchFilter = convertSearchFilter(params);
  return httpUtils.postJson(pmAPI + "/paymentNature/findListBySupplyFilter", searchFilter)
}

//查询款项性质 区分客户供应商（特殊付款）
export const specialFindPaymentNatureListBySupplyAndConsumer = (params = {}) => {
  Object.assign(params, { quickSearchProperties: ["paymentNatureCode", "paymentNatureName"] });
  params["S_createdDate"] = "DESC";
  const searchFilter = convertSearchFilter(params);
  return httpUtils.postJson(pmAPI + "/paymentNature/specialFindListBySupplyFilter", searchFilter)
}
//查询款项性质
export const taxRateListByPage = (params = {}) => {
  Object.assign(params, { quickSearchProperties: ["taxCode", "name"] });
  params["S_rate"] = "ASC";
  const searchFilter = convertSearchFilter(params);
  return httpUtils.postJson(fimUrl + "/taxRate/findByPage", searchFilter)
}
export async function findByCorporationCode (params = {}) {
  params["S_code"] = "ASC";
  const quickSearchProperties = ["code", "name"];
  const searchFilter = convertSearchFilter({ ...params, quickSearchProperties });
  return httpUtils.postJson(fimUrl + "/costCenter/findByPage", searchFilter)
}
//总账科目
export async function ledgerAccountByCorpCode (params = {}) {
  Object.assign(params, { sortOrders: [{ property: 'code', direction: 'ASC' }], quickSearchProperties: ["code", "name"] });
  return httpUtils.postJson(fimUrl + "/ledgerAccount/findAvailableByCorpCode", params);
}
//获取用户权限下所有未冻结公司
export async function listAllCorporationWithoutFrozen (param = {}) {
  return httpUtils.get(basicUrl + "/corporation/getUserAuthorizedEntities", param);
  //return httpUtils.get(basicUrl+"/corporation/findAll",param);
}
export async function listAllLedgerType (params = {}) {
  return httpUtils.get(brmBafUrl + "/businessActivityType/listAllLedgerType", params);
}
//总账科目没有公司条件限制
export async function listGLAccounts (params = {}) {
  return httpUtils.postJson(fimUrl + "/ledgerAccount/listGLAccounts", JSON.stringify(params));
}
//查询
export const listAlllistAllUnfrozenCollection = (params = {}) => {
  Object.assign(params, { quickSearchProperties: ["code", "name"] });
  params["S_createdDate"] = "DESC";
  params["Q_EQ_frozen_bool"] = false;
  const searchFilter = convertSearchFilter(params);
  return httpUtils.postJson(cmAPI + "/collectionType/findByPage", searchFilter)
}

//获取银行信息
export const listBank = (params = {}) => {
  return httpUtils.get(fimUrl + "/ledgerBankAccount/findByCorpCode", params);
}
//获取预算申请部门
export const listOrgByBudgetCorpId = (params = {}) => {
  return httpUtils.get(bafAPI + "/budgetCorporation/findTree4UnfrozenByBudCorId", params);
}
//获取利润中心
export const listProfitCenter = (params = {}) => {
  Object.assign(params, { quickSearchProperties: ["code", "name"] });
  return httpUtils.postJson(fimUrl + "/profitCenter/findByPage", convertSearchFilter(params));
}
//获取公司
export const listBudgetCorporation = (params = {}) => {
  return httpUtils.get(bafAPI + "/budgetCorporation/getUserAuthorizedEntities", params);
}
//获取申请部门
export const listOrgByCorpId = (params = {}) => {
  return httpUtils.get(basicAPI + "/organizationExt/findOrganizationByCorporationId", params);
}

//获取所有国家
export const listCountry = (params = {}) => {
  return httpUtils.get(basicAPI + "/country/findAll", params);
}
//获取币种类型
export async function UserFindByPage (params = {}) {
  Object.assign(params, { quickSearchProperties: ["code", "user.userName", "id"] });
  return httpUtils.postJson(basicAPI + "/userExt/findByUserQueryParam", convertSearchFilter(params));
}
//获取币种类型
export async function listCurrencyByPage (params = {}) {
  Object.assign(params, { quickSearchProperties: ["code", "name"] }, { includeSubNode: false });
  return httpUtils.postJson(fimUrl + "/currency/findByPage", convertSearchFilter(params));
}
//供应商
export async function listSupplierByPage (params = {}) {
  if (params.filters && params.filters instanceof Array) {
    params.filters.push({
      fieldName: "frozen",
      fieldType: "bool",
      operator: "EQ",
      value: false,
    })
  }
  const quickSearchProperties = ["code", "name", "shortName", "tradePartner"];
  const searchFilter = convertSearchFilter({ ...params, quickSearchProperties, sortOrders: [{ property: 'code', direction: 'ASC' }] });
  return httpUtils.postJson(fimUrl + "/supplier/findByPage", searchFilter);
}
export async function listSupplierByPageNew (params = {}) {
  if (params.filters && params.filters instanceof Array) {
    params.filters.push({
      fieldName: "frozen",
      fieldType: "bool",
      operator: "EQ",
      value: false,
    })
  }
  const quickSearchProperties = ["code", "name", "shortName", "tradePartner"];
  const searchFilter = convertSearchFilter({ ...params, quickSearchProperties, sortOrders: [{ property: 'code', direction: 'ASC' }] });
  return httpUtils.postJson(fimUrl + "/supplier/isInnerContactSupplierPage", searchFilter);
}
//利润中心
export async function listProfitCenterByPage (params = {}) {
  Object.assign(params, { sortOrders: [{ property: 'code', direction: 'ASC' }], quickSearchProperties: ["scope", "name", "code", "corporationCode"] });
  return httpUtils.postJson(fimUrl + "/profitCenter/findByPage", convertSearchFilter(params));
}

//员工
export async function listPersonnelByPage (params = {}) {
  Object.assign(params, { sortOrders: [{ property: 'code', direction: 'ASC' }], quickSearchProperties: ["name", "code"] });
  return httpUtils.postJson(fimUrl + "/personnel/findByPage", convertSearchFilter(params));
}
//发票类型
export async function listInvoiceType (params = {}) {
  return httpUtils.post(bmAPI + "/invoiceRequestItem/listInvoiceType", params);
}
//资产调拨方式枚举
export async function listTransferType (params = {}) {
  return httpUtils.get(amAPI + "/getEnum/getValueTypeEnum", params);
}
//客户
export async function listCustomerByPage (params = {}) {
  if (params.filters && params.filters instanceof Array) {
    params.filters.push({
      fieldName: "frozen",
      fieldType: "bool",
      operator: "EQ",
      value: false,
    })
  }
  const quickSearchProperties = ["code", "name", "shortName", "tradePartner"];
  const searchFilter = convertSearchFilter({ ...params, quickSearchProperties, sortOrders: [{ property: 'code', direction: 'ASC' }] });
  return httpUtils.postJson(fimUrl + "/customer/findByPage", searchFilter)
}
export async function listCustomerByPageNewForCode (params = {}) {
  if (params.filters && params.filters instanceof Array) {
    params.filters.push({
      fieldName: "frozen",
      fieldType: "bool",
      operator: "EQ",
      value: false,
    })
  }
  const quickSearchProperties = ["code", "name", "shortName"];
  const searchFilter = convertSearchFilter({ ...params, quickSearchProperties, sortOrders: [{ property: 'code', direction: 'ASC' }] });
  //const searchFilter = convertSearchFilter({ ...params});
  return httpUtils.postJson(fimUrl + "/customer/isInnerContactCustomerPage", searchFilter)
}
export async function listCustomerByPageNew (params = {}) {
  if (params.filters && params.filters instanceof Array) {
    params.filters.push({
      fieldName: "frozen",
      fieldType: "bool",
      operator: "EQ",
      value: false,
    })
  }
  const quickSearchProperties = ["code", "name", "shortName"];
  const searchFilter = convertSearchFilter({ ...params, quickSearchProperties, sortOrders: [{ property: 'code', direction: 'ASC' }] });
  //const searchFilter = convertSearchFilter({ ...params});
  return httpUtils.postJson(fimUrl + "/customer/isInnerContactCustomerPage", searchFilter)
}
//成本中心
export async function listCostCenterByPage (params = {}) {
  Object.assign(params, { sortOrders: [{ property: 'code', direction: 'ASC' }], quickSearchProperties: ["name", "code"] });
  return httpUtils.postJson(fimUrl + "/costCenter/findByPage", convertSearchFilter(params));
}
//银行
export async function listBankByPage (params = {}) {
  Object.assign(params, { sortOrders: [{ property: 'code', direction: 'ASC' }], quickSearchProperties: ["name", "code"] });
  return httpUtils.postJson(fimUrl + "/bank/findByPage", convertSearchFilter(params));
}
//业务类型
export async function listBusinessTypeByPage (params = {}) {
  //return httpUtils.get(bmAPI + "/businessType/findByBusinessType",{businessType:"InvoiceRevenue"});
  return httpUtils.get(bmAPI + "/businessType/findByBusinessTypeAndProfitCode", params);
}
export async function listBusinessTypeByPage2 (params = {}) {
  return httpUtils.get(bmAPI + "/businessType/findByBusinessType", { businessType: "CostCarryOver" });
}
//查询
export const listAllDataTaxRate = (params = {}) => {
  Object.assign(params, { quickSearchProperties: ["taxRateCode", "taxRateName"] });
  params["S_createdDate"] = "DESC";
  const searchFilter = convertSearchFilter(params);
  return httpUtils.postJson(pmAPI + "/taxRateType/findByPage", searchFilter)
}
//銀行
export const listBankByCategoryId = (params = {}) => {
  return httpUtils.get(fimUrl + "/bank/findByBankCategoryId", params)
}
//银行类别
export const listBankCategory = (params = {}) => {
  return httpUtils.get(fimUrl + "/bankCategory/findAll")
}
//银行支付状态
export const listPaymentStatus = () => {
  return httpUtils.get(fimUrl + "/accountingVoucherPayment/listPaymentStatus")
}
//研发订单
export async function listInnerOrder (params = {}) {
  if (params.filters && params.filters instanceof Array) {
    params.filters.push({
      fieldName: "deleted",
      fieldType: "String",
      operator: "NE",
      value: 'X',
    })
  }
  Object.assign(params, { sortOrders: [{ property: 'code', direction: 'ASC' }], quickSearchProperties: ["name", "code"] });
  return httpUtils.postJson(fimUrl + "/innerOrder/findByPage", convertSearchFilter(params));
}
//支付信息
export const findByReceiverCode = (params = {}) => {
  return httpUtils.get(fimUrl + "/paymentInfo/findByReceiverCode", params);
}
//settlementType/findByCorporationAndModule
// 结算方式御用新接口
export const listPaymentTypesByCorId = (params = {}) => {
  return httpUtils.post(fimUrl + "/settlementType/findByCorporationId", params);
}
// 结算方式御用新接口
export const listPaymentTypesByPage = (params = {}) => {
  return httpUtils.postJson(fimUrl + "/settlementType/findByPage", convertSearchFilter(params));
}
//投放形式
export const listDeliveryMode = (params = {}) => {
  return httpUtils.get(brmBafUrl + "/deliveryMode/findAll", params);
}
//车型
export const listVehicleType = (params = {}) => {
  return httpUtils.get(brmBafUrl + "/vehicleType/findAll", params);
}
export async function findProjectByBudgetCorpId(params = {}) {
  return httpUtils.get(brmBafUrl + "/corporationProject/findByCorporationErpCode", params);
}
export async function findByBudgetCorporationId(params = {}) {
  return httpUtils.get(brmBafUrl + "/corporationProject/findByBudgetCorporationId", params);
}
export const fetchCollectionObject = (params = {}) => {
  Object.assign(params, { quickSearchProperties: ["name", "code"] });
  return httpUtils.postJson(cmAPI+"/collectionRequest/fetchCollectionObject", params);
};
export const fundPlanPoolByPage  = (params = {}) =>  {
  return httpUtils.get("/fms/fundPlanPoolCust/getPool",params);
}
export const getFundPools  = (params = {}) =>  {
  return httpUtils.get(smAPI+"/salaryRequest/getFundPools",params);
}
export const businessTypeList  = (params = {}) =>  {
  return httpUtils.get("/fms/businessType/findAll",params);
}