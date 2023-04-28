import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            packages: path.resolve(__dirname, './packages'),
        },
    },
    plugins: [
        react(),
    ],
    css:{
        modules: {
            localsConvention: 'camelCaseOnly'
        },
    },
})