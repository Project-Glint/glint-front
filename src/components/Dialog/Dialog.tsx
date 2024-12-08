import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import * as S from './Dialog.styled';
import { Button } from 'components/button';

export interface DialogOptions {
  title?: string;
  description: React.ReactNode;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

interface DialogProps extends DialogOptions {
  isOpen: boolean;
  loading?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export function Dialog({
  title,
  description,
  confirmButtonText,
  cancelButtonText,
  isOpen = false,
  loading = false,
  onConfirm,
  onCancel,
}: DialogProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  return isOpen ? (
    <S.Backdrop ref={modalRef}>
      <S.Wrapper>
        <S.Container>
          {title && <S.Title>{title}</S.Title>}
          {Array.isArray(description) ? (
            <S.Description>
              {description.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </S.Description>
          ) : (
            <S.Description>
              <li>{description}</li>
            </S.Description>
          )}
          <S.ButtonWrapper>
            {cancelButtonText && (
              <Button onClick={onCancel} disabled={loading} outline>
                {cancelButtonText}
              </Button>
            )}
            <Button onClick={onConfirm} disabled={loading}>
              {confirmButtonText}
            </Button>
          </S.ButtonWrapper>
        </S.Container>
      </S.Wrapper>
    </S.Backdrop>
  ) : null;
}

export interface DialogType {
  alert: (options: DialogOptions) => Promise<void>;
  confirm: (options: DialogOptions) => Promise<void>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const DialogContext = createContext<DialogType>({
  alert: Promise.reject,
  confirm: Promise.reject,
  setShow: () => undefined,
  setLoading: () => undefined,
});

export const useDialog = () => useContext(DialogContext);

export function DialogProvider({ children }: PropsWithChildren) {
  const [show, setShow] = useState(false);
  const [manualClose, setManualClose] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dialogState, setDialogState] = useState<DialogOptions>({
    description: '',
  });

  const awaitingPromiseRef = useRef<{
    resolve: () => void;
    reject: (dialog: string) => void;
  }>();

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);

  const openAlert = useCallback(
    async ({ ...rest }: DialogOptions): Promise<void> => {
      setDialogState({
        confirmButtonText: '확인',
        ...rest,
      });
      setShow(true);
      setManualClose(manualClose || false);
      return new Promise<void>((resolve, reject) => {
        awaitingPromiseRef.current = { resolve, reject };
      });
    },
    []
  );

  const openConfirm = useCallback(
    async ({ ...rest }: DialogOptions): Promise<void> => {
      setDialogState({
        confirmButtonText: '확인',
        cancelButtonText: '취소',
        ...rest,
      });
      setShow(true);
      setManualClose(manualClose || false);
      return new Promise<void>((resolve, reject) => {
        awaitingPromiseRef.current = { resolve, reject };
      });
    },
    []
  );

  const confirm = (): void => {
    if (!manualClose) {
      setShow(false);
    }

    setTimeout(() => {
      if (awaitingPromiseRef.current) {
        awaitingPromiseRef.current.resolve();
      }
    }, 100);
  };

  const cancel = (): void => {
    setShow(false);
    setTimeout(() => {
      if (awaitingPromiseRef.current) {
        awaitingPromiseRef.current.reject('cancel');
      }
    }, 100);
  };

  const dialogAction = useMemo(
    () => ({
      alert: openAlert,
      confirm: openConfirm,
      setShow,
      setLoading,
    }),
    [openAlert, openConfirm]
  );

  return (
    <>
      <DialogContext.Provider value={dialogAction}>
        {children}
      </DialogContext.Provider>
      <Dialog
        isOpen={show}
        loading={loading}
        onConfirm={confirm}
        onCancel={cancel}
        {...dialogState}
      />
    </>
  );
}
