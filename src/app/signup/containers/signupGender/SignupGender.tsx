import { useFormContext } from 'react-hook-form';
import * as S from './SignupGender.styled';
import { RadioButton, SignupFooter } from 'components';
import { FemaleIcon, GENDER_RADIOS, MaleIcon } from 'assets';
import { SignupForm } from 'types';

interface SignupGender {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  MAX_PAGE: number;
}

const SignupGender = ({ page, setPage, MAX_PAGE }: SignupGender) => {
  const { control, watch, handleSubmit } = useFormContext<SignupForm>();
  const gender = watch('gender');
  const isNextButtonEnabled = !!watch('gender');

  const handleClickNext = (data: SignupForm) => {
    console.log('data', data);
    if (isNextButtonEnabled) {
      setPage(page + 1);
    }
  };

  const handleClickPrev = () => {
    setPage(page - 1);
  };
  return (
    <>
      <S.GenderContainer>
        <S.CardWrapper>
          <S.Card gender={gender === 'MALE' ? 'MALE' : null}>
            <MaleIcon />
          </S.Card>
          <S.Card gender={gender === 'FEMALE' ? 'FEMALE' : null}>
            <FemaleIcon />
          </S.Card>
        </S.CardWrapper>
        <RadioButton
          css={S.radioButton}
          radioList={GENDER_RADIOS}
          name="gender"
          control={control}
        />
      </S.GenderContainer>
      <SignupFooter
        page={page}
        maxPage={MAX_PAGE}
        isNextButtonEnabled={isNextButtonEnabled}
        handleClickNext={handleSubmit(handleClickNext)}
        handleClickPrev={handleClickPrev}
      />
    </>
  );
};
export default SignupGender;
