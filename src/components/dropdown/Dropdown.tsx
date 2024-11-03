import {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import * as S from './Dropdown.styled';

const Dropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Dropdown</button>
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <S.DropdownContent sideOffset={5}>
          <S.DropdownItem>1</S.DropdownItem>
          <S.DropdownItem>2</S.DropdownItem>
          <S.DropdownItem>3</S.DropdownItem>
          <S.DropdownItem>4</S.DropdownItem>
          <S.DropdownItem>5</S.DropdownItem>
        </S.DropdownContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};

export default Dropdown;
