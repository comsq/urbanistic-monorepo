import { IEventParams } from '../common/types/event';
import { Url } from '../utils/url';

export const createEventUrl = new Url<IEventParams>('/events/create/');

export const eventUrl = new Url<IEventParams>('/events/:slug/');

export const tagsUrl = new Url('/tags/');

export const indexUrl = new Url('/');
