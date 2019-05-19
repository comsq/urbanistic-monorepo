import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

export default function (config: AxiosRequestConfig) {
    return axios({
        ...config,
        baseURL: 'https://w-t-g-b.herokuapp.com',
        headers: {
            Authorization: Cookies.get('Token'),
            ...config.headers
        }
    });
};
