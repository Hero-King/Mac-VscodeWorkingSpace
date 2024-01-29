import React, { Component, Fragment } from 'react';
import { searchListByKey } from "../utils/CommonUtils";
import {
  assetBusinessCategoryList,
  assetBusinessTypeFindList,
  assetClassificationListAll,
  findAll as unitListAll,
  findByAssetBusinessTypeId,
  findByCorporationCode,
  ledgerAccountByCorpCode,
  ledgerAccountList,
  listAllCorporationWithoutFrozen,
  listAllData,
  listAllDataTaxRate,
  listAllLedgerType,
  listAlllistAllUnfrozenCollection,
  listBank,
  listBankByCategoryId,
  listBankByPage,
  listBankCategory,
  listBudgetCorporation,
  listBusinessTypeByPage,
  listBusinessTypeByPage2,
  listCostCenterByPage,
  listCountry,
  listCurrencyByPage,
  listCustomerByPage,
  listGLAccounts,
  listInvoiceType,
  listOrgByBudgetCorpId,
  listOrgByCorpId,
  listPaymentStatus,
  listPersonnelByPage,
  listProfitCenter,
  listProfitCenterByPage,
  getOrigTreeByCorporationCode,
  listSupplierByPage,
  organizationAllOrgs,
  profitCenterList,
  regulatoryTypeFindAll as regulatoryTypeListAll,
  taxRateListAll,
  taxRateListByPage,
  listInnerOrder,
  assetClassificationFindAll,
  getUserAuthorizedTreeEntities,
  findByReceiverCode,
  listPaymentTypesByCorId,
  listTransferType,
  UserFindByPage,
  listCustomerByPageNew,
  listSupplierByPageNew,
  listPaymentTypesByPage,
  listDeliveryMode,
  listVehicleType,
  listCustomerByPageNewForCode,
  findPaymentNatureListBySupplyAndConsumer,
  specialFindPaymentNatureListBySupplyAndConsumer,
  findProjectByBudgetCorpId,
  fetchCollectionObject,
  fundPlanPoolByPage,
  getFundPools,
  businessTypeList
} from "./GlobalService";
import { listRequestType } from "../components/sm/salaryType/service";
import { findAllSalaryElementUnfrozen, findAllSalaryTypeUnfrozen } from "../components/sm/salaryTypeElement/service";
import { listLedgerType } from "../components/sm/salaryAccountConfig/service";
import {
  findInnerOrder,
  listAllPaymentTypes,
  listAllReceiver,
  listReceiverType,
  listSalaryRequestByPage
} from "../components/sm/pay/service";
import {
  findAllAssetBusinessCategoryUnfrozen, findAssetBusinessType,
  findAssetBusinessTypeByCategoryId, getNetAndImpairmentEnum
} from "../components/am/accountingDocConfigure/service";
import {
  findAssetFeeByBusinessTypeId
} from "../components/am/assetFee/service";
import { getAssetBusinessCategoryEnum, getAssetBusinessTypeEnum } from "../components/am/assetBusiness/service";
import { getValueTypeEnum, listCustomerBySearchParam } from "../components/am/requestRelative/assetRetireRequest/service";
import { listCashFlowCode, listCostCenterType, listSettlementType } from "../components/am/cashFlowConfig/service";

