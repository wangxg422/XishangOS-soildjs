import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import solidLabels from 'babel-plugin-solid-labels';
import path from 'node:path';
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  base: "/",
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin({
      babel: {
        plugins: [
          [solidLabels, { dev: process.env.NODE_ENV !== 'production' }]
        ],
      }}),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  },
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    minify: "esbuild",
    assetsDir: "assets",
  },
});
