import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Header = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.title_18_B}
    color: ${theme.colors.gray90};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
  `}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 24px 16px;
    border-top: 1px solid ${theme.colors.gray20};
  `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body_14_B}
    color: ${theme.colors.gray90};
  `}
`;

export const NumberOfPeopleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const SelectedRegionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  flex-wrap: wrap;
`;

export const Footer = styled.div`
  height: 80px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  justify-content: center;
  align-content: center;
  padding: 16px;
`;
