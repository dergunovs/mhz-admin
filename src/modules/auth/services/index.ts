import { ref } from 'vue';

import { api } from '@/common/services/api';
import { ILoginFormData } from '@/auth/interface';

export const isLoggedIn = ref(false);

export function setToken(token: string) {
  document.cookie = `token=${token};Secure;samesite=strict;`;
}

export function getToken(): string | undefined {
  const { token } = Object.fromEntries(document.cookie.split('; ').map((v) => v.split('=')));

  return token;
}

export function deleteToken() {
  document.cookie = `token=;expires=${new Date(0).toUTCString()}`;
}

export function logout() {
  deleteToken();
  api.defaults.headers.common['Authorization'] = ``;
  window.location.href = '/';
  isLoggedIn.value = false;
}

export async function login(formData: ILoginFormData) {
  try {
    const { data } = await api.post<{ token: string }>('auth/login', formData);
    const token = data.token;

    setToken(token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    isLoggedIn.value = true;
  } catch (error) {
    isLoggedIn.value = false;
    throw new Error();
  }
}

export async function checkAuth() {
  try {
    if (!getToken()) return;

    api.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;
    await api.get('auth/check');
    isLoggedIn.value = true;
  } catch (error) {
    isLoggedIn.value = false;
    throw new Error();
  }
}
