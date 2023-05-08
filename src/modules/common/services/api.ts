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
