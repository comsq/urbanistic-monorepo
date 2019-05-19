import { IEventParams } from '../common/types/event';
import { Url } from '../utils/url';

export const events = {
    item: new Url<IEventParams>('/events/:slug/'),
    like: new Url<IEventParams>('/like/events/:slug'),
    list: new Url('/events/'),
    participate: new Url<IEventParams>('/participate/events/:slug'),
    random: new Url('/events/random/')
};

export const tags = {
    list: new Url('/tags')
};

export const authorizeUrl = new Url('/login/social/token_user/');
