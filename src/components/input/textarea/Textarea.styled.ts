import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Textarea = styled.textarea`
  ${({ theme }) => css`
    min-height: 100px;
    resize: none;
    white-space: pre-wrap;
    padding: 13px 12px;
    overflow: auto;

    &::placeholder {
      color: 'gray';
    }
  `}
`;
