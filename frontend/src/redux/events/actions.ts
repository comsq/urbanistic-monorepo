import { createAsyncAction, ActionType } from 'typesafe-actions';

import { IApiError } from '../../common/types/error';
import { IFetchRequest, IFetchResponse } from './types'

export const fetchEvents = createAsyncAction(
    'events/FETCH_REQUEST',
    'events/FETCH_RESPONSE',
    'events/FETCH_FAILURE'
)<IFetchRequest, IFetchResponse, IApiError>();

const actions = { fetchEvents };

export type EventsActions = ActionType<typeof actions>;

export default actions;
