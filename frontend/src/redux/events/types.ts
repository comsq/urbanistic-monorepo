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
    tag?: string;
}

export interface IFetchItemsResponse {
    count: number;
    items: IEvent[];
}

export interface IFetchEventRequest {
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
    search?: string;
    sortBy?: string;
    sortDirection?: SortDirection;
}
