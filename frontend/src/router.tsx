import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import CreateEvent from './pages/createEvent';
import Card from './pages/card';
import CardsList from './pages/cardsList';
import Main from './pages/main';
import NotFound from './pages/notFound';
import Tags from './pages/tags';

import {
    createEventUrl,
    eventUrl,
    eventsUrl,
    indexUrl, tagsUrl
} from './urls/client';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path={createEventUrl.template} component={CreateEvent}/>
            <Route path={eventUrl.template} component={Card}/>
            <Route path={eventsUrl.template} component={CardsList}/>
            <Route path={tagsUrl.template} component={Tags}/>
            <Route exact path={indexUrl.template} component={Main}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default Router;
