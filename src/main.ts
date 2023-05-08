import { createApp } from 'vue';

import App from './App.vue';
import router from '@/common/router';

import '@/common/assets/main.scss';

const app = createApp(App);

app.use(router);
app.mount('#app');
