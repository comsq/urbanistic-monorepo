import { getType } from 'typesafe-actions';

import {TagsActions, fetchTags} from './actions';
import { ITagsStore } from './types';

const initialState: ITagsStore = {
    items: [],
    selectedSlugs: new Set()
};

export default function (state = initialState, action: TagsActions | {type: string, payload: {slug: string, checked: boolean}}) {
    switch (action.type) {
        case getType(fetchTags.success): {
            return {
                ...state,
                items: [...state.items, ...action.payload.items]
            }
        }
        case 'tags/SELECT_TAGS': {
            let selectedSlugs = new Set(state.selectedSlugs);
            const tag = action.payload;
            if (tag.checked) {
                selectedSlugs.add(tag.slug);
            } else {
                selectedSlugs.delete(tag.slug);
            }
            return {
                ...state,
                selectedSlugs
            }
        }
        default: {
            return state;
        }
    }
}
