import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import Auth from './pages/auth';
import Event from './pages/event';
import Tags from './pages/tags';
import Main from './pages/main';
import Random from './pages/random';
import NotFound from './pages/not-found';

import {
    authUrl,
    eventUrl,
    indexUrl,
    tagsUrl,
    randomUrl,
} from './urls/client';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path={eventUrl.template} component={Event}/>
            <Route path={tagsUrl.template} component={Tags}/>
            <Route path={randomUrl.template} component={Random}/>
            <Route path={authUrl.template} component={Auth}/>
            <Route exact path={indexUrl.template} component={Main}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default Router;
