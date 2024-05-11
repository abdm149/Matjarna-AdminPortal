import axios from "axios";
import { showFailToast } from "../common/toasts";
import { BASE_URL } from "../common/constants";
import authService from "../services/authService";

// Create axios instance
const commInstance = axios.create({
  baseURL: BASE_URL,
});

commInstance.interceptors.request.use(
  (config) => {
    const { url } = config;
    if (url && url.includes('/private/')) {
      const authToken = authService.loadToken();
      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

commInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const errorStatus = error.response?.status || 500;
    return Promise.reject({ status: errorStatus });
  }
);

export default commInstance;
