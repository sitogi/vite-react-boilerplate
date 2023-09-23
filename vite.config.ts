import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export const resolve = {
  alias: {
    '~/': `${__dirname}/src/`, // path.join(__dirname, "src/") でも可
  },
};

// https://vitejs.dev/config/
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [react()],
  resolve,
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
});
