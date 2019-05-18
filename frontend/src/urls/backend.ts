import { IEventParams } from '../common/types/event';
import { Url } from '../utils/url';

export const events = {
    list: new Url('/events'),
    random: new Url('/events/random'),
    item: new Url<IEventParams>('/events/:slug')
};

export const tags = {
    list: new Url('/tags')
};
