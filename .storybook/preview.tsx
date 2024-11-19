import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider, Global } from '@emotion/react';

import { theme, globalStyle } from '../src/styles';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
