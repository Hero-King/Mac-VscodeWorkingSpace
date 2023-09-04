// @ts-ignore
/* eslint-disable */
import request from '/@/utils/request';

/** 此处后端没有提供注释 DELETE /error */
export async function noHandlerFoundException(options?: { [key: string]: any }) {
  return request<any>('/error', {
    method: 'DELETE',
    ...(options || {}),
  });
}
