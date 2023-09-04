// @ts-ignore
/* eslint-disable */
import request from '/@/utils/request';

/** 根据异常事件id查询列表 根据异常事件id查询列表 GET /abnormalEventActionRecord/list */
export async function getAbnormalEventAlarmPage5(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAbnormalEventAlarmPage5Params,
  options?: { [key: string]: any },
) {
  return request<API.RListEventAction>('/abnormalEventActionRecord/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
