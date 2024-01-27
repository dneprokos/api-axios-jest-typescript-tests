import { API_PATHS } from "@/constants/apiPaths";
import BaseApi from "./BaseApi";
import { Movie } from "@/models/Movie";

export default class MoviesApi extends BaseApi {
    constructor() {
        super();
    }

    async getMovieById(authToken: string, id: number) {
        return this.instance.get(API_PATHS.movieById(id), {
            headers: this.buildDefaultHeaders(authToken)
        });
    }

    async deleteMovieById(authToken: string, id: number) {
        return this.instance.delete(API_PATHS.movieById(id), {
            headers: this.buildDefaultHeaders(authToken)
        });
    }

    async createMovie(authToken: string, movie: Movie) {
        return this.instance.post(API_PATHS.movies, movie, {
            headers: this.buildDefaultHeaders(authToken)
        });
    }

    async getMovies(authToken: string, params: GenreSearchQueryParams) {
        return this.instance.get(API_PATHS.movies, {
            params: params,
            headers: this.buildDefaultHeaders(authToken)
        });
    }
}