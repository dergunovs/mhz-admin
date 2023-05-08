import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Login', component: () => import('@/auth/pages/LoginPage.vue') },

  { path: '/main', name: 'Main', component: () => import('@/common/pages/MainPage.vue') },

  { path: '/404', name: '404', component: () => import('@/common/pages/ErrorPage.vue') },
  { path: '/:catchAll(.*)', name: 'error', redirect: '404' },
];
