import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from 'styles';
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InputLabel = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body_12_M};
    color: ${theme.colors.gray90};
  `}
`;

export const button = css`
  ${theme.fonts.body_14_M};
  width: 100%;
  height: 48px;
  background-color: ${theme.colors.gray5};
  color: ${theme.colors.gray60};
  border-radius: 12px;
  border: 1px solid ${theme.colors.gray5};
  padding: 14px 16px;
  text-align-last: start;
`;

export const InputBadgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
