import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Input = styled.input<{ hasError?: boolean }>`
  ${({ hasError, theme }) => css`
    ${theme.fonts.body_12_R}
    height: 34px;
    border: 0;
    border-bottom: 1px solid ${hasError ? 'red' : 'gray'};
    padding: 2px;

    &::placeholder {
      color: ${theme.colors.gray40};
    }
  `}
`;
