import { getType } from 'typesafe-actions';

import { EventsActions, fetchEvent, fetchEvents, likeEvent, participate } from './actions';
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
    participationRequested: false,
    participationError: null,
    search: '',
    sortBy: 'date',
    sortDirection: 'ASC',
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
            const { count, items, reset } = action.payload;

            return {
                ...state,
                count,
                items: reset ? items : state.items.concat(items),
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
        case getType(participate.request): {
            return {
                ...state,
                participationRequested: true,
                participationError: null
            };
        }
        case getType(participate.success): {
            const { slug } = action.payload;
            const prevParticipantsCount =
                (state.eventsMap[slug] && state.eventsMap[slug].participantsCount) || 0;

            return {
                ...state,
                eventsMap: {
                    ...state.eventsMap,
                    [slug]: {
                        ...state.eventsMap[slug],
                        isParticipant: true,
                        participantsCount: prevParticipantsCount + 1
                    }
                },
                participationRequested: false,
                participationError: null
            };
        }
        case getType(participate.failure): {
            return {
                ...state,
                participationRequested: false,
                participationError: action.payload
            }
        }
        case getType(likeEvent.success): {
            const { slug } = action.payload;

            const wasLiked = Boolean(
                state.eventsMap[slug] && state.eventsMap[slug].isLiked
            );

            return {
                ...state,
                eventsMap: {
                    ...state.eventsMap,
                    [slug]: {
                        ...state.eventsMap[slug],
                        isLiked: !wasLiked
                    }
                }
            };
        }
        default: {
            return state;
        }
    }
}
