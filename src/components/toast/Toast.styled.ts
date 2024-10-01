import styled from '@emotion/styled';
import * as Toast from '@radix-ui/react-toast';

// Toast Root
export const ToastRoot = styled(Toast.Root)`
  background-color: #333;
  color: white;
  border-radius: 8px;
  padding: 16px;
  font-size: 14px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 300px;
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
`;

// Toast Title
export const ToastTitle = styled(Toast.Title)`
  font-weight: bold;
  margin-right: 8px;
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
