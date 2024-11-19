import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TitleWrapper = styled.div`
  margin: 24px 16px 48px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Page = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body_16_B};
    color: ${theme.colors.default};
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.title_24_B};
    color: ${theme.colors.gray80};
  `}
`;

export const SubTitle = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body_14_M};
    color: ${theme.colors.gray60};
  `}
`;

export const ContentWrapper = styled.div`
  margin: 48px 16px 0 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
