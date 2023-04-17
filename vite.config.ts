import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgrPlugin(),
    command !== 'build'
      ? checker({ typescript: true, eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"' } })
      : undefined
  ],
  server: {
    port: 9000
  },
  define: {
    'process.env': process.env
  },
  test: {
    environment: 'jsdom' // or 'jsdom', 'node'
  }
}));
