/**
 * Created by liusonglin on 2018/7/12.
 */
import React, {Component, lazy, Suspense} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import Route from './PrivateRoute'
import {Spin} from "antd";
import Login from "../components/login";

const Demo = lazy(() => import('../commons/components/Demo'));
const ChoosePaymentTypeModal = lazy(() => import('../components/pm/repayRequestForContract/contract/ChoosePaymentTypeModal'));
const PaymentForContract = lazy(() => import('../components/pm/repayRequestForContract/contract/PaymentForContract'));
const AssetItemDetailPage = lazy(() => import('../components/am/requestRelative/Approve/AssetItemDetailPage'));
const AssetEditApproveForRetirement = lazy(() => import('../components/am/requestRelative/Approve/AssetEditApproveForRetirement'));
const ContractMainManage = lazy(() => import('../components/pm/repayRequestForContract/contract/ContractMainManage'));
const PmAddOrEditPageForContract = lazy(() => import('../components/pm/repayRequestForContract/orderList/PmAddOrEditPageForContract'));
const AssetIntoDetailApprove = lazy(() => import('../components/am/requestRelative/Approve/AssetIntoDetailApprove'));
const EnterpriseUserView = lazy(() => import('../components/am/requestRelative/EnterpriseUser/EnterpriseUserView'));
const AssetEditApproveForIntoAllot = lazy(() => import('../components/am/requestRelative/Approve/AssetEditApproveForIntoAllot'));
const AssetEditApproveForIntoParkFinance = lazy(() => import('../components/am/requestRelative/Approve/AssetEditApproveForIntoParkFinance'));
const AssetEditApproveForIntoUnitFinance = lazy(() => import('../components/am/requestRelative/Approve/AssetEditApproveForIntoUnitFinance'));
const AssetEditApproveForParkFinance = lazy(() => import('../components/am/requestRelative/Approve/AssetEditApproveForParkFinance'));
const AssetEditApproveForUnitFinance = lazy(() => import('../components/am/requestRelative/Approve/AssetEditApproveForUnitFinance'));
const AssetEditApproveForUnitFinanceTicket = lazy(() => import('../components/am/requestRelative/Approve/AssetEditApproveForUnitFinanceTicket'));
const AssetDesignRequest = lazy(() => import('../components/am/requestRelative/assetTransformRequest/AssetDesignRequest'));
const PrintPm = lazy(() => import('../components/pm/print/PrintPm'));
const AssetRetireRequest = lazy(() => import('../components/am/requestRelative/assetRetireRequest/AssetRetireRequest'));
const IndexView = lazy(() => import('./IndexView'));
const AssetDetailApprove = lazy(() => import('../components/am/requestRelative/Approve/AssetDetailApprove'));
const AssetEditApprove = lazy(() => import('../components/am/requestRelative/Approve/AssetEditApprove'));
const AssetHandleRequest = lazy(() => import('../components/am/requestRelative/assetHandleRequest/AssetHandleRequest'));
const AssetDetailApprovePage = lazy(() => import('../components/am/requestRelative/Approve/AssetDetailApprovePage'));
const AssetEditApprovePage = lazy(() => import('../components/am/requestRelative/Approve/AssetEditApprovePage'));
const RequestTransitPage = lazy(() => import('../components/am/requestRelative/common/bussinessTransit/RequestTransitPage'));
const Unit = lazy(() => import('../components/am/unit'));
const AssetPurchasingRequest = lazy(() => import('../components/am/requestRelative/assetPurchasingRequest/AssetPurchasingRequest'));
const TestPurchaseLineItem = lazy(() => import('../components/am/requestRelative/assetPurchasingRequest/componentTest/TestPurchaseLineItem'));
const TestSupplierLineItem = lazy(() => import('../components/am/requestRelative/common/componentTest/TestSupplierLineItem'));
const TestTaxRateItem = lazy(() => import('../components/am/requestRelative/common/componentTest/TestTaxRateItem'));
const AssetChangeOverPage = lazy(() => import('../components/am/requestRelative/common/bussinessTransit/AssetChangeOverPage'));
const AssetExpandRequest = lazy(() => import('../components/am/requestRelative/assetExpandRequest/AssetExpandRequest'));
const TestExpandLineItem = lazy(() => import('../components/am/requestRelative/assetExpandRequest/componentTest/TestExpandLineItem'));
const AssetProvisionalRequest = lazy(() => import('../components/am/requestRelative/assetProvisionalRequest/AssetProvisionalRequest'));
const AssetProvisionalRealRequest = lazy(() => import('../components/am/requestRelative/assetProvisionalRealRequest/AssetProvisionalRealRequest'));
const AssetConstructionRequest = lazy(() => import('../components/am/requestRelative/assetTransformRequest/AssetConstructionRequest'));
const TestResearchLineItem = lazy(() => import('../components/am/requestRelative/assetTransformRequest/componentTest/TestResearchLineItem'));
const TestSupplierDetailItem = lazy(() => import('../components/am/requestRelative/assetProvisionalRequest/componentTest/TestSupplierDetailItem'));
const AssetAllotRequest = lazy(() => import('../components/am/requestRelative/assetAllotItem/AssetAllotRequest'));
const RegulatoryType = lazy(() => import('../components/am/regulatoryType'));
const AssetBusiness = lazy(() => import('../components/am/assetBusiness'));
const DepreciationTime = lazy(() => import('../components/am/depreciationTime'));
const AssetTransactionType = lazy(() => import('../components/am/assetTransactionType'));
const AssetClassification = lazy(() => import('../components/am/assetClassification'));
const AccountingDocConfigure = lazy(() => import('../components/am/accountingDocConfigure'));
const accountingDocConfigureNew = lazy(() => import('../components/am/accountingDocConfigureNew'));
const AssetAllotInterFaceConfig = lazy(() => import('../components/am/assetAllotInterFaceConfig/index'));
const AssetFlowConfig = lazy(() => import('../components/am/assetFlowConfig/index'));
const NetImpairmentControl = lazy(() => import('../components/am/netImpairmentControl/index'));
const AssetFee = lazy(() => import('../components/am/assetFee'));
const AssetTransferRequest = lazy(() => import('../components/am/requestRelative/assetTransferRequest/AssetTransferRequest'));
const  CashFlowConfig=lazy(()=> import('../components/am/cashFlowConfig/index'));
const AssetContractInfo = lazy(() => import('../components/am/requestRelative/common/bussinessCards/contractInfo/index'));
const ContractTransitPage = lazy(() => import('../components/am/requestRelative/common/bussinessTransit/contractInfo/ContractTransitPage'));

