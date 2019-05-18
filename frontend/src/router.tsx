import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import Layout from './common-components/Layout';

import CreateEvent from './pages/CreateEvent';
import Card from './pages/Card';
import CardsList from './pages/CardsList';
import Main from './pages/Main';
import NotFound from './pages/NotFound';

import {
    createEventUrl,
    eventUrl,
    eventsUrl,
    indexUrl
} from './urls/client';

const Router = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route path={createEventUrl.template} component={CreateEvent}/>
                <Route path={eventUrl.template} component={Card}/>
                <Route path={eventsUrl.template} component={CardsList}/>
                <Route exact path={indexUrl.template} component={Main}/>
                <Route component={NotFound}/>
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default Router;
