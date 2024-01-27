import { AxiosResponse } from "axios";
import BaseApi from "./BaseApi";
import { Authorization } from "@/models/Authorization";

export default class AuthorizationApi extends BaseApi {
    constructor() {
        super();
    }

    /**
     * Generate auth token for user. POST /api/authorization
     * @param username - The username of the user
     * @param password - The password of the user
     * @returns A promise that resolves to an object containing the token
     */
    async generateAuthToken(username: string, password: string): Promise<AxiosResponse<Authorization>> {
        const queryParams = {
            username: username,
            password: password,
        };

        const response = await this.instance.post('/api/authorization', null, {
            params: queryParams,
            headers: {
                Accept: 'application/json',
            }
        });

        return response;
    }
}