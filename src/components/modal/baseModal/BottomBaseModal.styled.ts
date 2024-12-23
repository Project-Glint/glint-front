import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from '@radix-ui/react-dialog';

export const ModalOverlay = styled(DialogOverlay)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
`;

export const ModalContainer = styled(DialogContent)`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray0};
    border-radius: 12px;
    position: fixed;
    bottom: 0;
    width: 100%;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    max-height: calc(100vh - 134px);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  `}
`;

export const HandlebarWrapper = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderWrapper = styled.div`
  height: 56px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalTitle = styled(DialogTitle)`
  ${({ theme }) => css`
    ${theme.fonts.title_18_B};
    color: ${theme.colors.gray90};
  `}
`;
