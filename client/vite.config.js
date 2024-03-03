import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      '@syncfusion/ej2-react-buttons',
      // Add other Syncfusion components as needed
      new BundleAnalyzerPlugin(),
    ],
  },
});
