import { IEventParams } from '../common/types/event';
import { Url } from '../utils/url';

export const createEventUrl = new Url<IEventParams>('/events/create/');

export const eventUrl = new Url<IEventParams>('/events/:slug/');

export const eventsUrl = new Url('/events/');

export const filtersUrl = new Url('/filters/');

export const indexUrl = new Url('/');
