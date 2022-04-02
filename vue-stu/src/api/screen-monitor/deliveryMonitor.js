
export function bigScreenAppApiWrapper(params) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([])
        }, 100);
    })
}

// 获取所有基地
export const getAllBase = (data) => {
    return bigScreenAppApiWrapper({
        url: '/dws/api/dim/base',
        data
    })
}

// 获取所有工厂
export const getAllFactory = (param) => {
    return bigScreenAppApiWrapper({
        url: '/dws/api/dim/user_factory',
        param
    })
}

// 获取电芯/模组/pack
export const getProductType = (data) => {
    return bigScreenAppApiWrapper({
        url: '/dws/api/dim/product_type',
        data
    })
}

// 获取交付件数&GWh
export const getTotalNums = (param) => {
    return bigScreenAppApiWrapper({
        url: '/dws/api/production/delivery/total',
        param
    })
}

// 获取基地交付情况
export const getDeliveryByFactory = (param) => {
    return bigScreenAppApiWrapper({
        url: '/dws/api/production/delivery/base',
        param
    })
}
// 获取产品交付情况
export const getDeliveryByProduction = (param) => {
    return bigScreenAppApiWrapper({
        url: '/dws/api/production/delivery/model',
        param
    })
}

// 按客户已交付数量
export const getDeliveryByCustomer = (param) => {
    return bigScreenAppApiWrapper({
        url: '/dws/api/production/delivery/customer',
        param
    })
}

// 基地产品交付数据
export const getDeliveryByFactoryAndProduction = (param) => {
    return bigScreenAppApiWrapper({
        url: '/dws/api/production/delivery/baseproduct',
        param
    })
}