const CollectionAccount = lazy(() => import('../components/cm/collectionAccount/index.js'));
const CollectionType = lazy(() => import('../components/cm/collectionType/index.js'));
const ReCollectionRequest = lazy(() => import('../components/cm/reCollectionRequest/index'));
const CpAddOrEditPage = lazy(() => import('../components/cm/reCollectionRequest/orderList/CpAddOrEditPage'));
const ApproveReCollectionRequest = lazy(() => import('../components/cm/approve/ApproveReCollectionRequest'));
const ApproveReCollectionRequestPage = lazy(() => import('../components/cm/approve/ApproveReCollectionRequestPage'));
const ApproveReCollectionRequestEdit = lazy(() => import('../components/cm/approve/ApproveReCollectionRequestEdit'));
const ApproveReCollectionRequestEditPage = lazy(() => import('../components/cm/approve/ApproveReCollectionRequestEditPage'));
const ApproveReCollectionRequestFunds = lazy(() => import('../components/cm/approve/ApproveReCollectionRequestFunds'));
const CollectionDetail = lazy(() => import('../components/cm/collectionDetail/index'));
const CmDetailCard = lazy(() => import('../components/cm/collectionDetail/CmDetailCard'));
const InvoiceRequest = lazy(() => import('../components/bm/index'));
const ApproveBmRequest = lazy(() => import('../components/bm/approve/ApproveBmRequest'));
const ApproveBmRequestEdit = lazy(() => import('../components/bm/approve/ApproveBmRequestEdit'));
const ApproveBmAccounting = lazy(() => import('../components/bm/approve/ApproveBmAccounting'));
const ApproveBmTax = lazy(() => import('../components/bm/approve/ApproveBmTax'));
const ShowDetail = lazy(() => import('../components/bm/approve/ShowDetail'));
const BusinessTypes = lazy(() => import('../components/bm/BusinessTypes/index'));
const InvoiceDetailView = lazy(() => import('../components/bm/components/views/InvoiceDetailView'));
const DivideIndex = lazy(() => import('../components/bm/DivideIndex'));

const ProvisionType = lazy(() => import('../components/wm/provisionType/index'));
const ProvisionRequest = lazy(() => import('../components/wm/provisionRequest/index'));
const ProvisionRequestWag = lazy(() => import('../components/wm/provisionRequest/ProvisionRequestWag'));
const ProvisionRequestHand = lazy(() => import('../components/wm/provisionRequest/ProvisionRequestHand'));
const WmAddOrEditPage = lazy(() => import('../components/wm/provisionRequest/orderList/WmAddOrEditPage'));
const WriteOffProvisionRequest = lazy(() => import('../components/wm/writeOffProvisionRequest/index'));
const ApproveWmRequest = lazy(() => import('../components/wm/approve/ApproveWmRequest'));
const ApproveWmRequestPage = lazy(() => import('../components/wm/approve/ApproveWmRequestPage'));
const ApproveWmRequestEdit = lazy(() => import('../components/wm/approve/ApproveWmRequestEdit'));
const WmShowDetail = lazy(() => import('../components/wm/approve/ShowDetail'));
const ApproveWmRequestAccounting = lazy(() => import('../components/wm/approve/ApproveWmRequestAccounting'));
const ApproveWmRequestEditSponsor = lazy(() => import('../components/wm/approve/ApproveWmRequestEditSponsor'));

