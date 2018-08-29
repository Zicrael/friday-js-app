export interface EventItemModel {
    id: number;
    title: string;
    date: string;
    photos: PhotosModel[];
    topics: TopicsModel[];
}

export interface TopicsModel {
    id: number;
    title: string;
    speaker: string;
    speakerPhoto: string;
    slides: string;
    video: string;
}

export interface PhotosModel {
    id: number;
    link: string;
}

