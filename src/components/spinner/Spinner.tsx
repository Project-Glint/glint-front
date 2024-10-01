import * as S from './Spinner.styled';
import SpinnerOuter from 'assets/icons/spinner.png';
import SpinnerInnerIcon from 'assets/icons/spinnerLogo.svg';

const Spinner = () => {
  return (
    <S.SpinnerWrapper>
      <S.SpinnerOuter src={SpinnerOuter.src} alt="spinnerOuter" />
      <S.SpinnerInner>
        <SpinnerInnerIcon />
      </S.SpinnerInner>
    </S.SpinnerWrapper>
  );
};

export default Spinner;
