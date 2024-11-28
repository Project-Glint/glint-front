import { css } from '@emotion/react';
import styled from '@emotion/styled';

// TODO: 디자인 시스템 나오면 수정
export const BadgeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
export const Badge = styled.button<{
  isSelected?: boolean;
  isClickable?: boolean;
  icon?: boolean;
}>`
  ${({ isSelected, isClickable, icon, theme }) => css`
    ${theme.fonts.body_14_M};
    display: flex;
    align-items: center;
    gap: ${icon ? '4px' : 0};
    padding: 8px 12px;
    border-radius: 19px;
    cursor: pointer;
    height: 36px;
    width: fit-content;
    border: ${!isSelected
      ? `1px solid ${theme.colors.gray30}`
      : `1px solid ${theme.colors.primary60}`};
    color: ${isClickable && isSelected
      ? theme.colors.gray0
      : theme.colors.gray90};
    cursor: ${!isClickable && 'default'};
    background-color: ${isClickable && isSelected && theme.colors.primary60};
  `}
`;
