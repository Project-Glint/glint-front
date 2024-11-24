import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const GenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const Card = styled.div<{ gender: 'MALE' | 'FEMALE' | null }>`
  ${({ theme, gender }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${gender !== null
      ? theme.colors.primary10
      : theme.colors.gray10};
    border-radius: 20px;
    width: 158px;
    height: 158px;
  `}
`;

export const radioButton = css`
  flex-direction: row;
  gap: 150px;
  align-self: center;
`;
