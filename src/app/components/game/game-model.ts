export interface GameModel {
    id: number;
    title: string;
    price: number;
    genres: Array<Genre>;
    isFavorite: boolean;
}

export interface Genre {
    genreName: string;
}