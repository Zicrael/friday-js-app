export interface EventItemModel {
    id: number;
    title: string;
    date: string;
    photos: string[];
    topics: TopicsModel[];
}

export interface TopicsModel {
    id: number;
    title: string;
    speaker: string;
    slides: string;
    video: string;
}
