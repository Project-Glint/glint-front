import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { buttonVariant } from 'types';

// TODO: 디자인 시스템 나오면 수정
export const Button = styled.button<{ variant?: buttonVariant }>`
  ${({ variant, theme }) => css`
    color: ${theme.colors.gray0};
    background-color: ${theme.colors.default};
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;

    &:disabled {
      background-color: ${theme.colors.disabled};
    }

    &:hover {
      background-color: ${theme.colors.hover};
    }

    &:active {
      background-color: ${theme.colors.active};
    }
  `}
`;
