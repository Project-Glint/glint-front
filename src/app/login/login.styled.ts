import styled from '@emotion/styled';
import { css } from '@emotion/react';

type LoginType = 'kakao' | 'apple';

export const LoginButtonGroup = styled.div`
  height: calc(100dvh - 32px); // padding
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 12px;
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