// 获取资产类别
export const assetClassificationFindAllConfigForId = {
  columns: [
    {
      title: '资产类别代码',
      dataIndex: 'code',
    },
    {
      title: '资产类别名称',
      dataIndex: 'name',
    },
  ],
  dataService: assetClassificationFindAll,
  searchService: searchListByKey,
  key: 'id',
  text: 'name'
};
// 获取资产类别
export const assetClassificationFindAllConfig = {
  columns: [{
    title: '资产类别代码',
    dataIndex: 'code',
    width: 350
  },
  {
    title: '资产类别名称',
    dataIndex: 'name',
    width: 150
  },
  ],
  dataService: assetClassificationFindAll,
  searchService: searchListByKey,
  key: 'code',
  text: 'name'
};
// 获取资产类别枚举
export const getAssetBusinessTypeEnumConfig = {
  columns: [{
    title: '资产类别代码',
    dataIndex: 'name',
    width: 350
  },
  {
    title: '资产类别名称',
    dataIndex: 'remark',
    width: 150
  },
  ],
  dataService: getAssetBusinessTypeEnum,
  searchService: searchListByKey,
  key: 'name',
  text: 'remark'
};
// 获取资产类型枚举
export const getAssetBusinessCategoryEnumConfig = {
  columns: [{
    title: '资产类型代码',
    dataIndex: 'name',
    width: 200
  },
  {
    title: '资产类型名称',
    dataIndex: 'remark',
    width: 150
  },
  ],
  dataService: getAssetBusinessCategoryEnum,
  searchService: searchListByKey,
  key: 'name',
  text: 'remark'
};
//公司
export const corporationConfigForErpCode = {
  columns: [{
    title: 'erp代码',
    dataIndex: 'erpCode',

  },
  {
    title: '公司名称',
    dataIndex: 'name',
    width: 300
  },
  ],
  dataService: listAllCorporationWithoutFrozen,
  searchService: searchListByKey,
  key: 'erpCode',
  text: 'name'
};
//公司
export const corporationConfig = {
  columns: [{
    title: '公司代码',
    dataIndex: 'code',

  },
  {
    title: '公司名称',
    dataIndex: 'name',
    width: 300
  },
  ],
  dataService: listAllCorporationWithoutFrozen,
  searchService: searchListByKey,
  key: 'erpCode',
  text: 'name'
};
//公司
export const corporationErpCodeConfig = {
  columns: [{
    title: '公司代码',
    dataIndex: 'code',

  },
  {
    title: '公司名称',
    dataIndex: 'name',
    width: 300
  },
  ],
  dataService: listAllCorporationWithoutFrozen,
  searchService: searchListByKey,
  key: 'erpCode',
  text: 'name'
};
//公司
export const corporationConfigWithId = {
  columns: [{
    title: '公司代码',
    dataIndex: 'code',

  },
  {
    title: '公司名称',
    dataIndex: 'name',
    width: 300
  },
  ],
  dataService: listAllCorporationWithoutFrozen,
  searchService: searchListByKey,
  key: 'id',
  text: 'name'
};
//银行类别
export const bankCategoryConfig = {
  columns: [{
    title: '代码',
    dataIndex: 'code',
    width: 100
  },
  {
    title: '名称',
    width: 200,
    dataIndex: 'name',
  }],
  dataService: listBankCategory,
  searchService: searchListByKey,
  key: 'code',
  text: 'name'
};
//银行
export const bankConfig = {
  columns: [{
    title: '代码',
    dataIndex: 'code',
    width: 140
  },
  {
    title: '名称',
    width: 200,
    dataIndex: 'name',
  }],
  dataService: listBankByCategoryId,
  searchService: searchListByKey,
  key: 'code',
  text: 'name'
};
//科目类型
export const listAllLedgerTypeConfig = {
  columns: [{
    title: '代码',
    dataIndex: 'name',
  },
  {
    title: '名称',
    dataIndex: 'remark',
  }],
  dataService: listAllLedgerType,
  service: listAllLedgerType,
  key: 'name',
  text: 'remark'
};
//成本中心
export const costCenterConfigForId = {
  columns: [{
    title: '代码',
    dataIndex: 'code',
    width: 140
  },
  {
    title: '名称',
    dataIndex: 'name',
  }],
  dataService: findByCorporationCode,
  key: 'id',
  text: 'name',
}
//成本中心
export const costCenterConfig = {
  columns: [{
    title: '代码',
    dataIndex: 'code',
    width: 140
  },
  {
    title: '名称',
    dataIndex: 'name',
  }],
  dataService: findByCorporationCode,
  key: 'code',
  text: 'name',
}
export const costCenterNameConfig = {
  columns: [{
    title: '代码',
    dataIndex: 'code',
    width: 140
  },
  {
    title: '名称',
    dataIndex: 'name',
  }],
  dataService: findByCorporationCode,
  key: 'code',
  text: 'name',
}
//款项性质
export const listColletionConfig = {
  columns: [{
    title: '代码',
    dataIndex: 'code',
    width: 140
  },
  {
    title: '名称',
    dataIndex: 'name',
  }],
  dataService: listAlllistAllUnfrozenCollection,
  key: 'id',
  text: 'name',
}


//银行信息
export const listBankConfigForName = {
  columns: [
    {
      title: '收款公司',
      dataIndex: 'paymentUnitName',
      width: 200
    },
    {
      title: '账号',
      dataIndex: 'bankAccountNumber',
      width: 140
    },
    {
      title: '名称',
      dataIndex: 'paymentBank.name',
      width: 160
    }],
  dataService: listBank,
  searchService: searchListByKey,
  key: 'bankAccountNumber',
  text: 'paymentUnitName'
};

