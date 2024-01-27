export const API_PATHS = {
    authorization: '/api/authorization',
    genres: '/api/genres',
    genreById: (id: number) => `/api/genres/${id}`,
    genresBulk: '/api/genres/bulk',
    genresSearch: '/api/genres/search',
    movies: '/api/movies',
    movieById: (id: number) => `/api/movies/${id}`
};