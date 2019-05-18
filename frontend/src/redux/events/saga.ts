import { all, call, put, takeEvery } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

import { events } from '../../urls/backend';
import fetch from '../../common/fetch';

import { fetchEvents } from './actions';

function* fetchEventsSaga(action: ActionType<typeof fetchEvents.request>) {
    const url = events.list.build();
    const props = {
        url,
        method: 'GET',
        data: action.payload
    };

    try {
        const { count, items } = yield call(fetch, props);

        yield put(fetchEvents.success({ count, items }));
    } catch (error) {
        yield put(fetchEvents.failure(error));
    }
}

export default function*() {
    yield all([
        takeEvery(fetchEvents.request, fetchEventsSaga)
    ]);
}