//预算公司
export const budgetCorporationConfig = {
  columns: [{
    title: 'ERP代码',
    dataIndex: 'erpCode',
  },
  {
    title: '名称',
    dataIndex: 'name',
    width: 300
  }],
  dataService: listBudgetCorporation,
  searchService: searchListByKey,
  key: 'erpCode',
  text: 'name'
};
//业务币种
export const listCurrencyByPageConfig = {
  columns: [{
    title: '代码',
    dataIndex: 'code',
    width: 140
  },
  {
    title: '名称',
    dataIndex: 'name',
  }],
  dataService: listCurrencyByPage,
  key: 'code',
  text: 'name'
};
//用户
export const UserFindByPageConfig = {
  columns: [{
    title: '代码',
    dataIndex: 'code',
    width: 140
  },
  {
    title: '名称',
    dataIndex: 'userName',
  }],
  dataService: UserFindByPage,
  key: 'code',
  text: 'userName'
};
//申请部门
export const listOrgByCorpIdConfig = {
  service: listOrgByCorpId,
  key: 'id',
  text: 'name'
};

//税率
export const listTaxRateForId = {
  columns: [{
    title: '税率名称',
    dataIndex: 'name',
    width: 140
  },
  {
    title: '税率',
    dataIndex: 'rate',
  }],
  dataService: taxRateListByPage,
  key: 'id',
  text: 'name',
}
//税率
export const listTaxRate = {
  columns: [{
    title: '名称',
    dataIndex: 'name',
    width: 140
  },
  {
    title: '税率',
    dataIndex: 'rate',
  }],
  dataService: taxRateListByPage,
  key: 'code',
  text: 'rate',
}
//付款性质
export const listNaturePaymentConfig = {
  columns: [
    {
      title: '名称',
      dataIndex: 'paymentNatureName',
      width: 300
    }],
  dataService: listAllData,
  service: listAllData,
  key: 'id',
  text: 'paymentNatureName',
}
//付款性质 区分客户供应商
export const findPaymentNatureListBySupplyFilter = {
  columns: [
    {
      title: '名称',
      dataIndex: 'paymentNatureName',
      width: 300
    }],
  dataService: findPaymentNatureListBySupplyAndConsumer,
  //service:findPaymentNatureListBySupplyAndConsumer,
  key: 'id',
  text: 'paymentNatureName',
}
//付款性质 区分客户供应商(特殊付款)
export const specialFindPaymentNatureListBySupplyConsumer = {
  columns: [
    {
      title: '名称',
      dataIndex: 'paymentNatureName',
      width: 300
    }],
  dataService: specialFindPaymentNatureListBySupplyAndConsumer,
  //service:specialFindPaymentNatureListBySupplyAndConsumer,
  key: 'id',
  text: 'paymentNatureName',
}
//总账科目
export const ledgerAccountTempConfigForId = {
  columns: [
    {
      title: '代码',
      dataIndex: 'code',
    },
    {
      title: '名称',
      dataIndex: 'name',
      width: 240
    },
    {
      title: '科目代码',
      dataIndex: 'ledgerAccountCode'
    }],
  dataService: ledgerAccountByCorpCode,
  key: 'ledgerAccountCode',
  text: 'name'
};
//总账科目
export const ledgerAccountTempConfig = {
  columns: [
    {
      title: '代码',
      dataIndex: 'code',
    },
    {
      title: '名称',
      dataIndex: 'name',
      width: 240
    },
    {
      title: '科目代码',
      dataIndex: 'ledgerAccountCode'
    }],
  dataService: ledgerAccountByCorpCode,
  key: 'ledgerAccountCode',
  text: 'name'
};
//没有公司的总账科目
export const ledgerAccountTempWithoutCorpConfig = {
  columns: [
    {
      title: '代码',
      dataIndex: 'code',
      width: 140
    },
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '科目代码',
      dataIndex: 'ledgerAccountCode'
    }],
  dataService: listGLAccounts,
  searchService: searchListByKey,
  key: 'code',
  text: 'name'
};

//分页查询总账科目
export const ledgerAccountListConfig = {
  columns: [{
    title: '代码',
    dataIndex: 'code',
    width: 140
  }, {
    title: '名称',
    dataIndex: 'name',
  }, {
    title: '科目代码',
    dataIndex: 'ledgerAccountCode'
  }],
  dataService: ledgerAccountList,
  key: "ledgerAccountCode",
  text: "name",
};

