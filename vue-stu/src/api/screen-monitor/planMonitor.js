import { bigScreenAppApiWrapper } from './deliveryMonitor'

// 生产总览
export const getProductTotal = (param) => {
    return bigScreenAppApiWrapper({
        url: '/dws/api/production/product/total',
        param
    })
}

// 工厂生产完成率
export const getProductByFactory = (param) => {
    return bigScreenAppApiWrapper({
        url: '/dws/api/production/product/factory',
        param
    })
}

// 产品生产完成率
export const getProductByModel = (param) => {
    return bigScreenAppApiWrapper({
        url: '/dws/api/production/product/model',
        param
    })
}

// 基地生产完成率
export const getProductByBase = (param) => {
    return bigScreenAppApiWrapper({
        url: '/dws/api/production/product/basedetail',
        param
    })
}

// 工厂产品交付明细数据
export const getProductMaterialdetail = (param) => {
    return bigScreenAppApiWrapper({
        url: '/dws/api/production/product/materialdetail',
        param
    })
}