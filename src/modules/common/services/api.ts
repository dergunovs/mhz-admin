import axios from 'axios';

import { logout } from '@/auth/services';

axios.defaults.baseURL = import.meta.env.VITE_API;

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 403) logout();
    if (error.response?.data) alert(error.response.data.message);

    throw new Error();
  }
);

export const api = axios;

export function setAuthHeader(token: string) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export function deleteAuthHeader() {
  api.defaults.headers.common['Authorization'] = ``;
}
