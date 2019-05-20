import { IEventParams } from '../common/types/event';
import { Url } from '../utils/url';

export const eventUrl = new Url<IEventParams>('/events/:slug/');

export const tagsUrl = new Url('/tags/');

export const authUrl = new Url('/auth/');

export const randomUrl = new Url('/random');

export const indexUrl = new Url('/');

export const vkUrl = new Url(`https://oauth.vk.com/authorize?client_id=6988779&response_type=code&redirect_uri=https://w-t-g.herokuapp.com&scope=offline`);

export const ghUrl = new Url(`https://github.com/login/oauth/authorize?client_id=8f98648f6231806546f8&scope=email&response_type=code&redirect_uri=https://w-t-g.herokuapp.com&scope=email&state=github`);
