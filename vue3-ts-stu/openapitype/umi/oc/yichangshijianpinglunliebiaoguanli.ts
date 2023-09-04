// @ts-ignore
/* eslint-disable */
import request from '/@/utils/request';

/** 新增异常事件-评论列表 新增异常事件-评论列表 POST /abnormalEventCommentRecord */
export async function save9(
  body: API.AbnormalEventCommentRecord,
  options?: { [key: string]: any },
) {
  return request<API.RBoolean>('/abnormalEventCommentRecord', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过id删除异常事件-评论列表 通过id删除异常事件-评论列表 DELETE /abnormalEventCommentRecord */
export async function removeById8(
  body: API.AbnormalEventCommentRecord,
  options?: { [key: string]: any },
) {
  return request<API.RBoolean>('/abnormalEventCommentRecord', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据异常事件id查询列表 根据异常事件id查询列表 GET /abnormalEventCommentRecord/list */
export async function getAbnormalEventAlarmPage3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAbnormalEventAlarmPage3Params,
  options?: { [key: string]: any },
) {
  return request<API.RListEventComment>('/abnormalEventCommentRecord/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
