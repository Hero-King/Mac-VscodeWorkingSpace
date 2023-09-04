/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AbnormalCause } from '../models/AbnormalCause';
import type { AbnormalEvent } from '../models/AbnormalEvent';
import type { AbnormalEventAlarmDTO } from '../models/AbnormalEventAlarmDTO';
import type { AbnormalEventCommentRecord } from '../models/AbnormalEventCommentRecord';
import type { AbnormalEventDeviceDTO } from '../models/AbnormalEventDeviceDTO';
import type { AbnormalEventFollowDTO } from '../models/AbnormalEventFollowDTO';
import type { AbnormalEventParamDTO } from '../models/AbnormalEventParamDTO';
import type { AlarmRecord } from '../models/AlarmRecord';
import type { AlarmStrategy } from '../models/AlarmStrategy';
import type { AlarmStrategyDTO } from '../models/AlarmStrategyDTO';
import type { ElectricityPriceSetting } from '../models/ElectricityPriceSetting';
import type { MeterFault } from '../models/MeterFault';
import type { MeterFaultVO } from '../models/MeterFaultVO';
import type { MeterInspection } from '../models/MeterInspection';
import type { MeterInspectionVO } from '../models/MeterInspectionVO';
import type { MeterMaintenance } from '../models/MeterMaintenance';
import type { OrderItem } from '../models/OrderItem';
import type { R } from '../models/R';
import type { RAbnormalCause } from '../models/RAbnormalCause';
import type { RAbnormalEventDetailVO } from '../models/RAbnormalEventDetailVO';
import type { RAbnormalEventStatisticsVO } from '../models/RAbnormalEventStatisticsVO';
import type { RAlarmRecord } from '../models/RAlarmRecord';
import type { RAlarmStaticsVO } from '../models/RAlarmStaticsVO';
import type { RAlarmStrategyDTO } from '../models/RAlarmStrategyDTO';
import type { RBoolean } from '../models/RBoolean';
import type { RecordRemoveAlarmDTO } from '../models/RecordRemoveAlarmDTO';
import type { RElectricityPriceSetting } from '../models/RElectricityPriceSetting';
import type { REventAlarmInfoDTO } from '../models/REventAlarmInfoDTO';
import type { REventStatisticsVO } from '../models/REventStatisticsVO';
import type { RIPageAbnormalCause } from '../models/RIPageAbnormalCause';
import type { RIPageAbnormalEvent } from '../models/RIPageAbnormalEvent';
import type { RIPageAlarmRecordVO } from '../models/RIPageAlarmRecordVO';
import type { RIPageElectricityPriceSetting } from '../models/RIPageElectricityPriceSetting';
import type { RIPageEventOutTimeListVO } from '../models/RIPageEventOutTimeListVO';
import type { RIPageMeterFaultVO } from '../models/RIPageMeterFaultVO';
import type { RIPageMeterInspectionVO } from '../models/RIPageMeterInspectionVO';
import type { RIPageMeterMaintenanceVO } from '../models/RIPageMeterMaintenanceVO';
import type { RListAbnormalCause } from '../models/RListAbnormalCause';
import type { RListAbnormalEventFileVO } from '../models/RListAbnormalEventFileVO';
import type { RListAbnormalEventStatisticsCauseVO } from '../models/RListAbnormalEventStatisticsCauseVO';
import type { RListAbnormalEventStatisticsDateVO } from '../models/RListAbnormalEventStatisticsDateVO';
import type { RListAlarmInfoDTO } from '../models/RListAlarmInfoDTO';
import type { RListAlarmStaticsRankVO } from '../models/RListAlarmStaticsRankVO';
import type { RListElectricityPriceSetting } from '../models/RListElectricityPriceSetting';
import type { RListEventAction } from '../models/RListEventAction';
import type { RListEventAlarm } from '../models/RListEventAlarm';
import type { RListEventComment } from '../models/RListEventComment';
import type { RListEventDevice } from '../models/RListEventDevice';
import type { RListEventHistory } from '../models/RListEventHistory';
import type { RListEventParam } from '../models/RListEventParam';
import type { RListEventStatiscRankVO } from '../models/RListEventStatiscRankVO';
import type { RLong } from '../models/RLong';
import type { RMapStringObject } from '../models/RMapStringObject';
import type { RMeterFaultVO } from '../models/RMeterFaultVO';
import type { RMeterInspectionVO } from '../models/RMeterInspectionVO';
import type { RMeterMaintenanceVO } from '../models/RMeterMaintenanceVO';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class Service {

    /**
     * 修改告警记录
     * 修改告警记录
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static updateById(
requestBody: AlarmRecord,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/alarmRecord',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 新增告警记录
     * 新增告警记录
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static save3(
requestBody: AlarmRecord,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/alarmRecord',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 解除告警
     * 解除告警
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static removeAlarm(
requestBody: RecordRemoveAlarmDTO,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/alarmRecord/removeAlarm',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 搁置
     * 搁置
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static layAside(
requestBody: Array<number>,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/alarmRecord/layAside',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 禁用告警
     * 禁用告警
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static forbidden(
requestBody: Array<number>,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/alarmRecord/forbidden',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 取消搁置
     * 取消搁置
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static cancelAside(
requestBody: Array<number>,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/alarmRecord/cancelAside',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 恢复告警
     * 恢复告警
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static alarm(
requestBody: Array<number>,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/alarmRecord/alarm',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 修改异常事件表
     * 修改异常事件表
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static updateById1(
requestBody: AbnormalEvent,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/abnormalEvent',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 新增异常事件表
     * 新增异常事件表
     * @param requestBody 
     * @returns RLong OK
     * @throws ApiError
     */
    public static save4(
requestBody: AbnormalEvent,
): CancelablePromise<RLong> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/abnormalEvent',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 解决
     * 解决
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static resolve(
requestBody: AbnormalEvent,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/abnormalEvent/resolve',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 重新打开
     * 重新打开
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static reopen(
requestBody: AbnormalEvent,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/abnormalEvent/reopen',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 跟进
     * 跟进
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static follow(
requestBody: AbnormalEvent,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/abnormalEvent/follow',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 关闭
     * 关闭
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static close(
requestBody: AbnormalEvent,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/abnormalEvent/close',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 修改异常原因
     * 修改异常原因
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static updateById2(
requestBody: AbnormalCause,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/abnormalCause',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 新增异常原因
     * 新增异常原因
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static save11(
requestBody: AbnormalCause,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/abnormalCause',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 通过id删除异常原因
     * 通过id删除异常原因
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static removeById10(
requestBody: Array<number>,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/abnormalCause',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 禁用
     * 禁用
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static forbidden1(
requestBody: Array<number>,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/abnormalCause/forbidden',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 启用
     * 启用
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static enable(
requestBody: Array<number>,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/abnormalCause/enable',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 新增维护保养记录
     * 新增维护保养记录
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static save(
requestBody: MeterMaintenance,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ocMeterMaintenance',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 通过id删除维护保养记录
     * 通过id删除维护保养记录
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static removeById(
requestBody: Array<number>,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/ocMeterMaintenance',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 上传
     * 上传
     * @param requestBody 
     * @returns RMapStringObject OK
     * @throws ApiError
     */
    public static upload(
requestBody?: {
file: Blob;
},
): CancelablePromise<RMapStringObject> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ocMeterMaintenance/upload',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 新增检定记录
     * 新增检定记录
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static save1(
requestBody: MeterInspection,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ocMeterInspection',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 通过id删除检定管理记录
     * 通过id删除检定管理记录
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static removeById1(
requestBody: Array<number>,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/ocMeterInspection',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 上传
     * 上传
     * @param requestBody 
     * @returns RMapStringObject OK
     * @throws ApiError
     */
    public static upload1(
requestBody?: {
file: Blob;
},
): CancelablePromise<RMapStringObject> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ocMeterInspection/upload',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns RMeterInspectionVO OK
     * @throws ApiError
     */
    public static importRole(
requestBody?: Array<MeterInspectionVO>,
): CancelablePromise<RMeterInspectionVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ocMeterInspection/import',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 新增故障记录
     * 新增故障记录
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static save2(
requestBody: MeterFault,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ocMeterFault',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 通过id删除故障记录
     * 通过id删除故障记录
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static removeById2(
requestBody: Array<number>,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/ocMeterFault',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 上传
     * 上传
     * @param requestBody 
     * @returns RMapStringObject OK
     * @throws ApiError
     */
    public static upload2(
requestBody?: {
file: Blob;
},
): CancelablePromise<RMapStringObject> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ocMeterFault/upload',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns RMeterFaultVO OK
     * @throws ApiError
     */
    public static importRole1(
requestBody?: Array<MeterFaultVO>,
): CancelablePromise<RMeterFaultVO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ocMeterFault/import',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 新增/修改电价设置
     * 新增/修改电价设置
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static saveOrUpdate(
requestBody: ElectricityPriceSetting,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ocElectricityPrice',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 根据年月查询电价设置
     * 根据年月查询电价设置
     * @param requestBody 
     * @returns RListElectricityPriceSetting OK
     * @throws ApiError
     */
    public static listByYm(
requestBody: Array<string>,
): CancelablePromise<RListElectricityPriceSetting> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ocElectricityPrice/listByYm',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 新增/修改告警策略
     * 新增/修改告警策略
     * @param requestBody 
     * @returns R OK
     * @throws ApiError
     */
    public static saveOrUpdate1(
requestBody: AlarmStrategyDTO,
): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ocAlarmStrategy',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 通过id删除告警策略
     * 通过id删除告警策略
     * @param requestBody 
     * @returns R OK
     * @throws ApiError
     */
    public static removeById3(
requestBody: Array<number>,
): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/ocAlarmStrategy',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 触发异常事件
     * 通过告警策略id触发异常事件
     * @param id 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static triggerAbnormalEvent(
id: number,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ocAlarmStrategy/triggerAbnormalEvent',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 批量新增告警记录
     * 批量新增告警记录
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static saveBatchOfIn(
requestBody: Array<AlarmRecord>,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/alarmRecord/saveBatchOfIn',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 异常事件-关联参数列表
     * 异常事件-关联参数列表
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static save5(
requestBody: AbnormalEventParamDTO,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/abnormalEventParam',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 通过id删除异常事件-参数列表
     * 通过id删除异常事件-参数列表
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static removeById4(
requestBody: AbnormalEventParamDTO,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/abnormalEventParam',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 异常事件-关注
     * 异常事件-关注
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static save6(
requestBody: AbnormalEventFollowDTO,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/abnormalEventFollow',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 异常事件-取消关注
     * 异常事件-取消关注
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static removeById5(
requestBody: AbnormalEventFollowDTO,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/abnormalEventFollow',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 新增异常事件-附件列表
     * 新增异常事件-附件列表
     * @param abnormalEventId 
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static save7(
abnormalEventId: number,
requestBody?: {
file: Blob;
},
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/abnormalEventFile',
            query: {
                'abnormalEventId': abnormalEventId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 通过id删除异常事件-附件列表
     * 通过id删除异常事件-附件列表
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static removeById6(
requestBody: Array<number>,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/abnormalEventFile',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 异常事件-关联设备列表
     * 异常事件-关联设备列表
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static save8(
requestBody: AbnormalEventDeviceDTO,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/abnormalEventDevice',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 通过id删除异常事件-设备列表
     * 通过id删除异常事件-设备列表
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static removeById7(
requestBody: AbnormalEventDeviceDTO,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/abnormalEventDevice',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 新增异常事件-评论列表
     * 新增异常事件-评论列表
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static save9(
requestBody: AbnormalEventCommentRecord,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/abnormalEventCommentRecord',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 通过id删除异常事件-评论列表
     * 通过id删除异常事件-评论列表
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static removeById8(
requestBody: AbnormalEventCommentRecord,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/abnormalEventCommentRecord',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 异常事件-关联告警
     * 异常事件-关联告警
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static save10(
requestBody: AbnormalEventAlarmDTO,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/abnormalEventAlarm',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 通过id删除异常事件-告警列表
     * 通过id删除异常事件-告警列表
     * @param requestBody 
     * @returns RBoolean OK
     * @throws ApiError
     */
    public static removeById9(
requestBody: AbnormalEventAlarmDTO,
): CancelablePromise<RBoolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/abnormalEventAlarm',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 分页查询
     * 分页查询
     * @param records 
     * @param total 
     * @param size 
     * @param current 
     * @param orders 
     * @param optimizeCountSql 
     * @param searchCount 
     * @param maxLimit 
     * @param countId 
     * @param mesterId 表记id
     * @param areaId 区域id
     * @param searchValue 厂内编号、表计名称
     * @param classification 管理分类
     * @param startTime 日期（开始时间）
     * @param endTime 日期（结束时间）
     * @param recStatus 表计状态，合格，禁用，封存，准用
     * @returns RIPageMeterMaintenanceVO OK
     * @throws ApiError
     */
    public static getMeterMaintenancePage(
records?: Array<Record<string, any>>,
total?: number,
size?: number,
current?: number,
orders?: Array<OrderItem>,
optimizeCountSql?: boolean,
searchCount?: boolean,
maxLimit?: number,
countId?: string,
mesterId?: string,
areaId?: string,
searchValue?: string,
classification?: string,
startTime?: string,
endTime?: string,
recStatus?: string,
): CancelablePromise<RIPageMeterMaintenanceVO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ocMeterMaintenance/page',
            query: {
                'records': records,
                'total': total,
                'size': size,
                'current': current,
                'orders': orders,
                'optimizeCountSql': optimizeCountSql,
                'searchCount': searchCount,
                'maxLimit': maxLimit,
                'countId': countId,
                'mesterId': mesterId,
                'areaId': areaId,
                'searchValue': searchValue,
                'classification': classification,
                'startTime': startTime,
                'endTime': endTime,
                'recStatus': recStatus,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 查询详情
     * 查询详情
     * @param id 
     * @returns RMeterMaintenanceVO OK
     * @throws ApiError
     */
    public static detail(
id: number,
): CancelablePromise<RMeterMaintenanceVO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ocMeterMaintenance/detail',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 分页查询
     * 分页查询
     * @param records 
     * @param total 
     * @param size 
     * @param current 
     * @param orders 
     * @param optimizeCountSql 
     * @param searchCount 
     * @param maxLimit 
     * @param countId 
     * @param mesterId 表记id
     * @param areaId 区域id
     * @param searchValue 厂内编号、表计名称
     * @param classification 管理分类
     * @param startTime 校验日期（开始时间）
     * @param endTime 校验日期（结束时间）
     * @param status 表计状态，合格，禁用，封存，准用
     * @param expirationStartTime 有效截至日期（开始时间）
     * @param expirationEndTime 有效截至日期（结束时间）
     * @param inSpectioner 校准员
     * @returns RIPageMeterInspectionVO OK
     * @throws ApiError
     */
    public static getMeterInspectionPage(
records?: Array<Record<string, any>>,
total?: number,
size?: number,
current?: number,
orders?: Array<OrderItem>,
optimizeCountSql?: boolean,
searchCount?: boolean,
maxLimit?: number,
countId?: string,
mesterId?: string,
areaId?: string,
searchValue?: string,
classification?: string,
startTime?: string,
endTime?: string,
status?: string,
expirationStartTime?: string,
expirationEndTime?: string,
inSpectioner?: string,
): CancelablePromise<RIPageMeterInspectionVO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ocMeterInspection/page',
            query: {
                'records': records,
                'total': total,
                'size': size,
                'current': current,
                'orders': orders,
                'optimizeCountSql': optimizeCountSql,
                'searchCount': searchCount,
                'maxLimit': maxLimit,
                'countId': countId,
                'mesterId': mesterId,
                'areaId': areaId,
                'searchValue': searchValue,
                'classification': classification,
                'startTime': startTime,
                'endTime': endTime,
                'status': status,
                'expirationStartTime': expirationStartTime,
                'expirationEndTime': expirationEndTime,
                'inSpectioner': inSpectioner,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 查询详情
     * 查询详情
     * @param id 
     * @returns RMeterInspectionVO OK
     * @throws ApiError
     */
    public static detail1(
id: number,
): CancelablePromise<RMeterInspectionVO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ocMeterInspection/detail',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 分页查询
     * 分页查询
     * @param records 
     * @param total 
     * @param size 
     * @param current 
     * @param orders 
     * @param optimizeCountSql 
     * @param searchCount 
     * @param maxLimit 
     * @param countId 
     * @param mesterId 表记id
     * @param areaId 区域id
     * @param searchValue 厂内编号、表计名称
     * @param classification 管理分类
     * @param startTime 日期（开始时间）
     * @param endTime 日期（结束时间）
     * @param recStatus 表计状态，合格，禁用，封存，准用
     * @param faultLevel 故障等级 低0 中1 高2
     * @param repairName 维修人员
     * @returns RIPageMeterFaultVO OK
     * @throws ApiError
     */
    public static getMeterFaultPage(
records?: Array<Record<string, any>>,
total?: number,
size?: number,
current?: number,
orders?: Array<OrderItem>,
optimizeCountSql?: boolean,
searchCount?: boolean,
maxLimit?: number,
countId?: string,
mesterId?: string,
areaId?: string,
searchValue?: string,
classification?: string,
startTime?: string,
endTime?: string,
recStatus?: string,
faultLevel?: string,
repairName?: string,
): CancelablePromise<RIPageMeterFaultVO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ocMeterFault/page',
            query: {
                'records': records,
                'total': total,
                'size': size,
                'current': current,
                'orders': orders,
                'optimizeCountSql': optimizeCountSql,
                'searchCount': searchCount,
                'maxLimit': maxLimit,
                'countId': countId,
                'mesterId': mesterId,
                'areaId': areaId,
                'searchValue': searchValue,
                'classification': classification,
                'startTime': startTime,
                'endTime': endTime,
                'recStatus': recStatus,
                'faultLevel': faultLevel,
                'repairName': repairName,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 查询详情
     * 查询详情
     * @param id 
     * @returns RMeterFaultVO OK
     * @throws ApiError
     */
    public static detail2(
id: number,
): CancelablePromise<RMeterFaultVO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ocMeterFault/detail',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 电价设置分页查询
     * 电价设置分页查询
     * @param topParentId 
     * @param records 
     * @param total 
     * @param size 
     * @param current 
     * @param orders 
     * @param optimizeCountSql 
     * @param searchCount 
     * @param maxLimit 
     * @param countId 
     * @returns RIPageElectricityPriceSetting OK
     * @throws ApiError
     */
    public static getElectricityPriceSettingPage(
topParentId: number,
records?: Array<Record<string, any>>,
total?: number,
size?: number,
current?: number,
orders?: Array<OrderItem>,
optimizeCountSql?: boolean,
searchCount?: boolean,
maxLimit?: number,
countId?: string,
): CancelablePromise<RIPageElectricityPriceSetting> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ocElectricityPrice/page',
            query: {
                'records': records,
                'total': total,
                'size': size,
                'current': current,
                'orders': orders,
                'optimizeCountSql': optimizeCountSql,
                'searchCount': searchCount,
                'maxLimit': maxLimit,
                'countId': countId,
                'topParentId': topParentId,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 根据id查询详情
     * 根据id查询详情
     * @param id 
     * @returns RElectricityPriceSetting OK
     * @throws ApiError
     */
    public static detail3(
id: number,
): CancelablePromise<RElectricityPriceSetting> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ocElectricityPrice/detail',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 通过id查询
     * 通过id查询
     * @param id 
     * @returns RAlarmStrategyDTO OK
     * @throws ApiError
     */
    public static getById(
id: number,
): CancelablePromise<RAlarmStrategyDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ocAlarmStrategy/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 分页查询
     * 分页查询
     * @param records 
     * @param total 
     * @param size 
     * @param current 
     * @param orders 
     * @param optimizeCountSql 
     * @param searchCount 
     * @param maxLimit 
     * @param countId 
     * @param id 告警策略id
     * @param isActive 是否可用
     * @param alarmType 告警类型
     * @param alarmLevel 告警等级
     * @param alarmName 告警名称
     * @param alarmCount 告警次数
     * @param status 告警状态
     * @param notifyMethod 推送方式
     * @param accumulateCount 持续规则次数(事件告警)
     * @param accumulateTimeDuration 持续规则时间（事件告警）
     * @param accumulateTimeUnit 持续规则单位（事件告警）
     * @param systemRemindMethod 系统提示方式
     * @param isAutoCreateEvent 是否自动创建事件
     * @param isNeedInformRecover 通讯恢复后是否通知我（通讯告警）
     * @param offlineTimeDuration 无数据上抛时长（通讯告警）
     * @param offlineTimeUnit 无数据上抛时长单位（通讯告警）
     * @param weekday 告警时间(星期*)（越线，变位告警）
     * @param alarmTimeRanges 告警时间段
     * @param timeMode 计算方式：瞬时计算，区间计算（事件告警）
     * @param intervalTimeDuration 时间间隔
     * @param intervalTimeUnit 时间间隔单位天，时，分，秒
     * @param intervalType 固定，滑动
     * @param fixIntervalStartTime 固定间隔开始时间，当上列为固定区间时，填写
     * @param formula 公式配置 html（事件告警）
     * @param formulaRemark 公式配置 需要解析的
     * @param alarmUserIds 通知用户
     * @param createBy 创建人id
     * @param createTime 创建时间
     * @param updateBy 更新人id
     * @param updateTime 更新时间
     * @param tenantId 租户id
     * @returns R OK
     * @throws ApiError
     */
    public static getAlarmStrategyPage(
records?: Array<Record<string, any>>,
total?: number,
size?: number,
current?: number,
orders?: Array<OrderItem>,
optimizeCountSql?: boolean,
searchCount?: boolean,
maxLimit?: number,
countId?: string,
id?: string,
isActive?: string,
alarmType?: string,
alarmLevel?: string,
alarmName?: string,
alarmCount?: string,
status?: string,
notifyMethod?: string,
accumulateCount?: string,
accumulateTimeDuration?: string,
accumulateTimeUnit?: string,
systemRemindMethod?: string,
isAutoCreateEvent?: string,
isNeedInformRecover?: string,
offlineTimeDuration?: string,
offlineTimeUnit?: string,
weekday?: string,
alarmTimeRanges?: string,
timeMode?: string,
intervalTimeDuration?: string,
intervalTimeUnit?: string,
intervalType?: string,
fixIntervalStartTime?: string,
formula?: string,
formulaRemark?: string,
alarmUserIds?: string,
createBy?: string,
createTime?: string,
updateBy?: string,
updateTime?: string,
tenantId?: string,
): CancelablePromise<R> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ocAlarmStrategy/page',
            query: {
                'records': records,
                'total': total,
                'size': size,
                'current': current,
                'orders': orders,
                'optimizeCountSql': optimizeCountSql,
                'searchCount': searchCount,
                'maxLimit': maxLimit,
                'countId': countId,
                'id': id,
                'isActive': isActive,
                'alarmType': alarmType,
                'alarmLevel': alarmLevel,
                'alarmName': alarmName,
                'alarmCount': alarmCount,
                'status': status,
                'notifyMethod': notifyMethod,
                'accumulateCount': accumulateCount,
                'accumulateTimeDuration': accumulateTimeDuration,
                'accumulateTimeUnit': accumulateTimeUnit,
                'systemRemindMethod': systemRemindMethod,
                'isAutoCreateEvent': isAutoCreateEvent,
                'isNeedInformRecover': isNeedInformRecover,
                'offlineTimeDuration': offlineTimeDuration,
                'offlineTimeUnit': offlineTimeUnit,
                'weekday': weekday,
                'alarmTimeRanges': alarmTimeRanges,
                'timeMode': timeMode,
                'intervalTimeDuration': intervalTimeDuration,
                'intervalTimeUnit': intervalTimeUnit,
                'intervalType': intervalType,
                'fixIntervalStartTime': fixIntervalStartTime,
                'formula': formula,
                'formulaRemark': formulaRemark,
                'alarmUserIds': alarmUserIds,
                'createBy': createBy,
                'createTime': createTime,
                'updateBy': updateBy,
                'updateTime': updateTime,
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 测试通讯告警测试使用
     * 测试通讯告警测试使用
     * @returns RListAlarmInfoDTO OK
     * @throws ApiError
     */
    public static getTxTest(): CancelablePromise<RListAlarmInfoDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ocAlarmStrategy/getTxTest',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 获取具备触发告警策略的设备信息
     * 获取具备触发告警策略的设备信息
     * @param type 
     * @returns RListAlarmInfoDTO OK
     * @throws ApiError
     */
    public static getPreTriggerAlarm(
type?: string,
): CancelablePromise<RListAlarmInfoDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ocAlarmStrategy/getPreTriggerAlarm',
            query: {
                'type': type,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 测试事件告警测试使用
     * 测试事件告警测试使用
     * @returns REventAlarmInfoDTO OK
     * @throws ApiError
     */
    public static getEventTest(): CancelablePromise<REventAlarmInfoDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ocAlarmStrategy/getEventTestA',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param alarmStrategy 
     * @returns AlarmStrategy OK
     * @throws ApiError
     */
    public static export(
alarmStrategy: AlarmStrategy,
): CancelablePromise<Array<AlarmStrategy>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ocAlarmStrategy/export',
            query: {
                'alarmStrategy': alarmStrategy,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 通过id查询
     * 通过id查询
     * @param id 
     * @returns RAlarmRecord OK
     * @throws ApiError
     */
    public static getById1(
id: number,
): CancelablePromise<RAlarmRecord> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/alarmRecord/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 告警数据统计
     * 告警数据统计
     * @param startTime 
     * @param endTime 
     * @returns RAlarmStaticsVO OK
     * @throws ApiError
     */
    public static getAlarmStatics(
startTime: string,
endTime: string,
): CancelablePromise<RAlarmStaticsVO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/alarmRecord/staticsalarm',
            query: {
                'startTime': startTime,
                'endTime': endTime,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 告警处理排名
     * 告警处理排名
     * @param startTime 
     * @param endTime 
     * @returns RListAlarmStaticsRankVO OK
     * @throws ApiError
     */
    public static selectRank(
startTime: string,
endTime: string,
): CancelablePromise<RListAlarmStaticsRankVO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/alarmRecord/selectrank',
            query: {
                'startTime': startTime,
                'endTime': endTime,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 分页查询
     * 分页查询
     * @param records 
     * @param total 
     * @param size 
     * @param current 
     * @param orders 
     * @param optimizeCountSql 
     * @param searchCount 
     * @param maxLimit 
     * @param countId 
     * @param alarmName 
     * @param alarmType 告警类型
     * @param alarmLevel 告警等级
     * @param status 状态
     * @param startTime 告警开始时间
     * @param endTime 告警结束时间
     * @param searchValue 设备名称或参数名称
     * @returns RIPageAlarmRecordVO OK
     * @throws ApiError
     */
    public static getAlarmRecordPage(
records?: Array<Record<string, any>>,
total?: number,
size?: number,
current?: number,
orders?: Array<OrderItem>,
optimizeCountSql?: boolean,
searchCount?: boolean,
maxLimit?: number,
countId?: string,
alarmName?: string,
alarmType?: string,
alarmLevel?: string,
status?: string,
startTime?: string,
endTime?: string,
searchValue?: string,
): CancelablePromise<RIPageAlarmRecordVO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/alarmRecord/page',
            query: {
                'records': records,
                'total': total,
                'size': size,
                'current': current,
                'orders': orders,
                'optimizeCountSql': optimizeCountSql,
                'searchCount': searchCount,
                'maxLimit': maxLimit,
                'countId': countId,
                'alarmName': alarmName,
                'alarmType': alarmType,
                'alarmLevel': alarmLevel,
                'status': status,
                'startTime': startTime,
                'endTime': endTime,
                'searchValue': searchValue,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param alarmRecord 
     * @returns AlarmRecord OK
     * @throws ApiError
     */
    public static export1(
alarmRecord: AlarmRecord,
): CancelablePromise<Array<AlarmRecord>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/alarmRecord/export',
            query: {
                'alarmRecord': alarmRecord,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 根据异常事件id查询列表
     * 根据异常事件id查询列表
     * @param abnormalEventId 
     * @returns RListEventParam OK
     * @throws ApiError
     */
    public static getAbnormalEventAlarmPage(
abnormalEventId: number,
): CancelablePromise<RListEventParam> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/abnormalEventParam/list',
            query: {
                'abnormalEventId': abnormalEventId,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 根据异常事件id查询列表
     * 根据异常事件id查询列表
     * @param abnormalEventId 
     * @returns RListEventHistory OK
     * @throws ApiError
     */
    public static getAbnormalEventAlarmPage1(
abnormalEventId: number,
): CancelablePromise<RListEventHistory> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/abnormalEventHistoryRecord/list',
            query: {
                'abnormalEventId': abnormalEventId,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 根据异常事件id查询列表
     * 根据异常事件id查询列表
     * @param abnormalEventId 
     * @returns RListAbnormalEventFileVO OK
     * @throws ApiError
     */
    public static getAbnormalEventFilePage(
abnormalEventId: number,
): CancelablePromise<RListAbnormalEventFileVO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/abnormalEventFile/list',
            query: {
                'abnormalEventId': abnormalEventId,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 根据异常事件id查询列表
     * 根据异常事件id查询列表
     * @param abnormalEventId 
     * @returns RListEventDevice OK
     * @throws ApiError
     */
    public static getAbnormalEventAlarmPage2(
abnormalEventId: number,
): CancelablePromise<RListEventDevice> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/abnormalEventDevice/list',
            query: {
                'abnormalEventId': abnormalEventId,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 根据异常事件id查询列表
     * 根据异常事件id查询列表
     * @param abnormalEventId 
     * @returns RListEventComment OK
     * @throws ApiError
     */
    public static getAbnormalEventAlarmPage3(
abnormalEventId: number,
): CancelablePromise<RListEventComment> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/abnormalEventCommentRecord/list',
            query: {
                'abnormalEventId': abnormalEventId,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 根据异常事件id查询列表
     * 根据异常事件id查询列表
     * @param abnormalEventId 
     * @returns RListEventAlarm OK
     * @throws ApiError
     */
    public static getAbnormalEventAlarmPage4(
abnormalEventId: number,
): CancelablePromise<RListEventAlarm> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/abnormalEventAlarm/list',
            query: {
                'abnormalEventId': abnormalEventId,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 根据异常事件id查询列表
     * 根据异常事件id查询列表
     * @param abnormalEventId 
     * @returns RListEventAction OK
     * @throws ApiError
     */
    public static getAbnormalEventAlarmPage5(
abnormalEventId: number,
): CancelablePromise<RListEventAction> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/abnormalEventActionRecord/list',
            query: {
                'abnormalEventId': abnormalEventId,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 通过id查询
     * 通过id查询
     * @param id 
     * @returns RAbnormalEventDetailVO OK
     * @throws ApiError
     */
    public static getById2(
id: number,
): CancelablePromise<RAbnormalEventDetailVO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/abnormalEvent/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 事件统计
     * 事件统计
     * @returns RAbnormalEventStatisticsVO OK
     * @throws ApiError
     */
    public static statistics(): CancelablePromise<RAbnormalEventStatisticsVO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/abnormalEvent/statistics',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 按时间统计
     * 按时间统计
     * @param startTime 
     * @param endTime 
     * @returns RListAbnormalEventStatisticsDateVO OK
     * @throws ApiError
     */
    public static statisticsByDate(
startTime: string,
endTime: string,
): CancelablePromise<RListAbnormalEventStatisticsDateVO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/abnormalEvent/statisticsByDate',
            query: {
                'startTime': startTime,
                'endTime': endTime,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 原因帕累托图
     * @param startTime 
     * @param endTime 
     * @returns RListAbnormalEventStatisticsCauseVO OK
     * @throws ApiError
     */
    public static statisticsByCause(
startTime: string,
endTime: string,
): CancelablePromise<RListAbnormalEventStatisticsCauseVO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/abnormalEvent/statisticsByCause',
            query: {
                'startTime': startTime,
                'endTime': endTime,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 异常事件统计
     * 异常事件统计
     * @param startTime 
     * @param endTime 
     * @returns REventStatisticsVO OK
     * @throws ApiError
     */
    public static getEventStatics(
startTime: string,
endTime: string,
): CancelablePromise<REventStatisticsVO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/abnormalEvent/staticsabnormalevent',
            query: {
                'startTime': startTime,
                'endTime': endTime,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 分页查询
     * 分页查询
     * @param records 
     * @param total 
     * @param size 
     * @param current 
     * @param orders 
     * @param optimizeCountSql 
     * @param searchCount 
     * @param maxLimit 
     * @param countId 
     * @param eventInfo 事件编号、事件标题
     * @param eventType 事件类型
     * @param eventLevel 事件级别
     * @param status 事件状态
     * @param cause 异常原因
     * @param eventChargePerson 负责人
     * @param createUser 创建人
     * @param startTime 创建时间(开始)
     * @param endTime 创建时间(结束)
     * @returns RIPageAbnormalEvent OK
     * @throws ApiError
     */
    public static getAbnormalEventPage(
records?: Array<Record<string, any>>,
total?: number,
size?: number,
current?: number,
orders?: Array<OrderItem>,
optimizeCountSql?: boolean,
searchCount?: boolean,
maxLimit?: number,
countId?: string,
eventInfo?: string,
eventType?: string,
eventLevel?: string,
status?: string,
cause?: string,
eventChargePerson?: string,
createUser?: string,
startTime?: string,
endTime?: string,
): CancelablePromise<RIPageAbnormalEvent> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/abnormalEvent/page',
            query: {
                'records': records,
                'total': total,
                'size': size,
                'current': current,
                'orders': orders,
                'optimizeCountSql': optimizeCountSql,
                'searchCount': searchCount,
                'maxLimit': maxLimit,
                'countId': countId,
                'eventInfo': eventInfo,
                'eventType': eventType,
                'eventLevel': eventLevel,
                'status': status,
                'cause': cause,
                'eventChargePerson': eventChargePerson,
                'createUser': createUser,
                'startTime': startTime,
                'endTime': endTime,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 查询超时事件列表
     * 查询超时事件列表
     * @param startTime 
     * @param endTime 
     * @param records 
     * @param total 
     * @param size 
     * @param current 
     * @param orders 
     * @param optimizeCountSql 
     * @param searchCount 
     * @param maxLimit 
     * @param countId 
     * @returns RIPageEventOutTimeListVO OK
     * @throws ApiError
     */
    public static eventOutTimeList(
startTime: string,
endTime: string,
records?: Array<Record<string, any>>,
total?: number,
size?: number,
current?: number,
orders?: Array<OrderItem>,
optimizeCountSql?: boolean,
searchCount?: boolean,
maxLimit?: number,
countId?: string,
): CancelablePromise<RIPageEventOutTimeListVO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/abnormalEvent/listouttimeevent',
            query: {
                'records': records,
                'total': total,
                'size': size,
                'current': current,
                'orders': orders,
                'optimizeCountSql': optimizeCountSql,
                'searchCount': searchCount,
                'maxLimit': maxLimit,
                'countId': countId,
                'startTime': startTime,
                'endTime': endTime,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 根据告警记录新增异常事件(查询异常事件信息)
     * 根据告警记录新增异常事件(查询异常事件信息)
     * @param id 
     * @returns RAbnormalEventDetailVO OK
     * @throws ApiError
     */
    public static getByRecordId(
id: number,
): CancelablePromise<RAbnormalEventDetailVO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/abnormalEvent/getByRecordId',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 事件处理排名
     * 事件处理排名
     * @param startTime 
     * @param endTime 
     * @returns RListEventStatiscRankVO OK
     * @throws ApiError
     */
    public static selectEventRank(
startTime: string,
endTime: string,
): CancelablePromise<RListEventStatiscRankVO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/abnormalEvent/eventrank',
            query: {
                'startTime': startTime,
                'endTime': endTime,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 通过id查询
     * 通过id查询
     * @param id 
     * @returns RAbnormalCause OK
     * @throws ApiError
     */
    public static getById3(
id: number,
): CancelablePromise<RAbnormalCause> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/abnormalCause/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 分页查询
     * 分页查询
     * @param records 
     * @param total 
     * @param size 
     * @param current 
     * @param orders 
     * @param optimizeCountSql 
     * @param searchCount 
     * @param maxLimit 
     * @param countId 
     * @param id 唯一主键
     * @param causeName 原因名称
     * @param sort 排序号
     * @param isActive 是否可用
     * @param remark 备注
     * @param createBy 创建人
     * @param createTime 创建时间
     * @param updateBy 更新人
     * @param updateTime 更新时间
     * @param tenantId 租户id
     * @returns RIPageAbnormalCause OK
     * @throws ApiError
     */
    public static getAbnormalCausePage(
records?: Array<Record<string, any>>,
total?: number,
size?: number,
current?: number,
orders?: Array<OrderItem>,
optimizeCountSql?: boolean,
searchCount?: boolean,
maxLimit?: number,
countId?: string,
id?: string,
causeName?: string,
sort?: string,
isActive?: string,
remark?: string,
createBy?: string,
createTime?: string,
updateBy?: string,
updateTime?: string,
tenantId?: string,
): CancelablePromise<RIPageAbnormalCause> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/abnormalCause/page',
            query: {
                'records': records,
                'total': total,
                'size': size,
                'current': current,
                'orders': orders,
                'optimizeCountSql': optimizeCountSql,
                'searchCount': searchCount,
                'maxLimit': maxLimit,
                'countId': countId,
                'id': id,
                'causeName': causeName,
                'sort': sort,
                'isActive': isActive,
                'remark': remark,
                'createBy': createBy,
                'createTime': createTime,
                'updateBy': updateBy,
                'updateTime': updateTime,
                'tenantId': tenantId,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 异常原因列表
     * 异常原因列表
     * @returns RListAbnormalCause OK
     * @throws ApiError
     */
    public static getList(): CancelablePromise<RListAbnormalCause> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/abnormalCause/list',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }

}
