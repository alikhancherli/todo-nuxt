import axios from 'axios';
import { ApiResponse, AxiosOptions } from '../types/types'

export default class ApiFetch<T> {
    private _url: string;
    private _options: AxiosOptions;

    constructor(public url: string, public options: AxiosOptions) {
        this._url = url;
        this._options = options;
    }

    async send(): Promise<ApiResponse<T>> {
        const { data, status, statusText } = await axios.get(this._url, {
            baseURL: this._options.baseUrl,
            headers: this._options.headers
        });

        if (status.toString().startsWith('20')) {
            return {
                data: data,
                isSuccess: true,
                statusCode: status,
                message: statusText || 'اطلاعات دریافت شد'
            }
        }
        else {
            return {
                data: null,
                isSuccess: false,
                statusCode: status,
                message: statusText
            }
        }

    }

    async post(): Promise<ApiResponse<T>> {
        const { data, status, statusText } = await axios.post(this._url,this._options.body, {
            baseURL: this._options.baseUrl,
            headers: this._options.headers
        });

        if (status.toString().startsWith('20')) {
            return {
                data: data,
                isSuccess: true,
                statusCode: status,
                message: statusText || 'انجام شد'
            }
        }
        else {
            return {
                data: null,
                isSuccess: false,
                statusCode: status,
                message: statusText
            }
        }
    }
}