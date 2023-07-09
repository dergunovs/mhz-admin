import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import { getCookieToken, setCookieToken } from '@/auth/services';
import { ILoginFormData } from '@/auth/interface';
import { api, setAuthHeader } from '@/common/services/api';

export function useAuth() {
  const router = useRouter();
  const route = useRoute();

  const isAuth = ref(false);

  async function login(formData: ILoginFormData) {
    try {
      const { data } = await api.post<{ token: string }>('auth/login', formData);
      const token = data.token;

      setCookieToken(token);
      setAuthHeader(token);
      isAuth.value = true;
      router.push('/main');
    } catch (error) {
      isAuth.value = false;
      throw new Error();
    }
  }

  async function checkAuth() {
    try {
      const token = getCookieToken();

      if (!token) return;

      setAuthHeader(token);
      await api.get('auth/check');
      isAuth.value = true;
      if (route.path === '/') router.push('/main');
    } catch (error) {
      isAuth.value = false;
      throw new Error();
    }
  }

  return {
    isAuth,
    login,
    checkAuth,
  };
}
