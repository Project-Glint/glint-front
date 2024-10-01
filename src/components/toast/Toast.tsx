import { useState, useRef, useEffect } from 'react';
import * as S from './Toast.styled';
import * as ToastPopup from '@radix-ui/react-toast';

const Toast = () => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <ToastPopup.Provider>
      <button
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
      >
        Show Toast
      </button>
      <S.ToastRoot open={open} onOpenChange={setOpen}>
        <S.ToastTitle>This is a simple toast notification.</S.ToastTitle>
        <S.ToastAction asChild altText="Close">
          <button onClick={() => setOpen(false)}>Close</button>
        </S.ToastAction>
      </S.ToastRoot>
      <ToastPopup.Viewport />
    </ToastPopup.Provider>
  );
};

export default Toast;
