import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

import { events } from '../../urls/backend';
import fetch from '../../common/fetch';

import { fetchEvent, fetchEvents } from './actions';

function* fetchEventSaga(action: ActionType<typeof fetchEvent.request>) {
    const { slug } = action.payload;
    const url = events.item.build({ slug });
    const props = {
        url,
        method: 'GET',
        data: action.payload
    };

    try {
        const { data } = yield call(fetch, props);

        yield put(fetchEvent.success(data));
    } catch (error) {
        yield put(fetchEvents.failure(error));
    }
}

function* fetchEventsSaga(action: ActionType<typeof fetchEvents.request>) {
    const { limit, offset, search, reset, tags } = action.payload;

    const url = events.list.build();
    const props = {
        url: `${url}?limit=${limit}&offset=${offset}&search=${search}&tags=${(tags||[]).join(',')}`,
        method: 'GET',
        data: action.payload
    };

    try {
        const { data } = yield call(fetch, props);

        yield put(fetchEvents.success({ count: data.count, items: data.results, reset }));
    } catch (error) {
        yield put(fetchEvents.failure(error));
    }
}

export default function*() {
    yield all([
        takeLatest(fetchEvents.request, fetchEventsSaga),
        takeLatest(fetchEvent.request, fetchEventSaga)
    ]);
}
