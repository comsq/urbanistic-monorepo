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
    title: string
    tags: IEventBriefInfo[];
    likesCount: number | null;
    date: number; // unix millis
    image: string;
    participantsCount: number | null;
    maxParticipants: number | null;
    similarWith?: IEventBriefInfo[];
}
