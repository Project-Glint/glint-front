import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column; /* 세로 방향 배치 */
  width: 100%;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex; /* Input과 Icon을 같은 줄에 배치 */
  align-items: center;
  width: 100%;
`;

export const Input = styled.input<{ hasError?: boolean }>`
  ${({ hasError, theme }) => css`
    ${theme.fonts.body_12_R}
    width: 100%;
    height: 48px;
    background-color: ${hasError ? 'white' : theme.colors.gray5};
    color: ${theme.colors.gray60};
    border: 0;
    border-radius: 12px;
    border: 1px solid ${hasError ? theme.colors.danger70 : theme.colors.gray5};
    padding: 6px 16px;
    padding-right: 40px;

    &::placeholder {
      color: ${theme.colors.gray40};
    }
  `}
`;

export const Timer = styled.div`
  position: absolute;
  right: ${({ hasCancelIcon }: { hasCancelIcon: boolean }) =>
    hasCancelIcon ? '48px' : '16px'}; /* cancelIcon이 있으면 왼쪽으로 */
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray50};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  pointer-events: none;
`;

export const Icon = styled.div`
  position: absolute;
  right: 16px;
  height: 100%;
  display: flex;
  align-items: center;

  svg {
    fill: ${({ theme }) => theme.colors.gray40};
    width: 24px;
    height: 24px;
  }
`;

export const HelperText = styled.div<{ hasError?: boolean }>`
  ${({ hasError, theme }) => css`
    ${theme.fonts.body_12_M}
    margin-top: 4px;
    color: ${hasError ? theme.colors.danger80 : theme.colors.gray40};
  `}
`;
