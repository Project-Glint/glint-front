import { css } from '@emotion/react';
import styled from '@emotion/styled';
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

export const WithButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AuthImageContainer = styled.div`
  ${({ theme }) => css`
    min-height: 122px;
    border: 1px solid ${theme.colors.gray30};
    border-radius: 12px;
    padding: 24px 16px;
  `}
`;

export const AuthImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const AuthImageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
`;

export const AuthImageTitle = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body_14_M};
    color: ${theme.colors.gray80};
  `}
`;

export const AuthImageSubTitle = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body_12_R};
    color: ${theme.colors.gray60};
  `}
`;
