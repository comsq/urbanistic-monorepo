export interface IEventParams {
    slug: string;
}

export interface IEventBriefInfo {
    slug: string;
    title: string;
    image: string;
}

export interface IEvent extends IEventParams{
    description: string;
    tags: string[];
    likesCount: number | null;
    participantsCount: number | null;
    maxParticipants: number | null;
    date: number; // unix millis
    similarWith: IEventBriefInfo[];
}
