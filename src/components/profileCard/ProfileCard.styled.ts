import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const CardContainer = styled.div<{ isSelected?: boolean }>`
  ${({ theme, isSelected }) => css`
    height: 70px;
    display: flex;
    flex-direction: row;
    gap: 12px;
    padding: 0 16px;
    background-color: ${isSelected && theme.colors.primary5};
  `}
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid black;
  align-self: center;
`;

export const InfoWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body_14_M}
    color: ${theme.colors.gray60};
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
  `}
`;

export const NameAgeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const Name = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.body_16_B}
    color: ${theme.colors.gray90};
  `}
`;

export const JobWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

export const checkIcon = css`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
