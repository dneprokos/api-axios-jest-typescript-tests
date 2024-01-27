interface GenreSearchQueryParams extends PaginatedSearchQueryParams {
    name?: string;
    release_date?: string;
    genre_ids?: number[];
}