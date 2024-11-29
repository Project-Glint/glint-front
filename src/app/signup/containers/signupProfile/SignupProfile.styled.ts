import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Description = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body_14_M}
    color: ${theme.colors.gray60};
    align-self: center;
  `}
`;
