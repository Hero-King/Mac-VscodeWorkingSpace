import {seiLocale} from 'sei-utils';
import moment from 'moment';
import 'moment/locale/zh-cn'

const { getLocales, seiIntl, getLocale } = seiLocale;

function initLocalLocals() {
    const locales = getLocales();
    const locale = getLocale();
    seiIntl.init({
        currentLocale: locales.locale,
    });
    locales.momentLocale && moment.locale(locales.momentLocale);
    return {
        antdLocale: locales.antd,
        momentLocale: locales.momentLocale,
        seidLocale: locales.locale,
    };
}

const SHOW = 'SHOW';
const HIDE = 'HIDE';
const SETLANGUAGE= 'SETLANGUAGE';
const defaultState = {
    loadings:false,
}
export default function (state, action) {
    if (!state) {
        state = defaultState
    }
    switch (action.type) {
        case SHOW:
            return{
                ...state,
                loadings:true
            }
        case HIDE:{
            return{
                ...state,
                loadings:false
            }
        }
        case SETLANGUAGE: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default:
            return state
    }
}

export const show =() => {
    let loadings = true
    return { type: 'SHOW', loadings }
}

export const hide =() => {
    let loadings = false
    return { type: 'HIDE', loadings }
}

export const setLanguage =() => {
    return { type: 'SETLANGUAGE', payload: initLocalLocals() }
}
