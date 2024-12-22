import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FilterWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-top: 1px solid ${theme.colors.gray20};
    border-bottom: 1px solid ${theme.colors.gray20};
    padding: 24px 16px;
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body_14_B}
    color: ${theme.colors.gray90};
  `}
`;

export const ConfirmButton = styled.div`
  padding: 16px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const radioButton = css`
  flex-direction: row;
  gap: 16px;
`;
