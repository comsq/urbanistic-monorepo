import { getType } from 'typesafe-actions';

import { EventsActions, fetchEvent, fetchEvents } from './actions';
import { IEventsStore } from './types';

const initialState: IEventsStore = {
    count: 0,
    eventsMap: {},
    items: [],
    fetchItemsStarted: false,
    fetchItemsError: null,
    fetchEventStarted: false,
    fetchEventError: null,
    limit: 10,
    offset: 0,
    search: '',
    sortBy: 'date',
    sortDirection: 'ASC'
};

export default function (state = initialState, action: EventsActions) {
    switch (action.type) {
        case getType(fetchEvent.request): {
            return {
                ...state,
                fetchEventStarted: true,
                fetchEventError: null
            };
        }
        case getType(fetchEvent.success): {
            const { slug } = action.payload;

            return {
                ...state,
                eventsMap: {
                    [slug]: action.payload
                },
                fetchEventStarted: false,
                fetchEventError: null
            };
        }
        case getType(fetchEvent.failure): {
            return {
                ...state,
                fetchEventStarted: false,
                fetchEventError: action.payload
            }
        }
        case getType(fetchEvents.request): {
            return {
                ...state,
                fetchItemsStarted: true,
                fetchItemsError: null
            };
        }
        case getType(fetchEvents.success): {
            const { count, items } = action.payload;

            return {
                ...state,
                count,
                items: state.items.concat(items),
                fetchItemsStarted: false,
                fetchItemsError: null
            }
        }
        case getType(fetchEvents.failure): {
            return {
                ...state,
                fetchItemsStarted: false,
                fetchItemsError: action.payload
            };
        }
        default: {
            return state;
        }
    }
}
