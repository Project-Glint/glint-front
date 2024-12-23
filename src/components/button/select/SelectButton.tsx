import { LeftIcon } from 'assets';
import * as S from './SelectButton.styled';

interface SelectButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selectValue?: string | { name: string; id: number }[];
  buttonName?: string;
  handleClick?: () => void;
  isMultiple?: boolean;
}

const SelectButton = ({
  handleClick,
  selectValue,
  buttonName,
  isMultiple = false,
  ...rest
}: SelectButtonProps) => {
  return (
    <S.Button onClick={handleClick} selectValue={selectValue} {...rest}>
      {selectValue && typeof selectValue === 'string'
        ? selectValue
        : buttonName}
      {selectValue && !isMultiple && <LeftIcon />}
    </S.Button>
  );
};
export default SelectButton;
