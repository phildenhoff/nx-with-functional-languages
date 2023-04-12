/// <reference types="vitest" />
import { defineConfig } from 'vite';

import viteTsConfigPaths from 'vite-tsconfig-paths';

import scalaJSPlugin from '@scala-js/vite-plugin-scalajs';

export default defineConfig({
  cacheDir: '../../../node_modules/.vite/utils-scalajs',

  plugins: [
    viteTsConfigPaths({
      root: '../../../',
    }),

    scalaJSPlugin(),
  ],
});
