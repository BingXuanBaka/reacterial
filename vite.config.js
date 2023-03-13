import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'
import copy from 'rollup-plugin-copy'

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            packages: path.resolve(__dirname, './packages'),
        },
    },
    plugins: [
        react({ include: '**/*.tsx' })
    ],
    css:{
        modules: {
            localsConvention: 'camelCaseOnly'
        },
    },
    build: {
        outDir: 'dist',
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'reacterial',
            fileName: (format) => `reacterial.${format}.js`,
        },
        rollupOptions: {
            external: ['react'],
            output: {
                globals: {
                    react: 'React'
                }
            }
        }
    },
})