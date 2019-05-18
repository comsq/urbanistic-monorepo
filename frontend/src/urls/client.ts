import { IEventParams } from '../common/types/event';
import { Url } from '../utils/url';

export const createEventUrl = new Url<IEventParams>('/eventsUrl/create');

export const eventUrl = new Url<IEventParams>('/eventsUrl/:slug');

export const eventsUrl = new Url('/eventsUrl');

export const indexUrl = new Url('/');