const ApprovePmRequestEdit = lazy(() => import('../components/pm/repayRequest/approve/ApprovePmRequestEdit'));
const ApprovePmRequestPage = lazy(() => import('../components/pm/repayRequest/approve/ApprovePmRequestPage'));
const ApprovePmRequestForBill = lazy(() => import('../components/pm/repayRequest/approve/ApprovePmRequestForBill'));
const ApprovePmRequestForBookBalance = lazy(() => import('../components/pm/repayRequest/approve/ApprovePmRequestForBookBalance'));
const ApprovePmRequestForContract = lazy(() => import('../components/pm/repayRequest/approve/ApprovePmRequestForContract'));
const ApprovePmRequestForCostMoney = lazy(() => import('../components/pm/repayRequest/approve/ApprovePmRequestForCostMoney'));
const ApprovePmRequestForBookBalanceAndCostMoney = lazy(() => import('../components/pm/repayRequest/approve/ApprovePmRequestForBookBalanceAndCostMoney'));
const PmRequestPageForVoucherDetail = lazy(() => import('../components/pm/repayRequest/approve/PmRequestPageForVoucherDetail'));
const EditTaxModal = lazy(() => import('../components/pm/repayRequest/orderList/EditTaxModal'));
const PaymentPool = lazy(() => import('../components/pm/paymentPool/index'));
const AddPaymentModal = lazy(() => import('../components/pm/repayRequest/orderList/AddPaymentModal'));
const ApprovePmRequest = lazy(() => import('../components/pm/repayRequest/approve/ApprovePmRequest'));
const TaxRateType = lazy(() => import('../components/pm/TaxRateType/index'));
const RepayRequest = lazy(() => import('../components/pm/repayRequest/index'));
const PmAddOrEditPage = lazy(() => import('../components/pm/repayRequest/orderList/PmAddOrEditPage'));
const NaturePayment = lazy(() => import('../components/pm/naturePayment/index.js'));
const PaymentAccount = lazy(() => import('../components/pm/paymentAccount/index.js'));
const PmRequestPageForCreditPage = lazy(() => import('../components/pm/repayRequest/approve/PmRequestPageForCreditPage'));
const ApprovePmRequestPageForCreditPage = lazy(() => import('../components/pm/repayRequest/approve/ApprovePmRequestPageForCreditPage'));
const PmRequestPageForCreditEditPage = lazy(() => import('../components/pm/repayRequest/approve/PmRequestPageForCreditEditPage'));
const ApprovePmRequestPageForCreditEditPage = lazy(() => import('../components/pm/repayRequest/approve/ApprovePmRequestPageForCreditEditPage'));
const ApprovePmDetailPage = lazy(() => import('../components/pm/repayRequest/approve/ApprovePmDetailPage'));
//薪酬相关
const SalaryPaymentPool = lazy(() => import('../components/sm/paymentPool/SalaryPaymentPool'));
const SalaryElement = lazy(() => import('../components/sm/salaryElement/index'));
const SalaryType = lazy(() => import('../components/sm/salaryType/index'));
const SalaryTypeElement = lazy(() => import('../components/sm/salaryTypeElement/index'));
const DeductionRatio = lazy(() => import('../components/sm/deductionRatio/index'));
const SalaryAccountConfig = lazy(() => import('../components/sm/salaryAccountConfig/index'));
const PayIndex = lazy(() => import('../components/sm/pay/index'));
const ApprovePayOrderApprove = lazy(() => import('../components/sm/pay/approve/ApprovePayOrderApprove'));
const ApprovePayOrderEdit = lazy(() => import('../components/sm/pay/approve/ApprovePayOrderEdit'));
const PayOrderAddOrEditPage = lazy(() => import('../components/sm/pay/orderList/AddOrEditPage'));
const PayOrderView = lazy(() => import('../components/sm/pay/orderList/PayOrderView'));

