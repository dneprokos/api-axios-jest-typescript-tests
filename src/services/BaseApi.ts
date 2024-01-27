import envConfig from "@config/envConfig";
import axios, { AxiosInstance } from "axios";

export default abstract class BaseApi {
    protected instance: AxiosInstance;
  
    constructor() {
      this.instance = axios.create({
        baseURL: envConfig.baseURL, // Ensure you have BASE_URL in your .env file
        validateStatus: function (status) {
          return status >= 200 && status < 500; // Customize this as per your requirements
        },
      });
    }

    protected buildDefaultHeaders(authToken: string): { Accept: string; Authorization: string; } {
        return {
            Accept: 'application/json',
            Authorization: `Bearer ${authToken}`
        }
    }

    protected setDefaultHeaders(authToken: string): AxiosInstance {
        this.instance.defaults.headers.common['Accept'] = 'application/json';
        this.instance.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
        return this.instance;
    }
}