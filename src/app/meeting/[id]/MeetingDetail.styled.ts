import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MeetingHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px 16px;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    ${theme.fonts.title_18_B}
  `}
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MeetingInfo = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.body_14_R}
    color: ${theme.colors.gray60};
  `}
`;

export const InfoDivider = styled.div`
  ${({ theme }) => css`
    width: 1px;
    height: 8px;
    background-color: ${theme.colors.gray20};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.body_14_R}
    color: ${theme.colors.gray90};
  `}
`;

export const Divider = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.gray20};
  `}
`;

export const DividerPadding = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 8px;
    background-color: ${theme.colors.gray5};
  `}
`;

export const ParticipantList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 16px;
`;

export const ParticipantGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.span<{ group?: boolean }>`
  ${({ theme, group }) => css`
    ${group ? theme.fonts.body_16_B : theme.fonts.body_12_M}
    color: ${theme.colors.gray90};
    margin-bottom: 8px;
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;
