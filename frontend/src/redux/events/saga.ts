import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

import { events } from '../../urls/backend';
import fetch from '../../common/fetch';

import { fetchEvents } from './actions';

function* fetchEventsSaga(action: ActionType<typeof fetchEvents.request>) {
    const url = events.list.build();
    const props = {
        url: `${url}?limit=${action.payload.limit}&offset=${action.payload.offset}`,
        method: 'GET',
        data: action.payload,
    };

    try {
        const { data } = yield call(fetch, props);

        yield put(fetchEvents.success({ count: data.count , items: data.results }));
    } catch (error) {
        yield put(fetchEvents.failure(error));
    }
}

export default function*() {
    yield all([
        takeLatest(fetchEvents.request, fetchEventsSaga)
    ]);
}
