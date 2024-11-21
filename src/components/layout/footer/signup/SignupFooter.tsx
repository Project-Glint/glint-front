import { Button } from 'components';
import * as S from './SignupFooter.styled';

interface SignupFooterProps {
  page: number;
  maxPage: number;
  isNextButtonEnabled: boolean;
  handleClickNext: () => void;
  handleClickPrev: () => void;
}
const SignupFooter = ({
  page,
  isNextButtonEnabled,
  handleClickNext,
  handleClickPrev,
}: SignupFooterProps) => {
  return (
    <S.Footer>
      {page === 1 ? (
        <Button
          size="lg"
          onClick={handleClickNext}
          disabled={!isNextButtonEnabled}
        >
          다음
        </Button>
      ) : (
        <S.ButtonWrapper>
          <Button size="lg" outline onClick={handleClickPrev}>
            이전
          </Button>
          <Button
            size="lg"
            onClick={handleClickNext}
            disabled={!isNextButtonEnabled}
          >
            다음
          </Button>
        </S.ButtonWrapper>
      )}
    </S.Footer>
  );
};

export default SignupFooter;
