import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

const config = {
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '/src'),
            '@icons': path.resolve(__dirname, '/src/assets/icons'),
            '@images': path.resolve(__dirname, '/src/assets/images'),
            '@components': path.resolve(__dirname, '/src/components'),
        },
    },
};

// https://vitejs.dev/config/
export default defineConfig(config);
