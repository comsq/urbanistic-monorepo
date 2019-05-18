import { combineReducers } from 'redux';

import eventsReducer from './events/reducer';
import tagsReducer from './tags/reducer';

export default combineReducers({
    events: eventsReducer,
    tags: tagsReducer
});
