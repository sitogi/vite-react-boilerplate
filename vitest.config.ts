import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

import { resolve } from './vite.config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
  plugins: [react()],
  resolve: resolve,
});
