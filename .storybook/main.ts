import type { StorybookConfig } from '@storybook/preact-webpack5';

const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/preact-webpack5",
    "options": {}
  }
};
export default config;