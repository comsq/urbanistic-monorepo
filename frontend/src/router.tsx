import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import CreateEvent from './pages/createEvent';
import Event from './pages/event';
import Tags from './pages/tags';
import Main from './pages/main';
import NotFound from './pages/notFound';

import {
    createEventUrl,
    eventUrl,
    indexUrl,
    tagsUrl,
} from './urls/client';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path={createEventUrl.template} component={CreateEvent}/>
            <Route path={eventUrl.template} component={Event}/>
            <Route path={tagsUrl.template} component={Tags}/>
            <Route exact path={indexUrl.template} component={Main}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default Router;
