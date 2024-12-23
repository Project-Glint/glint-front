import * as Dialog from '@radix-ui/react-dialog';
import * as S from './BottomBaseModal.styled';
import { BlackXIcon, HandlebarIcon } from 'assets';

interface BottomBaseModalProps {
  title?: string;
  children: React.ReactNode;
  buttonChildren: React.ReactNode;
}
const BottomBaseModal = ({
  title,
  children,
  buttonChildren,
}: BottomBaseModalProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div>{buttonChildren}</div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <S.ModalOverlay />
        <S.ModalContainer>
          <S.HandlebarWrapper>
            <HandlebarIcon />
          </S.HandlebarWrapper>
          <S.HeaderWrapper>
            <S.ModalTitle>{title && title}</S.ModalTitle>
            <Dialog.Close asChild>
              <BlackXIcon />
            </Dialog.Close>
          </S.HeaderWrapper>
          {children}
        </S.ModalContainer>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default BottomBaseModal;
