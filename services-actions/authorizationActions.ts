import { Authorization } from "@/models/Authorization";
import AuthorizationApi from "@/services/AuthorizationApi";
import envConfig from "@config/envConfig";
import { AxiosResponse } from "axios";

export default class AuthorizationActions {
    async generateAdminToken(): Promise<string> {
        const adminResponse: AxiosResponse<Authorization>  = await new AuthorizationApi()
            .generateAuthToken(envConfig.adminUser, envConfig.adminPassword);
        
        expect(adminResponse.status).toBe(200);
        expect(adminResponse.data.accessToken).toBeTruthy();

        return adminResponse.data.accessToken;
    }

    async generateUserToken(): Promise<string> {
        const userResponse: AxiosResponse<Authorization> = await new AuthorizationApi()
            .generateAuthToken(envConfig.regularUser, envConfig.regularPassword);

        expect(userResponse.status).toBe(200);
        expect(userResponse.data.accessToken).toBeTruthy();

        return userResponse.data.accessToken;
    }
}