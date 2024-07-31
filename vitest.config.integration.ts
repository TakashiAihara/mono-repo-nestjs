import { defineConfig, mergeConfig } from 'vitest/config';
import baseConfig from './vitest.config';

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      include: ['test/**/*.integration-test.ts'],
      globals: true,
      environment: 'node',
      testTimeout: 20000,
      env: {
        NODE_ENV: 'test',
      },
    },
  }),
);
