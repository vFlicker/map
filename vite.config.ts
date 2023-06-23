import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), eslint(), tsconfigPaths(), checker({ typescript: true })],
  base: '/map/',
});
