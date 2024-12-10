import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Backdrop = styled.div`
  display: block;
  position: fixed;
  overflow-y: auto;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgb(0 0 0 / 20%);
  left: 0;
  z-index: 9999;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    padding: 32px 20px 20px 20px;
    background-color: ${theme.colors.gray0};
    border-radius: 8px;
    box-shadow:
      0 8px 24px rgba(0, 0, 0, 0.12),
      0 4px 8px rgba(0, 0, 0, 0.06);
    width: 328px;
    max-width: 100%;
    text-align: center;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    ${theme.fonts.body_14_B}
  `}
`;

export const Description = styled.ul`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 4px;
    ${theme.fonts.body_12_M}
  `}
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
`;