//利润中心
export const profitCenterConfig = {
  columns: [{
    title: '名称',
    dataIndex: 'name',
  }, {
    title: '代码',
    dataIndex: 'code',
  }],
  dataService: profitCenterList,
  key: "code",
  text: "name",
};
//查询所有国家
export const listCountryConfig = {
  columns: [{
    title: '名称',
    dataIndex: 'name',
  }, {
    title: '国家',
    dataIndex: 'code',
  }],
  key: "code",
  text: "name",
  dataService: listCountry,
  searchService: searchListByKey,
};
//分页查询利润中心
export const listProfitCenterConfigForCode = {
  columns: [{
    title: '名称',
    dataIndex: 'name',
  }, {
    title: '代码',
    dataIndex: 'code',
  }],
  key: "code",
  text: "code",
  dataService: listProfitCenter,
};
//分页查询利润中心
export const listProfitCenterConfig = {
  columns: [{
    title: '代码',
    dataIndex: 'code',
  }, {
    title: '名称',
    dataIndex: 'name',
  }],
  key: "code",
  text: "name",
  dataService: listProfitCenter,
};
//查询税金行
export const listTaxRateType = {
  columns: [{
    title: '名称',
    dataIndex: 'taxRateName',
  }, {
    title: '代码',
    dataIndex: 'taxRateCode',
  }],
  key: "id",
  text: "taxRateName",
  service: listAllDataTaxRate,
  dataService: listAllDataTaxRate,
};
//资产分类
export const assetBusinessCategoryConfig = {
  columns: [{
    title: '名称',
    dataIndex: 'name',
  }, {
    title: '代码',
    dataIndex: 'remark',
  }],
  key: "name",
  text: "remark",
  dataService: assetBusinessCategoryList,
  searchService: searchListByKey,
};
//资产大类通过id查小类
export const assetBusinessByCatIdConfig = {
  columns: [{
    title: '名称',
    dataIndex: 'name',
  }, {
    title: '代码',
    dataIndex: 'code',
  }],
  key: "code",
  text: "name",
  dataService: assetBusinessTypeFindList,
  searchService: searchListByKey,
};
//资产类型
export const assetClassificationConfig = {
  columns: [{
    title: '名称',
    dataIndex: 'name',
  }, {
    title: '代码',
    dataIndex: 'code',
  }],
  key: "id",
  text: "name",
  dataService: assetClassificationListAll,
  searchService: searchListByKey,
};
//利润中心
export const listProfitCenterByPageConfig = {
  columns: [
    {
      title: '代码',
      dataIndex: 'code',
    }, {
      title: '名称',
      dataIndex: 'name',
    }],
  key: "code",
  text: "name",
  dataService: listProfitCenterByPage,
};
//成本中心
export const listCostCenterByPageConfig = {
  columns: [
    {
      title: '代码',
      dataIndex: 'code',
    }, {
      title: '名称',
      dataIndex: 'name',
    }],
  key: "code",
  text: "name",
  dataService: listCostCenterByPage,
};
//员工
export const listAllPersonnelConfigForCode = {
  columns: [
    {
      title: '代码',
      dataIndex: 'code',
    }, {
      title: '名称',
      dataIndex: 'name',
    }],
  key: "code",
  text: "code",
  dataService: listPersonnelByPage,
};
export const listAllPersonnelConfig = {
  columns: [
    {
      title: '代码',
      dataIndex: 'code',
    }, {
      title: '名称',
      dataIndex: 'name',
    }],
  key: "code",
  text: "name",
  dataService: listPersonnelByPage,
};

