import { IApiError } from '../../common/types/error';
import { IEvent } from '../../common/types/event';
import { SortDirection } from '../../common/types/request';

export interface IFetchRequest {
    limit: string;
    offset: string;
    search?: string;
    sortBy?: string;
    sortDirection?: SortDirection;
    tag?: string;
}

export interface IFetchResponse {
    count: number;
    items: IEvent[];
}

export interface IEventsStore {
    count: number;
    items: IEvent[];
    fetchStarted: boolean;
    fetchError: IApiError | null;
    limit: number;
    offset: number;
    search?: string;
    sortBy?: string;
    sortDirection?: SortDirection;
}
