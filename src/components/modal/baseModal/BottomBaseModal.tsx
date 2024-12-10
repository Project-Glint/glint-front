import * as Dialog from '@radix-ui/react-dialog';
import * as S from './BottomBaseModal.styled';
import { SelectButton } from 'components/button';
import { BlackXIcon, HandlebarIcon } from 'assets';

interface BottomBaseModalProps {
  buttonName?: string;
  title?: string;
  selectValue?: string;
  children: React.ReactNode;
}
const BottomBaseModal = ({
  buttonName,
  title,
  children,
  selectValue,
}: BottomBaseModalProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <SelectButton selectValue={selectValue} buttonName={buttonName} />
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
          <S.ModalContent>{children}</S.ModalContent>
        </S.ModalContainer>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default BottomBaseModal;
