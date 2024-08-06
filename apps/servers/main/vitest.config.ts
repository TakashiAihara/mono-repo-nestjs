import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    root: './',
    watch: false,
    alias: {
      '@': '/src',
      '@domain': '/src/domain',
      '@application': '/src/application',
      '@presentation': '/src/presentation',
      '@infrastructure': '/src/infrastructure',
    },
  },
  plugins: [
    swc.vite({
      configFile: '.test.swcrc',
      jsc: {
        parser: {
          syntax: 'typescript',
          tsx: true,
          dynamicImport: true,
          decorators: true,
        },
        transform: {
          legacyDecorator: true,
          decoratorMetadata: true,
          react: {
            runtime: 'automatic',
          },
        },
        target: 'esnext',
        loose: false,
      },
      module: { type: 'es6' },
    }),
  ],
});
