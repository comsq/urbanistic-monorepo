import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import Layout from './common-components/layout';

import CreateEvent from './pages/createEvent';
import Card from './pages/card';
import CardsList from './pages/cardsList';
import Main from './pages/main';
import NotFound from './pages/notFound';

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
