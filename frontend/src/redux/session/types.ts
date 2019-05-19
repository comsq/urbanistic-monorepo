import { IApiError } from '../../common/types/error';

export interface IAuthStorage {
    token: string | null
    fetchEventStarted: boolean
    fetchEventError: IApiError | null
}

export interface IAuthRequest {
    provider: 'github' | 'vk-oauth2',
    code: string
}

export interface IAuthResponse {
    token: string
}
