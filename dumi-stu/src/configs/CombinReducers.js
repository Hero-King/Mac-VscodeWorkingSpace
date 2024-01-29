/**
 * Created by liusonglin on 2018/7/13.
 */
import {combineReducers} from "redux";
import SharedReducer from './SharedReducer'
import ProvisionReducer from '../components/wm/provisionRequest/redux/reducer';
import bmReducer from '../components/bm/redux/reducer';
import PmReducer from "../components/pm/repayRequest/reducer/PmReducer";
import PmContractReducer from "../components/pm/repayRequestForContract/reducer/PmContractReducer";

export const CombineReducer = combineReducers({
    SharedReducer,ProvisionReducer,bmReducer,PmReducer,PmContractReducer
});
