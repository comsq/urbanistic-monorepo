import { createAsyncAction, ActionType } from 'typesafe-actions';

import { IApiError } from '../../common/types/error';
import { IEvent } from '../../common/types/event';

import { IFetchEventRequest, IFetchItemsRequest, IFetchItemsResponse } from './types'

export const fetchEvent = createAsyncAction(
    'event/FETCH_REQUEST',
    'event/FETCH_RESPONSE',
    'event/FETCH_FAILURE'
)<IFetchEventRequest, IEvent, IApiError>();

export const fetchEvents = createAsyncAction(
    'events/FETCH_REQUEST',
    'events/FETCH_RESPONSE',
    'events/FETCH_FAILURE'
)<IFetchItemsRequest, IFetchItemsResponse, IApiError>();

const actions = { fetchEvent, fetchEvents };

export type EventsActions = ActionType<typeof actions>;

export default actions;
