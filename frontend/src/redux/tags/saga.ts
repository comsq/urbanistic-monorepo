import { all, call, put, takeEvery } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

import { tags } from '../../urls/backend';
import fetch from '../../common/fetch';

import {fetchTags} from './actions';

function* fetchTagsSaga(action: ActionType<typeof fetchTags.request>) {
    const url = tags.list.build();
    const props = {
        url,
        method: 'GET',
        data: action.payload
    };

    try {
        const data = yield call(fetch, props);

        yield put(fetchTags.success({items: data.data}));
    } catch (error) {
        yield put(fetchTags.failure(error));
    }
}

export default function*() {
    yield all([
        takeEvery(fetchTags.request, fetchTagsSaga)
    ]);
}
