import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

import handleResponseError from './handleResponseError';

let baseURL = '';

if (import.meta.env.NEXT_PUBLIC_ENV === 'staging') {
  baseURL = import.meta.env.NEXT_PUBLIC_STG_URL ?? '';
} else if (import.meta.env.NEXT_PUBLIC_ENV === 'prod') {
  baseURL = import.meta.env.NEXT_PUBLIC_PROD_URL ?? '';
} else {
  // Use relative path in development to hit the Vite proxy
  baseURL = '';
}

const requestHeaders: { [key: string]: string } = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

const Axios: AxiosInstance = axios.create({
  baseURL,
  headers: requestHeaders,
  withCredentials: true,
});

function handleClearLocalStorage() {
  if (typeof window === 'undefined') return;
  ['user', 'loggedIn'].forEach((key) => {
    window.localStorage.removeItem(key);
  });
}

let unAuthorizedStatus = false;

Axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token.replace(/"/g, '')}`;
      }

      // const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      // config.headers["x-time-zone"] = userTimeZone;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error?.response?.status;

    if (status === 401 || status === 403) {
      if (unAuthorizedStatus) return;
      if (typeof window !== 'undefined') {
        handleResponseError(error.response);
        handleClearLocalStorage();
        // window.location.href = "/auth/login"; ← wrap this properly if you ever enable it
      }
      unAuthorizedStatus = true;
      return;
    }

    handleResponseError(error.response);
    throw error;
  },
);

export default Axios;
