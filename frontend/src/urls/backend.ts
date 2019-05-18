import { IEventParams } from '../common/types/event';
import { Url } from '../utils/url';

export const events = {
    list: new Url('/eventsUrl'),
    random: new Url('/eventsUrl/random'),
    item: new Url<IEventParams>('/eventsUrl/:slug')
};

export const tags = {
    list: new Url('/tags')
};