const LedgerBankAccountImport = lazy(() => import('../components/import/fim/LedgerBankAccount/index'));
const OrderSync = lazy(() => import('../components/import/OrderSync/index'));
const SyncHrPersonByPno = lazy(() => import('../components/import/SyncHrPersonByPno/index'));
const PaymentInfoImport = lazy(() => import('../components/import/fim/PaymentInfoImport/index'));
const PersonInfoQuery = lazy(() => import('../components/import/PersonInfoQuery/index'));
const BusinessActivityTypeImport = lazy(() => import('../components/import/fim/BusinessActivityTypeImport/index'));
const ActBusinessActivityTypeImport = lazy(() => import('../components/import/act/ActBusinessActivityTypeImport/index'));
const ActItemImport = lazy(() => import('../components/import/act/ActItemImport/index'));
const GainCostDataImport = lazy(() => import('../components/import/fim/GainCostDataImport/index'));

const TrafficType = lazy(() => import('../components/import/act/TrafficType/index'));
const RepayType = lazy(() => import('../components/import/act/RepayType/index'));
const BorrowType = lazy(() => import('../components/import/act/BorrowType/index'));
const PaymentType = lazy(() => import('../components/import/act/PaymentType/index'));
const BusinessRequestTypeImport = lazy(() => import('../components/import/act/BusinessRequestTypeImport/index'));
const ReimbursementTypeImport = lazy(() => import('../components/import/act/ReimbursementTypeImport/index'));
const NowDispose = lazy(() => import('../components/import/act/ActBusinessActivityTypeImport/nowDispose'));
const Configuration = lazy(() => import('../components/import/act/CommonConfiguration/index'));
const BusinessActivityTypeAccountConfigImport = lazy(() => import('../components/import/act/BusinessActivityTypeAccountConfigImport/index'));
const TravelSubsidy = lazy(() => import('../components/import/act/TravelSubsidy/index'))
const BudgetItemImport = lazy(() => import('../components/import/bgt/BudgetItemImport/index')) 
const AssetFlowConfigImport = lazy(() => import('../components/import/am/AssetFlowConfigImport/index'))
const OrganizationAccountConfigImport = lazy(() => import('../components/import/fim/OrganizationAccountConfigImport/index'))
const PaymentNatureImport = lazy(() => import('../components/import/bm/PaymentNatureImport/index'))
const CollectionAccountingConfImport = lazy(() => import('../components/import/bm/CollectionAccountingConfImport/index'))
const PaymentAccountingConfImport = lazy(() => import('../components/import/bm/PaymentAccountingConfImport/index'))
const CollectionNatureImport = lazy(() => import('../components/import/bm/CollectionNatureImport/index'))
const DeductionRatioImport = lazy(() => import('../components/import/sm/DeductionRatioImport/index'))
const SalaryTypeImport = lazy(() => import('../components/import/sm/SalaryTypeImport/index'))
const OrgImport = lazy(() => import('../components/import/fim/OrgImport/index'))  
const CorpAccountingConfigImport =  lazy(() => import('../components/import/fim/CorpAccountingConfigImport/index'))
const SalaryAccountConfigImport = lazy(() => import('../components/import/sm/SalaryAccountConfigImport/index'))
const SalaryElementImport = lazy(() => import('../components/import/sm/SalaryElementImport/index'))
const FeatureImport = lazy(() => import('../components/import/fim/FeatureImport/index'))
const DataImport = lazy(() => import('../components/import/fim/DataImport/index'))
const BudgetPeriodImport = lazy(() => import('../components/import/bgt/BudgetPeriodImport/index'))
const WorkerCategoryImport = lazy(() => import('../components/import/soms/WorkerCategoryImport/index'))
const CityGradeImport = lazy(() => import('../components/import/baf/CityGradeImport/index'))
const PositionImport = lazy(() => import('../components/import/fim/PositionImport/index'))
const CashFlowConfigImport = lazy(() => import('../components/import/am/CashFlowConfigImport/index'))
const SettlementTypemport = lazy(() => import('../components/import/fim/SettlementTypemport/index'))
const PersonnelGradeImport = lazy(() => import('../components/import/baf/PersonnelGradeImport/index'))
const AllotWorkStrategyImport = lazy(() => import('../components/import/soms/AllotWorkStrategyImport/index'))
const AbilityGroupMemberImport = lazy(() => import('../components/import/soms/AbilityGroupMemberImport/index'))
const AccountingDocConfigureImport = lazy(() => import('../components/import/am/AccountingDocConfigureImport/index'))
const BudgetTypeImport = lazy(() => import('../components/import/bgt/BudgetTypeImport/index'))
const Person = lazy(()=>import('../components/person/index.jsx'));
const SaleMarket = lazy(()=>import('../components/import/act/SaleMarketQuery/index.jsx'));
const CostGenerationStage = lazy(()=>import('../components/import/act/CostGenerationStageQuery/index.jsx'));
const OrgWithAccountConfigQuery = lazy(()=>import('../components/import/baf/OrgWithAccountConfigQuery/index.jsx'));

