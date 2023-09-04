/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 电价设置
 */
export type ElectricityPriceSetting = {
    /**
     * 电价设置id唯一主键
     */
    id?: number;
    /**
     * 时间(年月)
     */
    usedDate?: string;
    /**
     * 平段时间段
     */
    normalTime?: string;
    /**
     * 平段价格(合计)
     */
    normalPrice?: number;
    /**
     * 市场交易购电价格
     */
    normalTracePrice?: number;
    /**
     * 基金附加
     */
    normalFundExtraPrice?: number;
    /**
     * 输配价格
     */
    normalTransportPrice?: number;
    /**
     * 分摊损失价格
     */
    normalLossPrice?: number;
    /**
     * 谷时时间段
     */
    valleyTime?: string;
    /**
     * 谷时价格
     */
    valleyPrice?: number;
    /**
     * 峰时时间段
     */
    peakTime?: string;
    /**
     * 峰时价格
     */
    peakPrice?: number;
    /**
     * 尖峰时间段
     */
    topTime?: string;
    /**
     * 尖峰价格
     */
    topPrice?: number;
    /**
     * 尖峰加价价格
     */
    topPriceExtra?: number;
    /**
     * 基地id
     */
    topParentId: number;
    /**
     * 能源编号(电)
     */
    energyCode?: string;
    /**
     * 创建人id
     */
    createBy?: string;
    /**
     * 创建时间
     */
    createTime?: string;
    /**
     * 更新人id
     */
    updateBy?: string;
    /**
     * 更新时间
     */
    updateTime?: string;
    /**
     * 租户id
     */
    tenantId?: number;
};
