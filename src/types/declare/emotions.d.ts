import '@emotion/react';
import { colors } from 'styles/themes/colors';
import { fonts } from 'styles/themes/fonts';

declare module '@emotion/react' {
  export interface Theme {
    colors: typeof colors;
    fonts: typeof fonts;
  }
}
