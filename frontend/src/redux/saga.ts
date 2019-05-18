import { all } from 'redux-saga/effects';

import eventsSaga from './events/saga'

export default function* rootSaga() {
    yield all([eventsSaga]);
}
