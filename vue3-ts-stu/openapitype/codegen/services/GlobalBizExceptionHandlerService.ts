/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GlobalBizExceptionHandlerService {

    /**
     * @returns void 
     * @throws ApiError
     */
    public static noHandlerFoundException(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/error',
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

}
