import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme, Theme } from 'styles';

export const Footer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 64px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
    align-content: center;
    padding: 8px 0;
    border-top: 1px solid ${theme.colors.gray30};
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    /* 기본 모바일 스타일 */
    max-width: 480px;
    margin: 0 auto;

    /* 태블릿 크기 이상일 때 */
    @media (min-width: 768px) {
      max-width: 720px;
    }

    /* 데스크탑 크기 이상일 때 */
    @media (min-width: 1024px) {
      max-width: 960px;
    }

    /* 대형 데스크탑 크기 이상일 때 */
    @media (min-width: 1440px) {
      max-width: 1200px;
    }
  `}
`;

export const button = css`
  background-color: ${theme.colors.gray0};
  padding: 0;
  justify-items: center;
  height: 48px;

  &:not(:disabled) {
    &:hover {
      background-color: ${theme.colors.gray0} !important;
    }
    &:active {
      background-color: ${theme.colors.gray0} !important;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 48px;
  width: 72px;
  padding: 2px 0;
  gap: 2px;
`;

export const icon = (isSelected: boolean) => (theme: Theme) => css`
  width: 24px;
  height: 24px;

  path:first-child {
    fill: ${isSelected && theme.colors.primary80};
  }
`;

export const Text = styled.span<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => css`
    ${theme.fonts.body_12_M}
    color: ${isSelected ? theme.colors.primary80 : theme.colors.gray60};
  `}
`;

export const IconWrapper = styled.div<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => css`
    height: 24px;
    svg {
      & path:nth-of-type(1) {
        fill: ${isSelected && theme.colors.primary80};
      }
    }
  `}
`;
