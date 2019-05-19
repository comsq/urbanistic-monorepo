import { ITag } from './tag';

export interface IEventParams {
    slug: string;
}

export interface IEventBriefInfo {
    slug: string;
    title: string;
    image: string;
}

export interface IEvent extends IEventParams {
    description: string;
    date: number; // unix millis
    image: string;
    isParticipant: boolean;
    likesCount: number | null;
    maxParticipantsCount: number | null;
    participantsCount: number | null;
    similarWith?: IEventBriefInfo[];
    tags: ITag[];
    title: string
}
