import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Button = styled.button<{
  selectValue?: string | { name: string; id: number }[];
}>`
  ${({ theme, selectValue }) => css`
    ${theme.fonts.body_14_M};
    width: 100%;
    height: 48px;
    background-color: ${theme.colors.gray5};
    color: ${selectValue && typeof selectValue === 'string'
      ? theme.colors.gray90
      : theme.colors.gray50};
    border-radius: 12px;
    border: 1px solid ${theme.colors.gray5};
    padding: 14px 16px;
    text-align-last: start;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    svg {
      transform: rotate(180deg);
    }
  `}
`;
