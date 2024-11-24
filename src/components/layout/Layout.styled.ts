import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const DefaultLayout = styled.section`
  ${({ theme }) => css`
    width: 100%;
    padding-top: 44px;
    position: relative;

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
