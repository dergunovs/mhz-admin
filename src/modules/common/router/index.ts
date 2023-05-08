import { createRouter, createWebHistory } from 'vue-router';

import { routes } from '@/common/router/routes';
import { getToken } from '@/auth/services';

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition ? savedPosition : { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (to.path !== '/' && !getToken()) next({ path: '/' });
  next();
});

export default router;
