import type { StorybookConfig } from "@storybook/preact-webpack5";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/preact-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    // Enable CSS Modules for .module.scss
    config.module?.rules?.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            sassOptions: {
              loadPaths: [
                path.resolve(__dirname, "../app/assets/stylesheets/globals"),
              ],
            },
          },
        },
      ],
    });

    if (config.resolve) {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      };
    }

    return config;
  },
};
export default config;
