import { RootState } from '../redux/types';

export const selectEvent = (state: RootState, slug: string) => state.events.eventsMap[slug];

export const selectEventFetchError = (state: RootState) => state.events.fetchEventError;

export const selectEventFetchStarted = (state: RootState) => state.events.fetchEventStarted;
