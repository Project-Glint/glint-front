import styled from '@emotion/styled';
export const Footer = styled.div`
  width: 100%;
  height: 64px;
  position: fixed;
  bottom: 0;
  justify-content: center;
  /* 기본 모바일 스타일 */
  max-width: 480px;
  padding: 0 16px;

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

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
`;
