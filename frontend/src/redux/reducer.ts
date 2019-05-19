import { combineReducers } from 'redux';

import sessionReducer from './session/reducer';
import eventsReducer from './events/reducer';
import tagsReducer from './tags/reducer';

export default combineReducers({
    session: sessionReducer,
    events: eventsReducer,
    tags: tagsReducer
});
