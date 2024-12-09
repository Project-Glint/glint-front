import { LeftIcon } from 'assets';
import * as S from './SelectButton.styled';

interface SelectButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selectValue?: string;
  buttonName?: string;
  handleClick?: () => void;
}

const SelectButton = ({
  handleClick,
  selectValue,
  buttonName,
  ...rest
}: SelectButtonProps) => {
  return (
    <S.Button onClick={handleClick} selectValue={selectValue} {...rest}>
      {selectValue ? selectValue : buttonName}
      {selectValue && <LeftIcon />}
    </S.Button>
  );
};
export default SelectButton;
