import { Button } from 'components/button';
import * as S from './ButtonFooter.styled';

interface ButtonFooterProps {
  isNextButtonEnabled?: boolean;
  handleClickNext: () => void;
  label: string;
}

const ButtonFooter = ({
  isNextButtonEnabled,
  handleClickNext,
  label,
}: ButtonFooterProps) => {
  return (
    <S.Footer>
      <Button
        size="lg"
        onClick={handleClickNext}
        disabled={!isNextButtonEnabled}
      >
        {label}
      </Button>
    </S.Footer>
  );
};

export default ButtonFooter;
