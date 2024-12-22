import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MeetingCardContainer = styled.div`
  min-height: 116px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 16px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;

export const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 4px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 4px 0;
`;

export const Title = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body_16_B};
    color: ${theme.colors.gray90};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body_14_M}
    color: ${theme.colors.gray60};
  `}
`;
export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

export const GenderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  height: 24px;
  align-items: center;
`;

export const Gender = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body_12_R}
    color: ${theme.colors.gray50};
  `}
`;
