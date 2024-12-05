import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
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

export const TextControllerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
