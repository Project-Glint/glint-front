import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const CurrentSearchKeywordContainer = styled.div`
  ${({ theme }) => css`
    max-height: 172px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 24px 16px;
    border-bottom: 8px solid ${theme.colors.gray5};
  `}
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body_16_B}
    color: ${theme.colors.gray90};
  `}
`;

export const AllDelete = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body_14_M}
    color: ${theme.colors.gray70};
  `}
`;

export const PopularSearchKeywordContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px 16px;
`;

export const PopularSearchKeywordWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(5, auto);
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: column;
  gap: 12px;
`;

export const RankingItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
`;

export const Rank = styled.span<{ rankId: number }>`
  ${({ theme, rankId }) => css`
    ${theme.fonts.body_14_B}
    color: ${rankId <= 3 ? theme.colors.primary70 : theme.colors.gray90};
    width: 16px;
  `}
`;

export const Keyword = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.body_14_M}
    color: ${theme.colors.gray90};
  `}
`;
