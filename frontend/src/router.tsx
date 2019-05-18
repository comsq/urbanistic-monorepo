import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import Layout from './components/layout';

import CreateEvent from './pages/createEvent';
import Card from './pages/card';
import CardsList from './pages/cardsList';
import Main from './pages/main';
import NotFound from './pages/notFound';
import Filters from './pages/filters';

import {
    createEventUrl,
    eventUrl,
    eventsUrl,
    indexUrl, filtersUrl
} from './urls/client';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path={createEventUrl.template} component={CreateEvent}/>
            <Route path={eventUrl.template} component={Card}/>
            <Route path={eventsUrl.template} component={CardsList}/>
            <Route path={filtersUrl.template} component={Filters}/>
            <Route exact path={indexUrl.template} component={Main}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default Router;
