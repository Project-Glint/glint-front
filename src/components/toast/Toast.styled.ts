import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as Toast from '@radix-ui/react-toast';

export const ToastWrapper = styled.div`
  position: fixed;
  bottom: 104px;
  min-height: 44px;
  pointer-events: none;
  min-width: 328px;
  z-index: 10000000;
  left: 0;
  right: 0;
  padding: 0 16px;
`;

// Toast Root
export const ToastRoot = styled(Toast.Root)`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray80};
    color: ${theme.colors.gray0};
    border-radius: 12px;
    padding: 12px;
    display: flex;
    align-items: center;
    animation: fadeIn 300ms ease-out;

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}
`;

// Toast Title
export const ToastTitle = styled(Toast.Title)`
  ${({ theme }) => css`
    ${theme.fonts.body_14_M}
  `}
`;

// Toast Description (optional)
export const ToastDescription = styled(Toast.Description)`
  font-size: 12px;
  color: #bbb;
  margin-top: 4px;
`;

// Toast Action (for dismissing)
export const ToastAction = styled(Toast.Action)`
  margin-left: auto;
  background: transparent;
  border: none;
  color: white;
  font-size: 12px;
  cursor: pointer;
  padding: 4px;
  &:hover {
    text-decoration: underline;
  }
`;
