const envConfig = {
  baseURL: process.env.BASE_URL || '',
  regularUser: process.env.REGULAR_USER || '',
  regularPassword: process.env.REGULAR_USER_PASSWORD || '',
  adminUser: process.env.ADMIN_USER || '',
  adminPassword: process.env.ADMIN_USER_PASSWORD || '',
};

export default envConfig;