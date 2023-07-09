import { deleteAuthHeader } from '@/common/services/api';

export function setCookieToken(token: string) {
  document.cookie = `token=${token};Secure;samesite=strict;`;
}

export function getCookieToken(): string | undefined {
  const { token } = Object.fromEntries(document.cookie.split('; ').map((v) => v.split('=')));

  return token;
}

export function deleteCookieToken() {
  document.cookie = `token=;expires=${new Date(0).toUTCString()}`;
}

export function logout() {
  deleteCookieToken();
  deleteAuthHeader();
  window.location.href = '/';
}
