export interface Movie {
    id: number;
    name: string;
    release_date: number; // or Date if you prefer a Date object
    genre_ids: number[];
}