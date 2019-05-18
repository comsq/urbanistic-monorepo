import { all } from 'redux-saga/effects';

import eventsSaga from './events/saga';
import tagsSaga from './tags/saga';

export default function* rootSaga() {
    yield all([
        eventsSaga(),
        tagsSaga()
    ]);
}