//附件预览
const FilePreview = lazy(()=>import('../commons/components/OrderFileUpload/FilePreview/index'));

export default class Routers extends Component {
    render() {
        return (
            <Router basename="/react-bdm-web">
                <Suspense
                    fallback={<Spin/>}
                >
                    <Switch>
                        <Route path="/" exact component={Login}/>
                        <Route path='/index' component={IndexView}/>
                        <Route path="/Demo" exact component={Demo}/>
                        <Route path="/Unit" exact component={Unit}/>

                        <Route path="/RegulatoryType" exact component={RegulatoryType}/>
                        <Route path="/AssetBusiness" exact component={AssetBusiness}/>
                        <Route path="/DepreciationTime" exact component={DepreciationTime}/>
                        <Route path="/AssetTransactionType" exact component={AssetTransactionType}/>
                        <Route path="/AssetClassification" exact component={AssetClassification}/>
                        <Route path="/AccountingDocConfigure" exact component={AccountingDocConfigure}/>
                        <Route path="/accountingDocConfigureNew" exact component={accountingDocConfigureNew}/>
                        <Route path="/AssetFee" exact component={AssetFee}/>
                        <Route path="/TestExpandLineItem" exact component={TestExpandLineItem}/>
                        <Route path="/CashFlowConfig" exact component={CashFlowConfig}/>

                        <Route path="/CollectionAccount" exact component={CollectionAccount}/>
                        <Route path="/CollectionType" exact component={CollectionType}/>
                        <Route path="/ReCollectionRequest" exact component={ReCollectionRequest}/>
                        <Route path="/CpAddOrEditPage" exact component={CpAddOrEditPage}/>
                        <Route path="/CollectionDetail" exact component={CollectionDetail}/>
                        <Route path="/CmDetailCard" exact component={CmDetailCard}/>
                        <Route path="/ApproveReCollectionRequest" exact component={ApproveReCollectionRequest}/>
                        <Route path="/ApproveReCollectionRequestPage" exact component={ApproveReCollectionRequestPage}/>
                        <Route path="/ApproveReCollectionRequestEdit" exact component={ApproveReCollectionRequestEdit}/>
                        <Route path="/ApproveReCollectionRequestEditPage" exact component={ApproveReCollectionRequestEditPage}/>
                        <Route path="/ApproveReCollectionRequestFunds" exact component={ApproveReCollectionRequestFunds}/>

                        <Route path="/InvoiceRequest" exact component={InvoiceRequest}/>
                        <Route path="/ApproveBmRequest" exact component={ApproveBmRequest}/>
                        <Route path="/ApproveBmRequestEdit" exact component={ApproveBmRequestEdit}/>
                        <Route path="/BusinessTypes" exact component={BusinessTypes}/>
                        <Route path="/InvoiceDetailView" exact component={InvoiceDetailView}/>
                        <Route path="/ShowDetail" exact component={ShowDetail}/>
                        <Route path="/ApproveBmAccounting" exact component={ApproveBmAccounting}/>
                        <Route path="/ApproveBmTax" exact component={ApproveBmTax}/>
                        <Route path="/DivideIndex" exact component={DivideIndex}/>

                        <Route path="/NaturePayment" exact component={NaturePayment}/>
                        <Route path="/PaymentAccount" exact component={PaymentAccount}/>
                        <Route path="/RepayRequest" exact component={RepayRequest}/>
                        <Route path="/PmAddOrEditPage" exact component={PmAddOrEditPage}/>

                        <Route path="/ProvisionType" exact component={ProvisionType}/>
                        <Route path="/ProvisionRequest" exact component={ProvisionRequest}/>
                        <Route path="/ProvisionRequestWag" exact component={ProvisionRequestWag}/>
                        <Route path="/ProvisionRequestHand" exact component={ProvisionRequestHand}/>
                        <Route path="/WmAddOrEditPage" exact component={WmAddOrEditPage}/>
                        <Route path="/WriteOffProvisionRequest" exact component={WriteOffProvisionRequest}/>
                        <Route path="/ApproveWmRequest" exact component={ApproveWmRequest}/>
                        <Route path="/ApproveWmRequestPage" exact component={ApproveWmRequestPage}/>
                        <Route path="/ApproveWmRequestEdit" exact component={ApproveWmRequestEdit}/>
                        <Route path="/ApproveWmRequestAccounting" exact component={ApproveWmRequestAccounting}/>
                        <Route path="/ApproveWmRequestEditSponsor" exact component={ApproveWmRequestEditSponsor}/>
                        <Route path="/WmShowDetail" exact component={WmShowDetail}/>
                        <Route path="/ApprovePmDetailPage" exact component={ApprovePmDetailPage}/>
                        <Route path="/TaxRateType" exact component={TaxRateType}/>
                        <Route path="/EditTaxModal" exact component={EditTaxModal}/>
                        <Route path="/ApprovePmRequest" exact component={ApprovePmRequest}/>
                        <Route path="/ApprovePmRequestEdit" exact component={ApprovePmRequestEdit}/>
                        <Route path="/ApprovePmRequestPage" exact component={ApprovePmRequestPage}/>
                        <Route path="/AddPaymentModal" exact component={AddPaymentModal}/>
                        <Route path="/ApprovePmRequestForBookBalance" exact component={ApprovePmRequestForBookBalance}/>
                        <Route path="/ApprovePmRequestForBill" exact component={ApprovePmRequestForBill}/>
                        <Route path="/ApprovePmRequestForContract" exact component={ApprovePmRequestForContract}/>
                        <Route path="/ApprovePmRequestForCostMoney" exact component={ApprovePmRequestForCostMoney}/>
                        <Route path="/ApprovePmRequestForBookBalanceAndCostMoney" exact
                               component={ApprovePmRequestForBookBalanceAndCostMoney}/>
                        <Route path="/PmRequestPageForVoucherDetail" exact component={PmRequestPageForVoucherDetail}/>
                        <Route path="/PaymentPool" exact component={PaymentPool}/>
                        <Route path="/PmRequestPageForCreditEditPage" exact component={PmRequestPageForCreditEditPage}/>
                        <Route path="/ApprovePmRequestPageForCreditPage" exact
                               component={ApprovePmRequestPageForCreditPage}/>
                        <Route path="/PmRequestPageForCreditPage" exact component={PmRequestPageForCreditPage}/>
                        <Route path="/ApprovePmRequestPageForCreditEditPage" exact
                               component={ApprovePmRequestPageForCreditEditPage}/>
                        {/*薪酬主数据与相关页面*/}
                        <Route path="/SalaryPaymentPool" exact component={SalaryPaymentPool}/>
                        <Route path="/SalaryElement" exact component={SalaryElement}/>
                        <Route path="/SalaryType" exact component={SalaryType}/>
                        <Route path="/SalaryTypeElement" exact component={SalaryTypeElement}/>
                        <Route path="/PayOrderAddOrEditPage" exact component={PayOrderAddOrEditPage}/>
                        <Route path="/SalaryAccountConfig" exact component={SalaryAccountConfig}/>
                        <Route path="/DeductionRatio" exact component={DeductionRatio}/>
                        <Route path="/AssetPurchasingRequest" exact component={AssetPurchasingRequest}/>
                        <Route path="/RequestTransitPage" exact component={RequestTransitPage}/>
                        <Route path="/AssetChangeOverPage" exact component={AssetChangeOverPage}/>
                        {/*社保缴纳*/}
                        <Route path="/SocialSecurityPay" exact component={PayIndex} componentProps={{requestType: 'socialSecurityPay'}}/>
                        {/*工资分配*/}
                        <Route path="/SalaryDistribute" exact component={PayIndex}
                               componentProps={{requestType: 'salaryDistribute'}}/>
                        {/*代缴结算*/}
                        <Route path="/SubstituteSettlement" exact component={PayIndex}
                               componentProps={{requestType: 'substituteSettlement'}}/>
                        {/*工资发放*/}
                        <Route path="/SalaryGrant" exact component={PayIndex}
                               componentProps={{requestType: 'salaryGrant'}}/>
                        {/*社保报销分配*/}
                        <Route path="/SocialSecurityDistribute" exact component={PayIndex}
                               componentProps={{requestType: 'socialSecurityDistribute'}}/>
                        {/*个人社保补缴*/}
                        <Route path="/SocialSecurityPayBack" exact component={PayIndex}
                               componentProps={{requestType: 'socialSecurityPayBack'}}/>
                        {/*社保缴纳、社保分配、公司发放、工资分配、代缴结算、补缴流程页面*/}
                        <Route path="/ApprovePayOrderApprove" exact component={ApprovePayOrderApprove}/>
                        <Route path="/ApprovePayOrderEdit" exact component={ApprovePayOrderEdit}/>
                        {/*个人社保补缴流程页面*/}
                        <Route path="/ApprovePayBackHREdit" exact component={ApprovePayOrderEdit}
                               componentProps={{requestType: 'socialSecurityPayBack',node:'hrApprove'}}/>
                        <Route path="/ApprovePayBackEdit" exact component={ApprovePayOrderEdit}
                               componentProps={{requestType: 'socialSecurityPayBack',node:'payBackEdit'}}/>
                        <Route path="/ApprovePayBackEditSelf" exact component={ApprovePayOrderEdit}
                               componentProps={{requestType: 'socialSecurityPayBack',node:'payBackEditSelf'}}/>
                        {/*薪酬业务单据（社保缴纳、社保分配、公司发放、工资分配、代缴结算、个人社保补缴）查看页面（有滚动条）*/}
                        <Route path="/PayOrderView" exact component={PayOrderView}/>
                        {/*流程组件包裹的单据页面（无滚动条）*/}
                        <Route path="/PayOrderViewInFlow" exact component={PayOrderView} componentProps={{hasScroll: false}}/>
                        {/*薪酬业务单据（个人社保补缴）业务单据查看页面*/}
                        <Route path="/PayBackView" exact component={PayOrderView} componentProps={{requestType: 'socialSecurityPayBack'}}/>

                        <Route path="/AssetExpandRequest" exact component={AssetExpandRequest}/>
                        <Route path="/PayOrderView" exact component={PayOrderView}/>
                        <Route path="/TestPurchaseLineItem" exact component={TestPurchaseLineItem}/>
                        <Route path="/TestSupplierLineItem" exact component={TestSupplierLineItem}/>
                        <Route path="/TestTaxRateItem" exact component={TestTaxRateItem}/>
                        <Route path="/AssetProvisionalRequest" exact component={AssetProvisionalRequest}/>
                        <Route path="/AssetRetireRequest" exact component={AssetRetireRequest}/>
                        <Route path="/AssetHandleRequest" exact component={AssetHandleRequest}/>
                        <Route path="/AssetConstructionRequest" exact component={AssetConstructionRequest}/>
                        <Route path="/AssetDesignRequest" exact component={AssetDesignRequest}/>
                        <Route path="/TestResearchLineItem" exact component={TestResearchLineItem}/>
                        <Route path="/TestSupplierDetailItem" exact component={TestSupplierDetailItem}/>
                        <Route path="/AssetAllotRequest" exact component={AssetAllotRequest}/>
                        <Route path="/AssetTransferRequest" exact component={AssetTransferRequest}/>
                        <Route path="/AssetProvisionalRealRequest" exact component={AssetProvisionalRealRequest}/>
                        <Route path="/AssetDetailApprovePage" exact component={AssetDetailApprovePage}/>
                        <Route path="/AssetEditApprove" exact component={AssetEditApprove}/>
                        <Route path="/AssetEditApprovePage" exact component={AssetEditApprovePage}/>
                        <Route path="/AssetDetailApprove" exact component={AssetDetailApprove}/>
                        {/*资产调拨经办人调入页面*/}
                        <Route path="/AssetEditApproveForIntoAllot" exact component={AssetEditApproveForIntoAllot}/>
                        {/*资产调拨园区财务调入页面*/}
                        <Route path="/AssetEditApproveForIntoParkFinance" exact component={AssetEditApproveForIntoParkFinance}/>
                        {/*资产调拨单位财务调入页面*/}
                        <Route path="/AssetEditApproveForIntoUnitFinance" exact component={AssetEditApproveForIntoUnitFinance}/>
                        {/*资产调拨园区财务页面*/}
                        <Route path="/AssetEditApproveForParkFinance" exact component={AssetEditApproveForParkFinance}/>
                        {/*资产调拨园区财务页面*/}
                        <Route path="/AssetEditApproveForUnitFinance" exact component={AssetEditApproveForUnitFinance}/>
                        {/*资产采购单位财务审票页面*/}
                        <Route path="/AssetEditApproveForUnitFinanceTicket" exact component={AssetEditApproveForUnitFinanceTicket}/>
                        <Route path="/PrintPm" exact component={PrintPm}/>
                        <Route path="/NetImpairmentControl" exact component={NetImpairmentControl}/>
                        <Route path="/AssetAllotInterFaceConfig" exact component={AssetAllotInterFaceConfig}/>
                        <Route path="/AssetFlowConfig" exact component={AssetFlowConfig}/>
                        <Route path="/EnterpriseUserView" exact component={EnterpriseUserView}/>
                        <Route path="/AssetIntoDetailApprove" exact component={AssetIntoDetailApprove}/>
                        <Route path="/ContractMainManage" exact component={ContractMainManage}/>
                        <Route path="/PmAddOrEditPageForContract" exact component={PmAddOrEditPageForContract}/>
                        <Route path="/ChoosePaymentTypeModal" exact component={ChoosePaymentTypeModal}/>
                        <Route path="/PaymentForContract" exact component={PaymentForContract}/>
                        <Route path="/AssetContractInfo" exact component={AssetContractInfo}/>
                        <Route path="/ContractTransitPage" exact component={ContractTransitPage}/>
                        <Route path="/AssetItemDetailPage" exact component={AssetItemDetailPage}/>
                        <Route path="/AssetEditApproveForRetirement" exact component={AssetEditApproveForRetirement}/>
                        <Route path="/LedgerBankAccountImport" exact component={LedgerBankAccountImport}/>
                        <Route path="/OrderSync" exact component={OrderSync}/>
                        <Route path="/SyncHrPersonByPno" exact component={SyncHrPersonByPno}/>
                        <Route path="/PaymentInfoImport" exact component={PaymentInfoImport}/>
                        <Route path="/PersonInfoQuery" exact component={PersonInfoQuery}/>
                        <Route path="/BusinessActivityTypeImport" exact component={BusinessActivityTypeImport}/>
                        <Route path="/GainCostDataImport" exact component={GainCostDataImport}/>
                        <Route path="/ActBusinessActivityTypeImport" exact component={ActBusinessActivityTypeImport}/>
                        <Route path="/ActItemImport" exact component={ActItemImport}/>
                        <Route path="/TrafficType" exact component={TrafficType}/>
                        <Route path="/RepayType" exact component={RepayType}/>
                        <Route path="/BorrowType" exact component={BorrowType}/>
                        <Route path="/PaymentType" exact component={PaymentType}/>
                        <Route path="/BusinessRequestTypeImport" exact component={BusinessRequestTypeImport}/>
                        <Route path="/ReimbursementTypeImport" exact component={ReimbursementTypeImport}/>
                        <Route path="/BusinessActivityTypeAccountConfigImport" exact component={BusinessActivityTypeAccountConfigImport}/>
                        <Route path="/nowDispose" exact component={NowDispose}/>
                        <Route path="/Configuration" exact component={Configuration}/>
                        <Route path="/TravelSubsidy" exact component={TravelSubsidy}/>
                        <Route path="/BudgetItemImport" exact component={BudgetItemImport}/>
                        <Route path="/AssetFlowConfigImport" exact component={AssetFlowConfigImport}/>
                        <Route path="/OrganizationAccountConfigImport" exact component={OrganizationAccountConfigImport}/>
                        <Route path="/CollectionNatureImport" exact component={CollectionNatureImport}/>
                        <Route path="/CollectionAccountingConfImport" exact component={CollectionAccountingConfImport}/>
                        <Route path="/PaymentNatureImport" exact component={PaymentNatureImport}/>
                        <Route path="/PaymentAccountingConfImport" exact component={PaymentAccountingConfImport}/>
                        <Route path="/DeductionRatioImport" exact component={DeductionRatioImport}/>
                        <Route path="/SalaryTypeImport" exact component={SalaryTypeImport}/>
                        <Route path="/OrgImport" exact component={OrgImport}/>     
                        <Route path="/CorpAccountingConfigImport" exact component={CorpAccountingConfigImport}/>
                        <Route path="/SalaryAccountConfigImport" exact component={SalaryAccountConfigImport}/>
                        <Route path="/SalaryElementImport" exact component={SalaryElementImport}/>
                        
                        <Route path="/FeatureImport" exact component={FeatureImport}/>
                        <Route path="/DataImport" exact component={DataImport}/>
                        <Route path="/BudgetPeriodImport" exact component={BudgetPeriodImport}/>
                        <Route path="/WorkerCategoryImport" exact component={WorkerCategoryImport}/>
                        <Route path="/CityGradeImport" exact component={CityGradeImport}/>
                        <Route path="/PositionImport" exact component={PositionImport}/>
                        <Route path="/CashFlowConfigImport" exact component={CashFlowConfigImport}/>
                        <Route path="/SettlementTypemport" exact component={SettlementTypemport}/>
                        <Route path="/PersonnelGradeImport" exact component={PersonnelGradeImport}/>
                        <Route path="/AllotWorkStrategyImport" exact component={AllotWorkStrategyImport}/>
                        <Route path="/AbilityGroupMemberImport" exact component={AbilityGroupMemberImport}/>
                        <Route path="/AccountingDocConfigureImport" exact component={AccountingDocConfigureImport}/>
                        <Route path="/BudgetTypeImport" exact component={BudgetTypeImport}/>
                        <Route path='/Person/show' exact component={Person}/>

                        <Route path='/SaleMarket' exact component={SaleMarket}/>

                        <Route path='/CostGenerationStage' exact component={CostGenerationStage}/>
                        <Route path='/OrgWithAccountConfigQuery' exact component={OrgWithAccountConfigQuery}/>
                        <Route path='/FilePreview' exact component={FilePreview} />
                    </Switch>
                </Suspense>
            </Router>

        );
    }
}
