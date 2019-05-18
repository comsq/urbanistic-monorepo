import { getType } from 'typesafe-actions';

import {EventsActions, fetchEvents} from './actions';
import { IEventsStore } from './types';

const initialState: IEventsStore = {
    count: 0,
    items: [],
    fetchStarted: false,
    fetchError: null,
    limit: 10,
    offset: 0,
    search: '',
    sortBy: 'date',
    sortDirection: 'ASC'
};

export default function (state = initialState, action: EventsActions) {
    switch (action.type) {
        case getType(fetchEvents.request): {
            return {
                ...state,
                fetchStarted: false,
                fetchError: null
            };
        }
        case getType(fetchEvents.success): {
            const { count, items } = action.payload;

            return {
                ...state,
                count,
                items,
                fetchStarted: false,
                fetchError: null
            }
        }
        case getType(fetchEvents.failure): {
            return {
                ...state,
                fetchStarted: false,
                fetchError: action.payload
            };
        }
        default: {
            return state;
        }
    }
}
