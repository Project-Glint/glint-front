import '@emotion/react';
import { shadows, fonts, colors } from 'styles';

declare module '@emotion/react' {
  export interface Theme {
    colors: typeof colors;
    fonts: typeof fonts;
    shadows: typeof shadows;
  }
}
