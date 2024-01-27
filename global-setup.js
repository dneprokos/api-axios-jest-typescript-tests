// Global variables to store tokens
global.adminToken = '';
global.regularToken = '';

beforeAll(async () => {
    // Make API request to generate admin token and store it in global.adminToken
    const adminResponse = await new AuthorizationApi()
            .generateAuthToken(envConfig.adminUser, envConfig.adminPassword);
    expect(adminResponse.status).toBe(200);
    global.adminToken = adminResponse.data.accessToken;
    console.log('adminToken: ', global.adminToken);
 
    // Make API request to generate regular user token and store it in global.regularToken
    const regularResponse = await new AuthorizationApi()
            .generateAuthToken(envConfig.regularUser, envConfig.regularPassword);
    expect(regularResponse.status).toBe(200);
    global.regularToken = regularResponse.data.accessToken;
    console.log('regularToken: ', global.regularToken);
});