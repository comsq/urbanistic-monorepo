import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducer from './redux/reducers'

ReactDOM.render(
    <Provider store={createStore(reducer)}>
        <BrowserRouter>
            <Switch>
                {/*<Route path="/create/event" component={CreateEvent}/>*/}
                {/*<Route path="/card" component={Card}/>*/}
                {/*<Route path="/cards" component={CardsList}/>*/}
                {/*<Route exact path="/" component={Main}/>*/}
                {/*<Route component={NotFound}/>*/}
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
