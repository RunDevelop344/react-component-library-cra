import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    '@storybook/preset-create-react-app',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
};


export default config;