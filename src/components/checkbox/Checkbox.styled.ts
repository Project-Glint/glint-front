import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { Root } from '@radix-ui/react-checkbox';

export const CheckboxRoot = styled(Root)<{ css?: SerializedStyles }>`
  ${({ css: customCss, theme, checked }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    ${customCss}

    svg {
      & path {
        fill: ${checked && theme.colors.primary80};
      }
    }
  `}
`;
