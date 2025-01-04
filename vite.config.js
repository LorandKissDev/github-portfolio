import { defineConfig } from "vite";
import liveReload from 'vite-plugin-live-reload';
import { resolve } from 'path';

export default ({ mode }) => {
    return defineConfig({
        plugins: [
            liveReload([
                __dirname + '/index.html',
            ]),
        ],
        resolve: {
            alias: {
              "@": resolve(__dirname, "./resources"),
            },
        },
        base: './',
        css: {
            preprocessorOptions: {
              scss: {
                api: 'modern-compiler'
              }
            }
        },
        build: {
            copyPublicDir: false,
            outDir: 'assets/bundles/',
            assetsDir: '',
            rollupOptions: {
                input: {
                    app: './resources/js/app.js',
                    app_css: './resources/scss/app.scss',
                },
                output: {
                    entryFileNames: `app.js`,
                    assetFileNames: () => {
                        return '[name].[ext]';
                    },
                },
            },
        },
        server: {
            strictPort: true,
            port: 5169,
            origin: 'localhost:5169',
            hmr: {
                host: 'localhost',
                clientPort: 5169
            },
        },
    })
}