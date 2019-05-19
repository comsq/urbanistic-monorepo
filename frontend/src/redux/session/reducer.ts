import { getType } from 'typesafe-actions';

import { authorize, AuthorizeActions } from './actions';
import { IAuthStorage } from './types';

const initialState: IAuthStorage = {
    token: null,
    fetchEventStarted: false,
    fetchEventError: null
};

export default function (state = initialState, action: AuthorizeActions) {
    switch (action.type) {
        case getType(authorize.request): {
            return {
                ...state,
                fetchEventStarted: true,
                fetchEventError: null
            };
        }

        case getType(authorize.success): {
            const { token } = action.payload;

            return {
                ...state,
                token,
                fetchEventStarted: false,
                fetchEventError: null
            };
        }
        case getType(authorize.failure): {
            return {
                ...state,
                fetchEventStarted: false,
                fetchEventError: action.payload
            }
        }

        default: {
            return state;
        }
    }
}
