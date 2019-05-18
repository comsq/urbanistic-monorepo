import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CreateEvent from './pages/CreateEvent'
import Card from './pages/Card'
import CardsList from './pages/CardsList'
import Main from './pages/Main'
import NotFound from './pages/NotFound'
import Layout from "./common-components/Layout";

import reducer from './redux/reducers'

ReactDOM.render(
    <Provider store={createStore(reducer)}>
        <BrowserRouter>
            <Switch>
                <Layout>
                <Route path="/create/event" component={CreateEvent}/>
                <Route path="/card" component={Card}/>
                <Route path="/cards" component={CardsList}/>
                <Route exact path="/" component={Main}/>
                <Route component={NotFound}/>
                </Layout>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
