import axios from 'axios';
import Router from 'next/router';
import { parseCookies } from 'nookies';

function getBaseURL() {
  if (process.env.NEXT_PUBLIC_APP_ENVIRONMENT === 'local') return 'http://localhost:3333';
  if (process.env.NEXT_PUBLIC_APP_ENVIRONMENT === 'dev') return '';
  if (process.env.NEXT_PUBLIC_APP_ENVIRONMENT === 'prod') return '';
  return 'http://localhost:3333';
}

export const api = axios.create({
  baseURL: getBaseURL(),
});

api.interceptors.request.use(
  (config) => {
    const { 'nextauth.token': token } = parseCookies();

    config.headers = { Authorization: `Bearer ${token && token}` };

    return config;
  },
  (err) => {
    if (err.response.status === 401) return Router.push('/');
    return null;
  }
);
