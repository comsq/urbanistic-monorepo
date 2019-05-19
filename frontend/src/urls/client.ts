import { IEventParams } from '../common/types/event';
import { Url } from '../utils/url';

export const createEventUrl = new Url<IEventParams>('/events/create/');

export const eventUrl = new Url<IEventParams>('/events/:slug/');

export const tagsUrl = new Url('/tags/');

export const authUrl = new Url('/auth/');

export const indexUrl = new Url('/');

export const fbUrl = new Url(`https://www.facebook.com/v3.3/dialog/oauth?client_id=2245802555733171&redirect_uri=https://w-t-g.herokuapp.com&scope=email&response_type=code`);

export const vkUrl = new Url(`https://oauth.vk.com/authorize?client_id=6988779&scope=email&response_type=code&redirect_uri=https://w-t-g.herokuapp.com&scope=email`);

export const ghUrl = new Url(`https://github.com/login/oauth/authorize?client_id=8f98648f6231806546f8&scope=email&response_type=code&redirect_uri=https://w-t-g.herokuapp.com&scope=email`);
