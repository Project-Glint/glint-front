import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },

  // webpackFinal 추가
  webpackFinal: async (config: any) => {
    // rule이 객체인지 확인하여 처리
    const fileLoaderRule = config.module.rules.find(
      (rule: any) =>
        rule && rule.test instanceof RegExp && rule.test.test('.svg')
    );

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/; // exclude 속성을 안전하게 사용
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
export default config;
