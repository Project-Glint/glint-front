import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from '@radix-ui/react-radio-group';

export const RadioRoot = styled(RadioGroup)<{ css?: SerializedStyles }>`
  ${({ css: customCss }) => css`
    display: flex;
    flex-direction: column;
    ${customCss}
  `}
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

export const RadioItem = styled(RadioGroupItem)`
  ${({ theme }) => css`
    width: 20px;
    height: 20px;
    border-radius: 100%;
    border: 1px solid ${theme.colors.gray40};
    background-color: ${theme.colors.gray0};
    display: flex;

    align-items: center;
    justify-content: center;

    &[data-state='checked'] {
      border-color: ${theme.colors.primary60};
      background-color: ${theme.colors.primary60};
    }
  `}
`;

export const RadioIndicator = styled(RadioGroupIndicator)`
  ${({ theme }) => css`
    width: 8.33px;
    height: 8.33px;
    border-radius: 50%;
    background-color: ${theme.colors.gray40};
    display: block;

    &[data-state='checked'] {
      background-color: ${theme.colors.gray0};
    }
  `}
`;

export const Label = styled.label<{ name: string }>`
  ${({ theme, name }) => css`
    ${name === 'gender' ? theme.fonts.body_16_M : theme.fonts.body_14_M};
  `}
`;
