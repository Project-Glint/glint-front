import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const globalStyle = css`
  ${emotionReset};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: var(--font-pretendard);
  }

  html {
    font-size: 62.5%; /* 1 rem = 10px */
  }

  button {
    cursor: pointer;
    border: 0;
    background-color: transparent;

    &[disabled] {
      cursor: not-allowed;
    }
  }
  input,
  button,
  textarea {
    font-family: var(--font-pretendard);
  }
  textarea,
  input {
    resize: none;
    outline: 0;
  }
  a {
    text-decoration: none;
    color: inherit; // 링크의 기본 색상 제거
  }

  /* TODO: 스크롤 스크린 확인 필요 */
  ::-webkit-scrollbar {
    display: none;
  }

  /* 폰트 스무딩 추가 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export default globalStyle;
