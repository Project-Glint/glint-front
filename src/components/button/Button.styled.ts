import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { buttonVariant } from 'types';

// TODO: 디자인 시스템 나오면 수정
export const Button = styled.button<{ variant?: buttonVariant }>`
  ${({ variant }) => css`
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    border: 1px solid #000;

    &:disabled {
      color: #cccccc;
    }
  `}
`;
