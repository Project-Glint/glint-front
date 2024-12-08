import { css } from '@emotion/react';
import styled from '@emotion/styled';
export const InputWrapper = styled.div`
  position: relative;
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

export const SearchList = styled.ul`
  ${({ theme }) => css`
    ${theme.fonts.body_12_M}
    position: absolute;
    top: 55px;
    z-index: 1;
    width: 100%;
    max-height: 180px;
    overflow-y: auto;
    margin-top: 20px;
    border: 1px solid ${theme.colors.gray30};
    background-color: ${theme.colors.gray0};
    border-radius: 6px;
  `}
`;

export const Empty = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body_12_M}
    color: ${theme.colors.gray60};
    padding: 20px;
    text-align: center;
  `}
`;

export const ListItem = styled.li`
  ${({ theme }) => css`
    cursor: pointer;
    padding: 10px;

    &:hover {
      background-color: ${theme.colors.gray5};
    }
  `}
`;
