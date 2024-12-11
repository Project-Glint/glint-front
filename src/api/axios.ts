import axios, { CreateAxiosDefaults } from 'axios';

// 1분의 응답이 없으면 timeout
const timeout = 1 * 60 * 1000;

const axiosConfig: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: timeout,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
};

export const httpClient = axios.create(axiosConfig);

httpClient.interceptors.request.use(
  (config) => {
    // Retrieve tokens from cookies
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 에러 케이스 커스텀하기
    return Promise.reject(error.message);
  }
);
