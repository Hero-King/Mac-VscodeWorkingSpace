/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { R } from './data-contracts'
import { HttpClient, RequestParams } from './http-client'

export class Error<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags global-biz-exception-handler
   * @name NoHandlerFoundException
   * @request DELETE:/error
   */
  noHandlerFoundException = (params: RequestParams = {}) =>
    this.request<any, R>({
      path: `/error`,
      method: 'DELETE',
      ...params
    })
}
