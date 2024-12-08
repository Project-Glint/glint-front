import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Header = styled.div`
  padding-left: 16px;
  position: relative;
  height: 48px;
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.title_18_B}
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `};
`;

export const Context = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.gray30};
    display: flex;
    flex-direction: column;
    height: 100%;
  `}
`;
