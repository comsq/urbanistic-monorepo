import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import CreateEvent from './pages/createEvent';
import Event from './pages/event';
import Events from './pages/events';
import Main from './pages/main';
import NotFound from './pages/notFound';
import Filters from './pages/filters';

import {
    createEventUrl,
    eventUrl,
    indexUrl,
    filtersUrl
} from './urls/client';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path={createEventUrl.template} component={CreateEvent}/>
            <Route path={eventUrl.template} component={Event}/>
            <Route path={filtersUrl.template} component={Events}/>
            <Route path={filtersUrl.template} component={Filters}/>
            <Route exact path={indexUrl.template} component={Main}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default Router;
