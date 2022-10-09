import axios from 'axios';

function getBaseURL() {
  if (process.env.NEXT_PUBLIC_APP_ENVIRONMENT === 'local') return 'http://localhost:3333';
  if (process.env.NEXT_PUBLIC_APP_ENVIRONMENT === 'dev') return '';
  if (process.env.NEXT_PUBLIC_APP_ENVIRONMENT === 'prod') return '';
  return 'http://localhost:3333';
}

function getToken() {
  return null;
}

export const api = axios.create({
  baseURL: getBaseURL(),
});

api.interceptors.request.use((config) => {
  config.headers = { Authorization: getToken() as unknown as string | number | boolean };
  return config;
});
