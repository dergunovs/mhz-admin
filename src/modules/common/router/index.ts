import { createRouter, createWebHistory } from 'vue-router';

import { routes } from '@/common/router/routes';
import { getCookieToken } from '@/auth/services';

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition ? savedPosition : { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (to.path !== '/' && !getCookieToken()) {
    next({ path: '/' });
  } else {
    next();
  }
});

export default router;
