import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer'
import rootSaga from './saga';

export default function configureStore(state = {}) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducer, state, applyMiddleware(sagaMiddleware));

    sagaMiddleware.run(rootSaga);

    return store;
}
