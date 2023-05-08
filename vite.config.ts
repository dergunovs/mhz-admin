import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ElementPlus from 'unplugin-element-plus/vite';

export default defineConfig({
  server: { port: 8080 },

  build: { target: 'esnext' },

  resolve: { alias: { '@': resolve(__dirname, './src/modules') } },

  plugins: [ElementPlus({}), vue()],
});
