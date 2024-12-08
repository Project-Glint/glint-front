import { css } from '@emotion/react';
import styled from '@emotion/styled';
export const Footer = styled.div`
  ${({ theme }) => css`
    width: calc(100% - 32px);
    height: 80px;
    position: fixed;
    bottom: 0;
    left: 50%;
    justify-content: center;
    align-content: center;
    // TODO: 디자인 시스템 확인
    // background-color: ${theme.colors.gray0};
    /* 기본 모바일 스타일 */
    max-width: calc(480px - 32px);
    transform: translateX(-50%);

    /* 태블릿 크기 이상일 때 */
    @media (min-width: 768px) {
      max-width: calc(720px - 32px);
    }

    /* 데스크탑 크기 이상일 때 */
    @media (min-width: 1024px) {
      max-width: calc(960px - 32px);
    }

    /* 대형 데스크탑 크기 이상일 때 */
    @media (min-width: 1440px) {
      max-width: calc(1200px - 32px);
    }
  `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
`;
