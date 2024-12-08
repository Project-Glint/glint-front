import { css } from '@emotion/react';
import styled from '@emotion/styled';
export const Footer = styled.div<{ hasScrolled: boolean }>`
  ${({ theme, hasScrolled }) => css`
    width: 100%;
    height: 80px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 16px;
    justify-content: center;
    align-content: center;
    // TODO: 디자인 시스템 확인
    background-color: ${theme.colors.gray0};
    border-top: ${hasScrolled && `1px solid ${theme.colors.gray30}`};

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

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
`;
