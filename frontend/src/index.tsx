import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './service-worker';
import configureStore from './redux';

import Router from './router';

import './index.css';

ReactDOM.render(
    <Provider store={configureStore()}>
        <Router />
    </Provider>, document.getElementById('root')
);

serviceWorker.unregister();
