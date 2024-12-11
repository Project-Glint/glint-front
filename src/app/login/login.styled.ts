import styled from '@emotion/styled';
import { css } from '@emotion/react';

type LoginType = 'kakao' | 'apple';

export const LoginButtonGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    width: calc(100% - 32px);
    position: fixed;
    bottom: 10px;
    left: 50%;
    justify-content: center;
    align-content: center;

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

export const LoginButton = styled.button<{ loginType: LoginType }>`
  ${({ theme, loginType }) => css`
    ${theme.fonts.body_16_B}
    padding: 12px 0;
    background-color: ${loginType === 'kakao'
      ? '#FFE812'
      : theme.colors.gray100};
    color: ${loginType === 'kakao' ? theme.colors.gray90 : theme.colors.gray0};
    border-radius: 12px;
  `}
`;
