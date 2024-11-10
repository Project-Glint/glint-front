import { css } from '@emotion/react';

export const fonts = {
  title_32_B: css`
    font-size: 3.2rem;
    font-weight: 700;
    font-family: var(--font-pretendard);
  `,
  title_32_M: css`
    font-size: 3.2rem;
    font-weight: 500;
    font-family: var(--font-pretendard);
  `,
  title_24_B: css`
    font-size: 2.4rem;
    font-weight: 700;
    font-family: var(--font-pretendard);
  `,
  title_24_M: css`
    font-size: 2.4rem;
    font-weight: 500;
    font-family: var(--font-pretendard);
  `,
  title_20_B: css`
    font-size: 2rem;
    font-weight: 700;
    font-family: var(--font-pretendard);
  `,
  title_20_M: css`
    font-size: 2rem;
    font-weight: 500;
    font-family: var(--font-pretendard);
  `,
  title_18_B: css`
    font-size: 1.8rem;
    font-weight: 700;
    font-family: var(--font-pretendard);
  `,
  title_18_M: css`
    font-size: 1.8rem;
    font-weight: 500;
    font-family: var(--font-pretendard);
  `,
  body_16_B: css`
    font-size: 1.6rem;
    font-weight: 700;
    font-family: var(--font-pretendard);
  `,
  body_16_M: css`
    font-size: 1.6rem;
    font-weight: 500;
    font-family: var(--font-pretendard);
  `,
  body_16_R: css`
    font-size: 1.6rem;
    font-weight: 400;
    font-family: var(--font-pretendard);
  `,
  body_14_B: css`
    font-size: 1.4rem;
    font-weight: 700;
    font-family: var(--font-pretendard);
  `,
  body_14_M: css`
    font-size: 1.4rem;
    font-weight: 500;
    font-family: var(--font-pretendard);
  `,
  body_14_R: css`
    font-size: 1.4rem;
    font-weight: 400;
    font-family: var(--font-pretendard);
  `,
  body_12_B: css`
    font-size: 1.2rem;
    font-weight: 700;
    font-family: var(--font-pretendard);
  `,
  body_12_M: css`
    font-size: 1.2rem;
    font-weight: 500;
    font-family: var(--font-pretendard);
  `,
  body_12_R: css`
    font-size: 1.2rem;
    font-weight: 400;
    font-family: var(--font-pretendard);
  `,
  caption_10_B: css`
    font-size: 1rem;
    font-weight: 700;
    font-family: var(--font-pretendard);
  `,
  caption_10_R: css`
    font-size: 1rem;
    font-weight: 500;
    font-family: var(--font-pretendard);
  `,
  caption_8_B: css`
    font-size: 0.8rem;
    font-weight: 700;
    font-family: var(--font-pretendard);
  `,
  caption_8_R: css`
    font-size: 0.8rem;
    font-weight: 500;
    font-family: var(--font-pretendard);
  `,
} as const;

export type Fonts = typeof fonts;
