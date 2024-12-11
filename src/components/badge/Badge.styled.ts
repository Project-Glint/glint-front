import { css } from '@emotion/react';
import styled from '@emotion/styled';

const getBadgeBackgroundColor = (
  color: string | undefined,
  outline: boolean | undefined,
  theme: any
) => {
  if (color === 'PRIMARY' && !outline) return theme.colors.primary70;
  if (color === 'LIGHT_PRIMARY' && !outline) return theme.colors.primary5;
  if (color === 'MONO' && !outline) return theme.colors.gray60;
  if (color === 'LIGHT_MONO' && !outline) return theme.colors.gray5;
  return theme.colors.gray0;
};

const getBadgeTextColor = (
  color: string | undefined,
  outline: boolean | undefined,
  theme: any
) => {
  if ((color === 'PRIMARY' && !outline) || (color === 'MONO' && !outline)) {
    return theme.colors.gray0;
  }
  if (color === 'LIGHT_PRIMARY' || color === 'PRIMARY') {
    return theme.colors.primary80;
  }
  return theme.colors.gray80;
};

const getBadgeBoxShadow = (
  color: string | undefined,
  outline: boolean | undefined,
  theme: any
) => {
  if (color === 'PRIMARY' && outline)
    return `inset 0 0 0 1px ${theme.colors.primary70}`;
  if (color === 'MONO' && outline)
    return `inset 0 0 0 1px ${theme.colors.gray70}`;
  return 'none';
};

export const Badge = styled.div<{
  size?: 'md' | 'lg';
  outline?: boolean;
  color?: 'RED' | 'PRIMARY' | 'LIGHT_PRIMARY' | 'LIGHT_MONO' | 'MONO';
}>`
  ${({ theme, size, color, outline }) => css`
    ${size === 'md' ? theme.fonts.caption_10_B : theme.fonts.body_12_B}
    display: flex;
    align-items: center;
    height: ${size === 'md' ? '20px' : '24px'};
    border-radius: 100px;
    padding: 0 8px;
    width: fit-content;
    background-color: ${getBadgeBackgroundColor(color, outline, theme)};
    color: ${getBadgeTextColor(color, outline, theme)};
    box-shadow: ${getBadgeBoxShadow(color, outline, theme)};
  `}
`;

export const Circle = styled.div<{
  type: 'NEW' | 'NUMBER' | 'DOT' | 'CONTENT';
  color?: 'RED' | 'PRIMARY' | 'LIGHT_PRIMARY' | 'LIGHT_MONO' | 'MONO';
}>`
  ${({ theme, type, color }) => css`
    // TODO: 원래 11px인데 확인하기
    ${theme.fonts.body_12_B}
    color: ${theme.colors.gray0};
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${type === 'DOT' ? '4px' : '16px'};
    height: ${type === 'DOT' ? '4px' : '16px'};
    border-radius: 50%;
    background-color: ${color === 'RED'
      ? theme.colors.danger70
      : theme.colors.primary70};
  `}
`;