//银行
export const bankFindByPage = {
  columns: [
    {
      title: '代码',
      dataIndex: 'code',
    }, {
      title: '名称',
      dataIndex: 'name',
    }],
  key: "code",
  text: "name",
  dataService: listBankByPage,
};
//研发订单
export const findInnerOrderConfig = {
  columns: [{
    title: '代码',
    dataIndex: 'code',
    width: 140
  }, {
    title: '名称',
    dataIndex: 'name',
    width: 260
  }],
  dataService: findInnerOrder,
  key: 'code',
  text: 'name'
};
//客户
export const listCustomerByPageConfigForCode = {
  columns: [
    {
      title: '代码',
      dataIndex: 'code',
    }, {
      title: '名称',
      dataIndex: 'name',
    }, {
      title: '名称缩写',
      dataIndex: 'shortName',
    }],
  key: "code",
  text: "code",
  dataService: listCustomerByPage,
};
//客户
export const listCustomerByPageConfig = {
  columns: [
    {
      title: '代码',
      dataIndex: 'code',
    }, {
      title: '名称',
      dataIndex: 'name',
    }, {
      title: '名称缩写',
      dataIndex: 'shortName',
    }, {
      title: '贸易伙伴',
      dataIndex: 'tradePartner',
    }],
  key: "code",
  text: "name",
  dataService: listCustomerByPage,
};
export const listCustomerByPageConfigNew = {
  columns: [
    {
      title: '代码',
      dataIndex: 'code',
    }, {
      title: '名称',
      dataIndex: 'name',
    }, {
      title: '名称缩写',
      dataIndex: 'shortName',
    }],
  key: "code",
  text: "name",
  dataService: listCustomerByPageNew,
};
export const listCustomerByPageConfigNewForCode = {
  columns: [
    {
      title: '代码',
      dataIndex: 'code',
    }, {
      title: '名称',
      dataIndex: 'name',
    }, {
      title: '名称缩写',
      dataIndex: 'shortName',
    }],
  key: "code",
  text: "code",
  dataService: listCustomerByPageNewForCode,
};
//客户
export const listCustomerBySearchParamConfigForCode = {
  columns: [
    {
      title: '代码',
      dataIndex: 'code',
    }, {
      title: '名称',
      dataIndex: 'name',
    }, {
      title: '名称缩写',
      dataIndex: 'shortName',
    }],
  key: "code",
  text: "code",
  dataService: listCustomerBySearchParam,
};
//供应商
export const listSupplierByPageConfigForCode = {
  columns: [
    {
      title: '代码',
      dataIndex: 'code',
    }, {
      title: '名称',
      dataIndex: 'name',
      width: "240px"
    }, {
      title: '名称缩写',
      dataIndex: 'shortName',
    }],
  key: "code",
  text: "code",
  dataService: listSupplierByPage,
};
//供应商
export const listSupplierByPageConfig = {
  columns: [
    {
      title: '代码',
      dataIndex: 'code',
    }, {
      title: '名称',
      dataIndex: 'name',
    }, {
      title: '名称缩写',
      dataIndex: 'shortName',
    }, {
      title: '贸易伙伴',
      dataIndex: 'tradePartner',
    }],
  key: "code",
  text: "name",
  dataService: listSupplierByPage,
};
export const listSupplierByPageConfigNew = {
  columns: [
    {
      title: '代码',
      dataIndex: 'code',
    }, {
      title: '名称',
      dataIndex: 'name',
    }, {
      title: '名称缩写',
      dataIndex: 'shortName',
    }, {
      title: '贸易伙伴',
      dataIndex: 'tradePartner',
    }],
  key: "code",
  text: "name",
  dataService: listSupplierByPageNew,
};
//业务类型
export const listBusinessTypeByPageConfig = {
  columns: [
    {
      title: '代码',
      dataIndex: 'code',
    }, {
      title: '名称',
      dataIndex: 'name',
      width: 200
    }],
  key: "id",
  text: "name",
  dataService: listBusinessTypeByPage,
  searchService: searchListByKey,
};
export const listBusinessTypeByPageConfig2 = {
  columns: [
    {
      title: '代码',
      dataIndex: 'code',
    }, {
      title: '名称',
      dataIndex: 'name',
    }],
  key: "id",
  text: "name",
  dataService: listBusinessTypeByPage2,
}
//部门 forCode
export const getOrgByBudgetCorpIdConfigForCode = {
  service: listOrgByBudgetCorpId,
  key: 'code',
  text: 'name'
};
//部门
export const getOrgByBudgetCorpIdConfig = {
  service: listOrgByBudgetCorpId,
  key: 'code',
  text: 'name'
};
//发票类型
export const listInvoiceTypeConfig = {
  service: listInvoiceType,
  key: 'anEnum',
  text: 'remark'
};
//资产 调拨方式枚举
export const listTransferTypeConfig = {
  service: listTransferType,
  key: 'anEnum',
  text: 'remark'
};
//通过公司id获取组织机构
export const getOrigTreeByCorporationCodeConfig = {
  service: getOrigTreeByCorporationCode,
  key: 'id',
  text: 'name'
};
//basic组织机构
export const getUserAuthorizedTreeEntitiesConfig = {
  service: getUserAuthorizedTreeEntities,
  key: 'id',
  text: 'name'
};
//basic组织机构
export const organizationAllOrgsConfig = {
  service: organizationAllOrgs,
  key: 'id',
  text: 'name'
};
//数量单位
export const unitListConfigForId = {
  columns: [{
    title: '名称',
    dataIndex: 'name',
    width: 250
  }],
  key: "id",
  text: "name",
  dataService: unitListAll,
  service: unitListAll,
  // searchService: searchListByKey,
};
//数量单位
export const unitListConfig = {
  columns: [{
    title: '名称',
    dataIndex: 'name',
  }, {
    title: '代码',
    dataIndex: 'code',
  }],
  key: "code",
  text: "name",
  dataService: unitListAll,
  searchService: searchListByKey,
};
//税率
export const taxRateListConfig = {
  columns: [{
    title: '名称',
    dataIndex: 'name',
  }, {
    title: '税率',
    dataIndex: 'rate',
  }],
  key: "rate",
  text: "name",
  dataService: taxRateListAll,
  searchService: searchListByKey,
};
//资产监管类型
export const regulatoryTypeListConfigForId = {
  columns: [{
    title: '名称',
    dataIndex: 'name',
  }, {
    title: '代码',
    dataIndex: 'code',
  }],
  key: "id",
  text: "name",
  dataService: regulatoryTypeListAll,
  searchService: searchListByKey,
};
//资产监管类型
export const regulatoryTypeListtConfig = {
  columns: [{
    title: '名称',
    dataIndex: 'name',
  }, {
    title: '代码',
    dataIndex: 'code',
  }],
  key: "code",
  text: "name",
  dataService: regulatoryTypeListAll,
  searchService: searchListByKey,
};
//资产事务类型
export const assetTransactionTypeConfigForId = {
  columns: [{
    title: '名称',
    dataIndex: 'name',
  }, {
    title: '代码',
    dataIndex: 'code',
  }],
  key: "id",
  text: "name",
  dataService: findByAssetBusinessTypeId,
  searchService: searchListByKey,
};
//资产事务类型
export const assetTransactionTypeConfig = {
  columns: [{
    title: '名称',
    dataIndex: 'name',
  }, {
    title: '代码',
    dataIndex: 'code',
  }],
  key: "code",
  text: "name",
  dataService: findByAssetBusinessTypeId,
  searchService: searchListByKey,
};
//工资要素类型
export const salaryElementUnfrozenConfig = {
  columns: [{
    title: '名称',
    dataIndex: 'name',
  }, {
    title: '代码',
    dataIndex: 'code',
  }],
  key: "id",
  text: "name",
  dataService: findAllSalaryElementUnfrozen,
  searchService: searchListByKey,
};
//工资类型
export const salaryTypeAllListConfig = {
  columns: [{
    title: '名称',
    dataIndex: 'name',
  }, {
    title: '代码',
    dataIndex: 'code',
  }],
  key: "id",
  text: "name",
  dataService: findAllSalaryTypeUnfrozen,
  searchService: searchListByKey,
};
//收款方
export const listAllReceivers = {
  columns: [{
    title: '代码',
    dataIndex: 'code',
    width: 140
  }, {
    title: '名称',
    dataIndex: 'name',
    width: 290
  }],
  dataService: listAllReceiver,
  key: 'code',
  text: 'name'
};
//薪酬单据
export const listSalaryByPage = {
  columns: [{
    title: '单号',
    dataIndex: 'orderNo',
    width: 140
  }, {
    title: '制单人',
    dataIndex: 'creatorName',
    width: 160
  }, {
    title: '结算年月',
    dataIndex: 'salaryMonth',
    width: 150
  }, {
    title: '申请说明',
    dataIndex: 'requestNote',
    width: 290
  }],
  dataService: listSalaryRequestByPage,
  key: 'orderNo',
  text: 'orderNo'
};
export const listReceiversConfigForCode = {
  columns: [{
    title: '名称',
    dataIndex: 'name',
    width: 290
  }],
  dataService: listReceiverType,
  service: listReceiverType,
  searchService: searchListByKey,
  key: 'erpCode',
  text: 'name'
};
export const listReceiversConfig = {
  columns: [{
    title: '代码',
    dataIndex: 'code',
    width: 140
  }, {
    title: '名称',
    dataIndex: 'name',
    width: 290
  }],
  dataService: listReceiverType,
  service: listReceiverType,
  searchService: searchListByKey,
  key: 'id',
  text: 'name'
};
//收款方类型
export const receiverTypeConfig = {
  service: listReceiverType,
  key: 'id',
  text: 'name'
}
//结算方式
export const paymentTypeConfig = {
  service: listAllPaymentTypes,
  columns: [{
    title: '名称',
    dataIndex: 'name',
    width: 200
  }],
  dataService: listAllPaymentTypes,
  searchService: searchListByKey,
  key: 'id',
  text: 'name'
}
/**
 * Selected
 */
