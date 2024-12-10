import { Button } from 'components';
import * as S from './SignupFooter.styled';
import { useEffect, useState } from 'react';

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
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.screenY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <S.Footer hasScrolled={hasScrolled}>
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
