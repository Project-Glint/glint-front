import * as S from './Toast.styled';
import * as ToastPopup from '@radix-ui/react-toast';
import { useEffect, useRef } from 'react';
import useToastStore from 'store/toastStore';

const Toast = () => {
  const { message, openToast, closeToast } = useToastStore();
  const timerRef = useRef(0);

  useEffect(() => {
    if (openToast) {
      timerRef.current = window.setTimeout(() => {
        closeToast();
      }, 3000);
    }
    return () => clearTimeout(timerRef.current);
  }, [openToast, closeToast]);

  return (
    <ToastPopup.Provider>
      <S.ToastWrapper>
        <S.ToastRoot open={openToast} onOpenChange={closeToast}>
          <S.ToastTitle>{message}</S.ToastTitle>
        </S.ToastRoot>
        <ToastPopup.Viewport />
      </S.ToastWrapper>
    </ToastPopup.Provider>
  );
};

export default Toast;
