import { Button } from 'components/button';
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
          css={S.lgButton}
          size="lg"
          onClick={handleClickNext}
          disabled={!isNextButtonEnabled}
        >
          다음
        </Button>
      ) : (
        <S.ButtonWrapper>
          <Button css={S.mdButton} size="lg" onClick={handleClickPrev}>
            이전
          </Button>
          <Button
            css={S.mdButton}
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
