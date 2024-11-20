import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from 'styles';
import { buttonColor, buttonSize, buttonVariant } from 'types';

type ColorKeys = keyof typeof colors;

const SIZE_STYLES = {
  sm: {
    padding: '6px 12px',
    height: '32px',
    font: 'body_14_B',
  },
  md: {
    padding: '10px 16px',
    height: '40px',
    font: 'body_14_B',
  },
  lg: {
    padding: '13px 20px',
    height: '48px',
    font: 'body_16_B',
  },
} as const;

const getBackgroundColor = (
  color: buttonColor,
  variant: buttonVariant,
  outline: boolean,
  isDisabled: boolean,
  isHover: boolean,
  isActive: boolean
): ColorKeys => {
  if (
    (!outline && isDisabled) ||
    (outline && (variant === 'pressed' || isActive))
  )
    return 'disabled';
  if (outline || (outline && isDisabled)) return 'gray0';

  const baseColor = color || 'primary';
  const colorNumber =
    variant === 'pressed' || isActive ? '80' : isHover ? '70' : '60';

  return `${baseColor}${colorNumber}` as ColorKeys;
};

export const Button = styled.button<{
  variant?: buttonVariant;
  outline?: boolean;
  size?: buttonSize;
  color: buttonColor;
}>`
  ${({ variant = 'default', outline = false, size = 'md', color, theme }) => {
    const sizeStyle = SIZE_STYLES[size];

    return css`
      ${theme.fonts[sizeStyle.font]};
      padding: ${sizeStyle.padding};
      height: ${sizeStyle.height};
      // TODO: width 디자인 시스템 설정
      // width: fit-content;
      border-radius: 12px;
      cursor: pointer;
      color: ${outline
        ? theme.colors.primary60
        : !outline && variant === 'pressed'
          ? theme.colors.gray30
          : theme.colors.gray0};
      background-color: ${theme.colors[
        getBackgroundColor(color, variant, outline, false, false, false)
      ]};
      border: ${outline && variant === 'default'
        ? `1px solid ${theme.colors.gray30}`
        : 'none'};

      &:disabled {
        cursor: not-allowed;
        color: ${theme.colors.gray40};
        background-color: ${theme.colors[
          getBackgroundColor(color, variant, outline, true, false, false)
        ]};
      }

      &:not(:disabled) {
        &:hover {
          background-color: ${theme.colors[
            getBackgroundColor(color, variant, outline, false, true, false)
          ]};
        }
        &:active {
          background-color: ${theme.colors[
            getBackgroundColor(color, variant, outline, false, false, true)
          ]};
          color: ${outline ? theme.colors.primary80 : theme.colors.gray30};
        }
      }
    `;
  }}
`;
