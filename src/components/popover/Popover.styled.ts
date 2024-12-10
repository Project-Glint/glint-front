import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { PopoverContent } from '@radix-ui/react-popover';

export const PreviewImage = styled.img`
  ${({ theme }) => css`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border: 1px solid ${theme.colors.gray30};
    border-radius: 12px;
  `}
`;

export const PopoverContentWrapper = styled(PopoverContent)`
  ${({ theme }) => css`
    ${theme.fonts.body_14_M}
    color: ${theme.colors.gray70};
    height: 88px;
    border-radius: 12px;
    border: 1px solid ${theme.colors.gray30};
    background-color: ${theme.colors.gray0};
    display: flex;
    flex-direction: column;

    &:focus {
      outline: none;
    }
  `}
`;

export const Options = styled.div`
  ${({ theme }) => css`
    padding: 12px 16px;
    cursor: pointer;
    &:hover {
      background-color: ${theme.colors.gray5};
    }
  `}
`;
