import * as PopoverComponent from '@radix-ui/react-popover';
import * as S from './Popover.styled';

interface PopoverProps {
  popoverList: { label: string; handleClick: () => void }[];
  children: React.ReactNode;
  popoverOpen: boolean;
  setPopoverOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Popover = ({
  popoverList,
  children,
  popoverOpen,
  setPopoverOpen,
}: PopoverProps) => {
  return (
    <PopoverComponent.Root
      open={popoverOpen}
      onOpenChange={(open: any) => setPopoverOpen(open)}
    >
      <PopoverComponent.Trigger asChild>{children}</PopoverComponent.Trigger>
      <PopoverComponent.Portal>
        <S.PopoverContentWrapper sideOffset={-110} align="end" side="right">
          {popoverList.map((option, index) => (
            <S.Options key={index} onClick={option.handleClick}>
              {option.label}
            </S.Options>
          ))}
        </S.PopoverContentWrapper>
      </PopoverComponent.Portal>
    </PopoverComponent.Root>
  );
};

export default Popover;
