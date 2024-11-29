import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from '@radix-ui/react-dialog';

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  overflow: hidden;
`;
export const BottomModalContainer = styled.dialog`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: fixed;
  top: 134px;
  bottom: 0;
  max-height: 666px;
  width: 100%;
  transform: translateX(-50%);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;

export const ModalOverlay = styled(DialogOverlay)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
`;

export const ModalContainer = styled(DialogContent)`
  ${({ theme }) => css`
    background-color: white;
    border-radius: 12px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    position: fixed;
    top: auto;
    bottom: 0;
    min-height: 666px;
    width: 100%;
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

export const ModalContent = styled.div`
  min-height: 572px;
`;
