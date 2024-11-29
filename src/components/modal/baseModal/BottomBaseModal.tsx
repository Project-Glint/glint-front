import * as Dialog from '@radix-ui/react-dialog';
import * as S from './BottomBaseModal.styled';
import { Button } from 'components/button';
import { BlackXIcon, HandlebarIcon } from 'assets';
import { SerializedStyles } from '@emotion/react';

interface BottomBaseModalProps {
  buttonName?: string;
  title?: string;
  children: React.ReactNode;
  css?: SerializedStyles;
  className?: string;
}
const BottomBaseModal = ({
  buttonName,
  title,
  children,
  css,
  className,
}: BottomBaseModalProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button css={css} className={className}>
          {buttonName}
        </Button>
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
