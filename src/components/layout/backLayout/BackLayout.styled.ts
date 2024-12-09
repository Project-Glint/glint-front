import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const DefaultLayout = styled.section`
  width: 100%;
  position: relative;
  padding-bottom: 80px;

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
`;

export const Header = styled.div<{ isImageHeader?: boolean }>`
  ${({ isImageHeader, theme }) => css`
    padding: 0 16px;
    padding-top: ${isImageHeader ? '44px' : '0'};
    position: relative;
    height: ${isImageHeader ? '92px' : '48px'};
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      & path {
        fill: ${isImageHeader && theme.colors.gray0};
      }
    }
  `}
`;

export const ImageHeader = styled.div`
  position: relative;
  height: 280px;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 280px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
`;
export const Title = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.title_18_B}
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `};
`;

export const Context = styled.div<{ isImageHeader?: boolean }>`
  ${({ theme, isImageHeader }) => css`
    border-top: ${isImageHeader ? 'none' : `1px solid ${theme.colors.gray30}`};
    display: flex;
    flex-direction: column;
    height: 100%;
  `}
`;

export const RightIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
