import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Title = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.title_20_B}
    color: ${theme.colors.gray90};
  `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ContentTitle = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body_12_M};
    color: ${theme.colors.gray90};
  `}
`;

export const Required = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary60};
  `}
`;

export const MeetingContentInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
