/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 告警策略条件表
 */
export type AlarmStrategyCondition = {
    /**
     * 唯一标识
     */
    id?: number;
    /**
     * 告警策略id
     */
    alarmStrategyId?: number;
    /**
     * 运算符（>,<）
     */
    operator?: string;
    /**
     * 目标值
     */
    targetValue?: number;
    /**
     * 初始值
     */
    shoftStartValue?: number;
    /**
     * 输入值
     */
    shiftEndValue?: number;
    /**
     * 创建人id
     */
    createBy?: string;
    /**
     * 创建时间
     */
    createTime?: string;
    /**
     * 修改人id
     */
    updateBy?: string;
    /**
     * 修改时间
     */
    updateTime?: string;
};
