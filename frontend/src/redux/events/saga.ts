import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

import { events } from '../../urls/backend';
import fetch from '../../common/fetch';

import { fetchEvent, fetchEvents, participate } from './actions';

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

    const url = events.list.build({}, {
        limit,
        offset,
        search,
        tags
    });
    const props = {
        url,
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

function* participateSaga(action: ActionType<typeof participate.request>) {
    const { slug } = action.payload;

    const url = events.participate.build({ slug });
    const props = {
        url,
        method: 'POST'
    };

    try {
        yield call(fetch, props);

        yield put(participate.success({ slug }));
    } catch (error) {
        yield put(participate.failure(error));
    }
}

export default function*() {
    yield all([
        takeLatest(fetchEvents.request, fetchEventsSaga),
        takeLatest(fetchEvent.request, fetchEventSaga),
        takeEvery(participate.request, participateSaga)
    ]);
}