//银行支付状态
export const paymentStatusConfig = {
  service: listPaymentStatus,
  key: 'name',
  text: 'remark'
};

//申请类型
export const listRequestTypeConfig = {
  service: listRequestType,
  key: 'name',
  text: 'remark'
};

//科目类型
export const listLedgerTypeConfig = {
  service: listLedgerType,
  key: 'name',
  text: 'remark'
};

//资产业务类型
export const listAssetBusinessCategoryByPageConfig = {
  columns: [
    {
      title: '代码',
      dataIndex: 'name',
      width: 290
    }, {
      title: '名称',
      dataIndex: 'remark',
    }],
  key: "name",
  text: "remark",
  dataService: findAllAssetBusinessCategoryUnfrozen
};
//资产业务类别
export const listAssetBusinessTypeByCategoryIdConfig = {
  columns: [
    {
      title: '名称',
      dataIndex: 'name',
      width: 280,
    }],
  key: "id",
  text: "name",
  searchService: searchListByKey,
  service: findAssetBusinessTypeByCategoryId,
  dataService: findAssetBusinessTypeByCategoryId
};
//资产业务类别
export const listAssetBusinessTypeConfig = {
  columns: [
    {
      title: '名称',
      dataIndex: 'name',
      width: 220
    }],
  key: "id",
  text: "name",
  service: findAssetBusinessType,
  dataService: findAssetBusinessType
};
//资产费用项
export const listAssetFeeByBusinessTypeIdConfig = {
  columns: [
    {
      title: '代码',
      dataIndex: 'code',
    }, {
      title: '名称',
      dataIndex: 'name',
    }],
  key: "id",
  text: "name",
  dataService: findAssetFeeByBusinessTypeId
};
//研发订单
export const listInnerOrderConfig = {
  columns: [
    {
      title: '代码',
      dataIndex: 'code',
    }, {
      title: '名称',
      dataIndex: 'name',
    }],
  key: "code",
  text: "name",
  dataService: listInnerOrder
};
//支付信息
export const listReceiverConfigForBankId = {
  columns: [
    {
      title: '代码',
      dataIndex: 'bankAccountNumber',
    }, {
      title: '名称',
      dataIndex: 'bank.name',
    }],
  key: "bankId",
  text: "bank.name",
  searchService: searchListByKey,
  dataService: findByReceiverCode
};
//支付信息
export const listReceiverConfig = {
  columns: [
    {
      title: '代码',
      dataIndex: 'bank.code',
    }, {
      title: '名称',
      dataIndex: 'bank.name',
    }],
  key: "id",
  text: "bank.name",
  dataService: findByReceiverCode
};
//fim支付方式
export const listPaymentTypesByCorIdConfig = {
  columns: [
    {
      title: '代码',
      dataIndex: 'code',
    }, {
      title: '名称',
      dataIndex: 'name',
    }],
  key: "code",
  text: "name",
  service: listPaymentTypesByCorId,
  dataService: listPaymentTypesByCorId
};
//fim支付方式
export const listPaymentTypesByCorIdConfigForId = {
  columns: [
    {
      title: '名称',
      dataIndex: 'name',
    }],
  key: "id",
  text: "name",
  searchService: searchListByKey,
  service: listPaymentTypesByCorId,
  dataService: listPaymentTypesByCorId
};
//fim支付方式
export const listPaymentTypesByCorIdConfigForIdByPage = {
  columns: [
    {
      title: '名称',
      dataIndex: 'name',
      width: 250
    }],
  key: "id",
  text: "name",
  searchService: (data, searchParam) => searchListByKey(data, searchParam, ["name"]),
  service: listPaymentTypesByPage,
  dataService: listPaymentTypesByPage
};
//值类型枚举
export const getValueTypeEnumConfig = {
  columns: [
    {
      title: '名称',
      dataIndex: 'remark',
      width: 150
    },
  ],
  service: getValueTypeEnum,
  dataService: getValueTypeEnum,
  searchService: searchListByKey,
  key: 'name',
  text: 'remark'
};
export const valueTypeEnumConfig = {
  columns: [
    {
      title: '代码',
      dataIndex: 'name',
      width: 150
    },
    {
      title: '名称',
      dataIndex: 'remark',
      width: 150
    },
  ],
  service: getValueTypeEnum,
  dataService: getValueTypeEnum,
  searchService: searchListByKey,
  key: 'anEnum',
  text: 'remark'
};

