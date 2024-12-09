import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Footer = styled.div`
  ${({ theme }) => css`
    height: 80px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    justify-content: center;
    align-content: center;
    background-color: ${theme.colors.gray0};
    padding: 0 16px;
    border-top: 1px solid ${theme.colors.gray30};
  `}
`;
