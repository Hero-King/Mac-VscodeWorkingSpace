/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 检定管理分页视图对象
 */
export type MeterInspectionVO = {
    /**
     * id
     */
    id?: number;
    /**
     * 表记id
     */
    mesterId?: number;
    /**
     * 表计状态
     */
    status?: string;
    /**
     * 证书编号
     */
    certificateNumber?: string;
    /**
     * 校验依据
     */
    inspectionBasis?: string;
    /**
     * 校验结论
     */
    inspectionConclusion?: string;
    /**
     * 校验员
     */
    inspectorsName?: string;
    /**
     * 校验时间
     */
    inspectionTime?: string;
    /**
     * 校验单位
     */
    inspectionUnitName?: string;
    /**
     * 文件名称
     */
    fileName?: string;
    /**
     * 文件地址
     */
    fileUrl?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 有效日期
     */
    expirationTime?: string;
    /**
     * 创建人
     */
    createBy?: string;
    /**
     * 创建时间
     */
    createTime?: string;
    /**
     * 更新人
     */
    updateBy?: string;
    /**
     * 更新时间
     */
    updateTime?: string;
    /**
     * 管理分类
     */
    classification?: string;
    /**
     * 租户id
     */
    tenantId?: number;
    lineNum?: number;
    /**
     * 厂内编号
     */
    deviceMark?: string;
    /**
     * 表计名称
     */
    deviceName?: string;
    /**
     * 型号
     */
    model?: string;
    /**
     * 规格
     */
    specification?: string;
    /**
     * 准确度等级
     */
    level?: string;
    /**
     * 校准员
     */
    inSpectioner?: string;
};
