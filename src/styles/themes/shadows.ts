import { css } from '@emotion/react';

export const shadows = {
  normal: css`
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12);
  `,
  emphasize: css`
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  `,
  strong: css`
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.12);
  `,
  heavy: css`
    box-shadow: 0px 16px 20px rgba(0, 0, 0, 0.12);
  `,
} as const;

export type Shadows = typeof shadows;
