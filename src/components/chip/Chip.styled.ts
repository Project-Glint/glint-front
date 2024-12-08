import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ChipWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Chip = styled.button<{
  isSelected?: boolean;
  icon?: boolean;
  size: 'sm' | 'md' | 'lg';
}>`
  ${({ isSelected, icon, theme, size }) => css`
    ${size === 'lg' ? theme.fonts.body_14_M : theme.fonts.body_12_M}
    display: flex;
    align-items: center;
    gap: ${icon ? '4px' : 0};
    padding: ${size === 'lg'
      ? '8px 12px'
      : size === 'md'
        ? '4px 12px'
        : '4px 8px'};
    border-radius: 19px;
    cursor: ${icon ? 'default' : 'pointer'};
    height: ${size === 'lg' ? '40px' : size === 'md' ? '32px' : '24px'};
    width: fit-content;
    box-shadow: inset 0 0 0 1px
      ${!isSelected ? theme.colors.gray30 : theme.colors.primary60};
    color: ${isSelected ? theme.colors.gray0 : theme.colors.gray90};
    background-color: ${isSelected && theme.colors.primary60};

    svg {
      overflow: visible;
      width: 16px;
      height: 16px;
      & path {
        fill: ${isSelected && theme.colors.gray0};
      }
    }
  `};
`;

export const Icon = styled.span`
  cursor: pointer;
`;
