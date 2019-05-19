import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

import { authorizeUrl } from '../../urls/backend';
import fetch from '../../common/fetch';

import { authorize } from './actions';

function* authorizeSaga(action: ActionType<typeof authorize.request>) {
    const { code, provider } = action.payload;

    const url = authorizeUrl.build();

    const props = {
        url,
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            code,
            provider,
            'redirect_uri': 'https://w-t-g.herokuapp.com'
        }
    };

    console.log(props);

    try {
        const { data } = yield call(fetch, props);

        yield put(authorize.success(data));
    } catch (error) {
        yield put(authorize.failure(error));
    }
}

export default function*() {
    yield all([
        takeLatest(authorize.request, authorizeSaga)
    ]);
}
