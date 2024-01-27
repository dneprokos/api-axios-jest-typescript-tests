import { AxiosResponse } from "axios";
import BaseApi from "./BaseApi";
import { Genre } from "@/models/Genre";
import { PaginatedResponse } from "@/models/PaginatedResponse";
import { API_PATHS } from "@/constants/apiPaths";

export default class GenresApi extends BaseApi {
    constructor() {
        super();
    }

    async getGenres(authToken: string): Promise<AxiosResponse<Genre[]>> {
        return this.instance.get(API_PATHS.genres, {
            headers: this.buildDefaultHeaders(authToken)
        });
    }

    async getGenreById(authToken: string, id: number): Promise<AxiosResponse<Genre>> {
        return this.instance.get(API_PATHS.genreById(id), {
            headers: this.buildDefaultHeaders(authToken)
        });
    }

    async createGenre(authToken: string, genre: Genre): Promise<AxiosResponse<Genre>> {
        return this.instance.post(API_PATHS.genres, genre, {
            headers: this.buildDefaultHeaders(authToken)
        });
    }

    async createGenres(authToken: string, genres: Genre[]): Promise<AxiosResponse<Genre>> {
        return this.instance.post(API_PATHS.genresBulk, genres, {
            headers: this.buildDefaultHeaders(authToken)
        });
    }

    async updateGenre(authToken: string, id: number, genre: Genre): Promise<AxiosResponse<Genre>> {
        return this.instance.put(API_PATHS.genreById(id), genre, {
            headers: this.buildDefaultHeaders(authToken)
        });
    }

    async deleteGenre(authToken: string, id: number): Promise<AxiosResponse> {
        return this.instance.delete(API_PATHS.genreById(id), {
            headers: this.buildDefaultHeaders(authToken)
        });
    }

    async searchGenres(authToken: string, queryParams: GenreSearchQueryParams = {}) 
    : Promise<AxiosResponse<PaginatedResponse<Genre>>> {
        return this.instance.get(API_PATHS.genresSearch, {
            params: queryParams,
            headers: this.buildDefaultHeaders(authToken)
        });
    }
}