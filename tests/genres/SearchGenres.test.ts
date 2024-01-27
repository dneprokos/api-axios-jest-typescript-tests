import { Genre } from "@/models/Genre";
import { PaginatedResponse } from "@/models/PaginatedResponse";
import GenresApi from "@/services/GenresApi";
import AuthorizationActions from "@services-actions/authorizationActions";
import { AxiosResponse } from "axios";

describe('GET /genres/search', () => {
    let adminToken = '';
    let userToken = '';

    beforeAll(async () => {
        const authActions = new AuthorizationActions();
        adminToken = await authActions.generateAdminToken();
        userToken = await authActions.generateUserToken();
    });
    
    test('searchGenres successfully - returns a list of paginated genres', async () => {
        // Arrange

        // Act
        const response: AxiosResponse<PaginatedResponse<Genre>> = await new GenresApi().searchGenres(adminToken);

        // Assert
        expect(response.status).toBe(200);
    });
});