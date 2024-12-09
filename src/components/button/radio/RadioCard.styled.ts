import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from '@radix-ui/react-radio-group';

export const RadioRoot = styled(RadioGroup)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const CardWrapper = styled.div<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${isSelected
      ? theme.colors.primary10
      : theme.colors.gray10};
    border-radius: 12px;
    height: 76px;
    padding: 14px 16px;
  `}
`;

export const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const CardTitle = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body_16_B};
    color: ${theme.colors.gray90};
  `}
`;

export const CardDescription = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body_14_M}
    color: ${theme.colors.gray60};
  `}
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