//结算方式
export const SettlementTypeConfig = {
  columns: [
    {
      title: '名称',
      dataIndex: 'name',
      width: 150
    },
  ],
  dataService: listSettlementType,
  searchService: searchListByKey,
  key: 'code',
  text: 'name'
};
//现金流程配置
export const cashFlowConfig = {
  columns: [
    {
      title: '名称',
      dataIndex: 'name',
      width: 150
    },
  ],
  dataService: listCashFlowCode,
  searchService: searchListByKey,
  key: 'code',
  text: 'name'
};
//成本中心类型
export const costCenterTypeConfig = {
  columns: [
    {
      title: '名称',
      dataIndex: 'name',
      width: 150
    },
  ],
  dataService: listCostCenterType,
  searchService: searchListByKey,
  key: 'code',
  text: 'name'
};
//净值/减值
export const getNetAndImpairmentEnumConfig = {
  columns: [
    {
      title: '名称',
      dataIndex: 'remark',
      width: 150
    },
  ],
  dataService: getNetAndImpairmentEnum,
  searchService: searchListByKey,
  key: 'name',
  text: 'remark'
};
//投放形式
export const listDeliveryModeConfig = {
  columns: [
    {
      title: '代码',
      dataIndex: 'code',
    }, {
      title: '名称',
      dataIndex: 'name',
    }],
  dataService: listDeliveryMode,
  searchService: searchListByKey,
  key: "code",
  text: "name",
};
//车型
export const listVehicleTypeConfig = {
  columns: [
    {
      title: '代码',
      dataIndex: 'code',
    }, {
      title: '名称',
      dataIndex: 'name',
    }],
  dataService: listVehicleType,
  searchService: searchListByKey,
  key: "code",
  text: "name",
};
/** [公司项目配置] */
export const corporationProjectConfig = {
  columns: [{
    title: '代码',
    dataIndex: 'code',
    width: 80
  }, {
    title: '名称',
    dataIndex: 'name',
    width: 220
  }, {
    title: "WBS编号",
    dataIndex: 'erpProjectCode',
    width: 200
  }],
  dataService: findProjectByBudgetCorpId,
  searchService: (data, searchKey, params = ["code", "name", "erpProjectCode"]) => searchListByKey(data, searchKey, params),
  key: 'id',
  text: 'name'
};
export const budgetCorporationProjectConfig = {
  columns: [{
    title: '代码',
    dataIndex: 'code',
    width: 80
  }, {
    title: '名称',
    dataIndex: 'name',
    width: 220
  }, {
    title: "WBS编号",
    dataIndex: 'erpProjectCode',
    width: 200
  }],
  dataService: findProjectByBudgetCorpId,
  searchService: (data, searchKey, params = ["code", "name", "erpProjectCode"]) => searchListByKey(data, searchKey, params),
  key: 'erpProjectCode',
  text: 'erpProjectCode'
};
export const payObjectTypeConfig = {
  columns: [{
    title: '名称',
    dataIndex: 'name',
  }, {
    title: '代码',
    dataIndex: 'code',
  }],
  dataService: fetchCollectionObject,
  key: "code",
  text: "name",
};
// 资金计划
export const fundPlanPoolConfig = {
  columns: [{
    title: '资金编号',
    dataIndex: 'poolNo',
    width: 180
  }, {
    title: '资管主体',
    dataIndex: 'fundManagementSubject.name',
    width: 180
  }, {
    title: '资金类别',
    dataIndex: 'fundType.name',
    width: 200
  }, {
    title: '可用余额',
    dataIndex: 'canSplitAmount',
    width: 100
  }, {
    title: '合同编号',
    dataIndex: 'contractNo',
    width: 180
  }, {
    title: '客供名称',
    dataIndex: 'expectedTargetName',
    width: 180
  }],
  dataService: fundPlanPoolByPage,
  searchService: (data, searchKey, params = ['poolNo', 'fundType.name', 'expectedTargetName', 'fundManagementSubject.name', 'contractNo']) => searchListByKey(data, searchKey, params),
  key: 'poolNo',
  text: 'poolNo'
};
// 资金计划
export const salaryFundPlanPoolConfig = {
  columns: [{
    title: '资金编号',
    dataIndex: 'poolNo',
    width: 180
  }, {
    title: '资管主体',
    dataIndex: 'fundManagementSubject.name',
    width: 180
  }, {
    title: '业务类别',
    dataIndex: 'businessType.name',
    width: 200
  }, {
    title: '资金类别',
    dataIndex: 'fundType.name',
    width: 200
  }, {
    title: '可用余额',
    dataIndex: 'canSplitAmount',
    width: 100
  }, {
    title: '客供名称',
    dataIndex: 'expectedTargetName',
    width: 180
  }],
  dataService: getFundPools,
  searchService: (data, searchKey, params = ['poolNo','businessType.name','fundType.name', 'expectedTargetName', 'fundManagementSubject.name']) => searchListByKey(data, searchKey, params),
  key: 'poolNo',
  text: 'poolNo'
};
//业务类别
export const businessTypeConfig = {
  columns: [{
    title: '代码',
    dataIndex: 'code',
    width: 80
  }, {
    title: '名称',
    dataIndex: 'name',
    width: 220
  }],
  dataService: businessTypeList,
  searchService: (data, searchKey, params = ["code", "name"]) => searchListByKey(data, searchKey, params),
  key: 'code',
  text: 'name'
};