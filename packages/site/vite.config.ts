import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from "path";

const rootDir = path.join(__dirname, 'src');
const outputDir = path.join(__dirname, 'dist');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  root: rootDir,
  build: {
    emptyOutDir: true,
    outDir: outputDir,
  },
  resolve: {
    alias: {
      '~': rootDir,
      'assets': path.join(rootDir, 'assets'),
      'components': path.join(rootDir, 'components'),
      'lib': path.join(rootDir, 'lib'),
    }
  }
});
