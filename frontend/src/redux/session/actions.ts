import { createAsyncAction, ActionType } from 'typesafe-actions';

import { IApiError } from '../../common/types/error';

import {IAuthRequest, IAuthResponse} from './types'

export const authorize = createAsyncAction(
    'AUTH_REQUEST',
    'AUTH_RESPONSE',
    'AUTH_FAILUSE'
)<IAuthRequest, IAuthResponse, IApiError>();

const actions = { authorize };

export type AuthorizeActions = ActionType<typeof actions>;

export default actions;
