import { API_REQERES_URL } from '@/constants/env';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { logOnDev } from '@/utils/logger';

const ReqresClient = axios.create({
  baseURL: API_REQERES_URL,
  headers: {
    Accept: 'application/json',
    withCredentials: true,
  },
});

ReqresClient.interceptors.request.use(async (config) => {
  try {
    return config;
  } catch (error) {
    return Promise.reject(error);
  }
});

const onResponse = (response: AxiosResponse): AxiosResponse => {
  const { method, url } = response.config;
  const { status } = response;
  // Set Loading End Here
  // Handle Response Data Here
  // Error Handling When Return Success with Error Code Here
  logOnDev(`🚀 [API REQRES] ${method?.toUpperCase()} ${url} | Response ${status}`);

  return response;
};

const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError> => {
  if (axios.isAxiosError(error)) {
    const { message } = error;
    const { method, url } = error.config as AxiosRequestConfig;
    const { status } = (error.response as AxiosResponse) ?? {};

    logOnDev(`🚨 [API REQRES] ${method?.toUpperCase()} ${url} | Error ${status} ${message}`);

    switch (status) {
      case 401: {
        // "Login required"
        break;
      }
      case 403: {
        // "Permission denied"
        break;
      }
      case 404: {
        // "Invalid request"
        break;
      }
      case 500: {
        // "Server error"
        break;
      }
      default: {
        // "Unknown error occurred"
        break;
      }
    }

    // if (status === 403 && url === API_AUTH_GET_PROFILE) {
    //   // Delete Token & Go To Login Page if you required.
    //   // AsyncStorage.clear();
    // }
  } else {
    logOnDev(`🚨 [API REQRES] | Error ${error.message}`);
  }

  return Promise.reject(error);
};

ReqresClient.interceptors.response.use(onResponse, onErrorResponse);

export default ReqresClient;
