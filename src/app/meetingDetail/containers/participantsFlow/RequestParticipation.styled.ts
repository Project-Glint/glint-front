import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Title = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.title_20_B}
    color: ${theme.colors.gray90};
  `}
`;

export const FriendsContainer = styled.div`
  ${({ theme }) => css`
    min-height: 122px;
    border-radius: 12px;
    padding: 16px 15px;
    border: 1px solid ${theme.colors.gray30};
    display: flex;
    flex-direction: column;
    gap: 32px;
  `}
`;

export const FriendsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FriendsTitle = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body_12_M}
    color: ${theme.colors.gray100};
  `}
`;
