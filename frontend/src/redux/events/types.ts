import { IApiError } from '../../common/types/error';
import { IEvent } from '../../common/types/event';
import { SortDirection } from '../../common/types/request';
import { IDictionary } from '../../common/types/dictionary';

export interface IFetchItemsRequest {
    limit: number;
    offset: number;
    search?: string;
    sortBy?: string;
    sortDirection?: SortDirection;
    tags?: string[];
    reset?: boolean;
}

export interface IFetchItemsResponse {
    count: number;
    reset?: boolean;
    items: IEvent[];
}

export interface IFetchEventRequest {
    slug: string;
}

export interface IParticipationRequest {
    slug: string;
}

export interface IEventsStore {
    count: number;
    eventsMap: IDictionary<IEvent>;
    items: IEvent[];
    fetchItemsStarted: boolean;
    fetchItemsError: IApiError | null;
    fetchEventStarted: boolean;
    fetchEventError: IApiError | null;
    limit: number;
    offset: number;
    participationRequested: boolean;
    participationError: IApiError | null;
    search?: string;
    sortBy?: string;
    sortDirection?: SortDirection;
}
