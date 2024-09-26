import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { badgeVariant } from 'types';

// TODO: 디자인 시스템 나오면 수정
export const Badge = styled.button<{
  isSelected?: boolean;
  isClickable?: boolean;
  variant?: badgeVariant;
}>`
  ${({ isSelected, isClickable, variant }) => css`
    padding: 9px 16px;
    border-radius: 20px;
    cursor: pointer;
    border: 1px solid #000;
    color: ${!isClickable && 'gray'};
    cursor: ${!isClickable && 'default'};
  `}
`;
