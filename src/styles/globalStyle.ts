import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const globalStyle = css`
  ${emotionReset};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
    font-family: sans-serif; //NOTE: 임시 적용 font -> font 확정 후 변경 필요
  }
  textarea,
  input {
    resize: none;
    outline: 0;
  }
  a {
    text-decoration: none;
  }

  /* TODO: 스크롤 스크린 확인 필요 */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default globalStyle;
