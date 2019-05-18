import axios, { AxiosRequestConfig } from 'axios';

export default function (config: AxiosRequestConfig) {
    return axios({ ...config, baseURL: 'https://w-t-g-b.herokuapp.com' } );
};
