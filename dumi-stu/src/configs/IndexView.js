/**
 * Created by liusonglin on 2018/7/13.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class IndexView extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to='/login'>登录</Link></li>
                        <h3>资产管理</h3>
                        <li><Link to='/Unit'>数量单位</Link></li>
                        <li><Link to='/RegulatoryType'>监管类型</Link></li>
                        <li><Link to='/AssetBusiness'>业务类型</Link></li>
                        <li><Link to='/DepreciationTime'>折旧年限</Link></li>
                        <li><Link to='/AssetTransactionType'>资产事务类型</Link></li>
                        <li><Link to='/AssetClassification'>资产类型</Link></li>
                        <li><Link to='/AssetRequest'>资产申请单</Link></li>
                        <li><Link to='/AssetPurchasingRequest'>资产采购申请单</Link></li>
                        <li><Link to='/AssetProvisionalRequest'>暂估转固申请单</Link></li>
                        <li><Link to='/AssetProvisionalRealRequest'>暂估正式转固申请单</Link></li>
                        <li><Link to='/AssetTransferRequest'>资产转移</Link></li>
                        <li><Link to='/AccountingDocConfigure'>资产记账配置</Link></li>
                        <li><Link to='/AssetFee'>资产费用项</Link></li>
                        <li><Link to='/TestRetirementLineItem'>资产报废行项目测试</Link></li>
                        <li><Link to='/TestDisposalLineItem'>资产处置行项目测试</Link></li>
                        <li><Link to='/TestExpandLineItem'>资产改扩建行项目</Link></li>
                        <li><Link to='/AssetExpandRequest'>资产转扩建申请单</Link></li>
                        <li><Link to='/AssetAllotRequest'>资产调拨申请单</Link></li>
                        <li><Link to='/AssetRetireRequest'>资产报废申请单(资产清理报告单)</Link></li>
                        <li><Link to='/AssetHandleRequest'>资产处置申请单</Link></li>
                        <li><Link to='/AssetConstructionRequest'>资产转固在建工程申请单</Link></li>
                        <li><Link to='/AssetDesignRequest'>资产转固研发申请单</Link></li>
                        <li><Link to='/CashFlowConfig'>现金流程配置</Link></li>
                        <li><Link to='/AssetExpandRequest'>资产改扩建申请单</Link></li>
                        <h3>付款管理</h3>
                        <li><Link to='/NaturePayment'>付款性质</Link></li>
                        <li><Link to='/PaymentAccount'>付款配置</Link></li>
                        <li><Link to='/RepayRequest'>付款单据</Link></li>
                        <li><Link to='/PmAddOrEditPage'>付款编辑</Link></li>
                        <li><Link to='/TaxRateType'>税金行项目</Link></li>
                        <h3>收款管理</h3>
                        <li><Link to='/CollectionType'>款项性质</Link></li>
                        <li><Link to='/CollectionAccount'>收款配置</Link></li>
                        <li><Link to='/ReCollectionRequest'>收款通知单</Link></li>
                        <li><Link to='/CollectionDetail'>款项明细</Link></li>
                        <h3>收入成本</h3>
                        <li><Link to='/BusinessTypes'>业务类型</Link></li>
                        <li><Link to='/InvoiceRequest'>开票申请</Link></li>
                        <li><Link to='/DivideIndex'>分次确认收入</Link></li>
                        <h3>预提</h3>
                        <li><Link to='/ProvisionType'>预提类型</Link></li>
                        <li><Link to='/ProvisionRequest'>费用预提</Link></li>
                        <li><Link to='/ProvisionRequestWag'>薪酬预提</Link></li>
                        <li><Link to='/WriteOffProvisionRequest'>冲销预提</Link></li>
                        <li><Link to='/ProvisionRequestHand'>手工预提</Link></li>
                        <h3>薪酬管理</h3>
                        <li><Link to='/SalaryPaymentPool'>薪酬支付池</Link></li>
                        <li><Link to='/SalaryElement'>工资要素</Link></li>
                        <li><Link to='/SalaryType'>业务类型</Link></li>
                        <li><Link to='/SalaryTypeElement'>业务类型可用的工资要素</Link></li>
                        <li><Link to='/DeductionRatio'>公司缴扣比例</Link></li>
                        <li><Link to='/SalaryAccountConfig'>薪酬记账配置 </Link></li>
                        <li><Link to='/SocialSecurityPay'>社保缴纳 </Link></li>
                        <li><Link to='/SalaryDistribute'>工资分配 </Link></li>
                        <li><Link to='/SalaryGrant'>工资发放 </Link></li>
                        <li><Link to='/SubstituteSettlement'>代缴结算 </Link></li>
                        <li><Link to='/SocialSecurityDistribute'>社保报销分配 </Link></li>
                        <li><Link to='/SocialSecurityPayBack'>个人社保补缴 </Link></li>
                        <h3>数据批导</h3>
                        <li><Link to='/LedgerBankAccountImport'>总账科目配置银行信息批导 </Link></li>
                        <li><Link to='/PaymentInfoImport'>支付信息批导</Link></li>
                        <li><Link to='/BusinessActivityTypeImport'>业务活动类型管理批导</Link></li>
                        <li><Link to='/GainCostDataImport'>收入成本主数据批导</Link></li>
                        <h3>手工同步订单</h3>
                        <li><Link to='/OrderSync'>手工同步订单界面</Link></li>
                        <li><Link to='/SyncHrPersonByPno'>根据工号同步员工数据</Link></li>
                        <li><Link to='/PersonInfoQuery'>人员信息查询</Link></li>
                        <h3>费用管理</h3>
                        <li><Link to='/ActItemImport'>费用项</Link></li>
                        <li><Link to='/ActBusinessActivityTypeImport'>业务活动类型管理</Link></li>
                        <li><Link to='/BusinessRequestTypeImport'>业务申请类型</Link></li>
                        <li><Link to='/ReimbursementTypeImport'>费用报销类型</Link></li>
                        <li><Link to='/TrafficType'>交通方式</Link></li>
                        <li><Link to='/PaymentType'>结算方式</Link></li>
                        <li><Link to='/BorrowType'>借款方式</Link></li>
                        <li><Link to='/RepayType'>还款方式</Link></li>
                        <li><Link to='/BusinessActivityTypeAccountConfigImport'>业务活动类型拓展配置批导</Link></li>
                        <li><Link to='/TravelSubsidy'>差旅补助批导</Link></li>
                        <li><Link to='/BudgetItemImport'>预算科目批导</Link></li>
                        <li><Link to='/AssetFlowConfigImport'>资产流程动态节点配置</Link></li>
                        <h3>批导新功能</h3>
                        <li><Link to='/OrganizationAccountConfigImport'>组织机构记账配置</Link></li>
                        <li><Link to='/CollectionNatureImport'>收款款项性质</Link></li>
                        <li><Link to='/PaymentNatureImport'>付款性质</Link></li>
                        <li><Link to='/PaymentAccountingConfImport'>付款记账配置</Link></li>
                        <li><Link to='/CollectionAccountingConfImport'>收款记账配置批导</Link></li>
                        <li><Link to='/DeductionRatioImport'>扣缴比例</Link></li>
                        <li><Link to='/SalaryTypeImport'>新增薪酬管理业务类型批导</Link></li>
                        <li><Link to='/OrgImport'>组织机构批导</Link></li>
                        <li><Link to='/CorpAccountingConfigImport'>公司的记账配置批导</Link></li>
                        <li><Link to='/SalaryAccountConfigImport'>薪酬记账配置批导</Link></li>
                        <li><Link to='/SalaryElementImport'>薪酬管理工资要素批导</Link></li>
                        <li><Link to='/FeatureImport'>功能角色管理批导</Link></li>
                        <li><Link to='/DataImport'>数据角色管理批导</Link></li>
                        <li><Link to='/BudgetPeriodImport'>批量生成预算期间</Link></li>
                        <li><Link to='/WorkerCategoryImport'>人员分类批导</Link></li>
                        <li><Link to='/PositionImport'>岗位管理批导</Link></li>
                        <li><Link to='/CashFlowConfigImport'>资产管理主数据现金流配置批导</Link></li>
                        <li><Link to='/SettlementTypemport'>财务管理结算方式批导</Link></li>
                        <li><Link to='/CityGradeImport'>城市等级配置批导页面</Link></li>
                        <li><Link to='/PersonnelGradeImport'>费用管理配置员工职级批导</Link></li>
                        <li><Link to='/AllotWorkStrategyImport'>派工策略批导</Link></li>
                        <li><Link to='/AbilityGroupMemberImport'>能力组成员批导</Link></li>
                        <li><Link to='/AccountingDocConfigureImport'>资产记账配置批导</Link></li>
                        <li><Link to='/BudgetTypeImport'>预算类型批导</Link></li>
                        <li><Link to='/Person/show'>员工信息查询表</Link></li>

                        <h3>其余模块页面</h3>
                        <li><Link to='/SaleMarket'>销售市场</Link></li>
                         <li><Link to='/CostGenerationStage'>费用产生阶段</Link></li>
                        <li><Link to='/OrgWithAccountConfigQuery'>组织机构记账配置查询</Link></li>
                    </ul>
                </nav>
            </header>

        );
    }
}
