import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TextareaWrapper = styled.div<{
  isFocused: boolean;
  hasError?: boolean;
}>`
  ${({ theme, isFocused, hasError }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 12px 16px;
    padding-bottom: 30px;
    border: 1px solid
      ${hasError
        ? theme.colors.danger80
        : isFocused
          ? theme.colors.gray70
          : theme.colors.gray5};
    background-color: ${hasError
      ? theme.colors.gray0
      : isFocused
        ? theme.colors.gray0
        : theme.colors.gray5};
    border-radius: 12px;
  `}
`;

export const Textarea = styled.textarea<{
  isFocused: boolean;
  hasError?: boolean;
}>`
  ${({ theme, isFocused, hasError }) => css`
    ${theme.fonts.body_14_M};
    min-height: 100px;
    resize: none;
    white-space: pre-wrap;

    overflow: auto;
    border: none;
    background-color: ${hasError
      ? theme.colors.gray0
      : isFocused
        ? theme.colors.gray0
        : theme.colors.gray5};

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${theme.colors.gray50};
    }
  `}
`;

export const CharacterCount = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body_12_M}
    position: absolute;
    bottom: 8px;
    right: 12px;
    font-size: 12px;
    color: ${theme.colors.gray60};
    padding: 0 4px;
  `}
`;

export const HelperText = styled.div<{ hasError?: boolean }>`
  ${({ hasError, theme }) => css`
    ${theme.fonts.body_12_M}
    margin-top: 4px;
    color: ${hasError ? theme.colors.danger80 : theme.colors.gray40};
    text-align: left;
  `}
`;
