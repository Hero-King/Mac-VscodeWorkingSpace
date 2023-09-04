// @ts-ignore
/* eslint-disable */
import request from '/@/utils/request';

/** 异常事件-关注 异常事件-关注 POST /abnormalEventFollow */
export async function save6(body: API.AbnormalEventFollowDTO, options?: { [key: string]: any }) {
  return request<API.RBoolean>('/abnormalEventFollow', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 异常事件-取消关注 异常事件-取消关注 DELETE /abnormalEventFollow */
export async function removeById5(
  body: API.AbnormalEventFollowDTO,
  options?: { [key: string]: any },
) {
  return request<API.RBoolean>('/abnormalEventFollow', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
