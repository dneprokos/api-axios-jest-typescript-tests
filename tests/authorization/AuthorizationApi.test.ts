import { Authorization } from "@models/Authorization";
import AuthorizationApi from "@services/AuthorizationApi";
import envConfig from "@config/envConfig";
import { AxiosResponse } from "axios";

describe('POST /authorization', () => {
    test('generateAuthToken successfully with admin creds returns a token', async () => {
        // Arrange

        // Act
        const response: AxiosResponse<Authorization> = await new AuthorizationApi()
            .generateAuthToken(envConfig.adminUser, envConfig.adminPassword);

        // Assert
        expect(response.status).toBe(200);
        expect(response.data.accessToken).toBeTruthy();
    });

    test('generateAuthToken successfully with user creds returns a token', async () => {
        // Arrange

        // Act
        const response: AxiosResponse<Authorization> = await new AuthorizationApi()
            .generateAuthToken(envConfig.regularUser, envConfig.regularPassword);

        // Assert
        expect(response.status).toBe(200);
        expect(response.data.accessToken).toBeTruthy();
    });
});