import axios, { AxiosRequestConfig } from 'axios';

export default function (config: AxiosRequestConfig) {
    return axios({ ...config, baseURL: 'http://w-t-g-b.herokuapp.com' } );
};
