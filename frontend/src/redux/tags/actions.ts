import { createAsyncAction, ActionType } from 'typesafe-actions';

import { } from './types'

export const fetchTags = createAsyncAction(
    'tags/FETCH_REQUEST',
    'tags/FETCH_RESPONSE',
    'tags/FETCH_FAILURE'
)<any, any, any>();
export function selectTags(payload: any) {
    console.log('paylog', payload)
    return {type: 'tags/SELECT_TAGS', payload};
}

const actions = { fetchTags, selectTags };

export type TagsActions = ActionType<typeof actions>;

export default actions;
