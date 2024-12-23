import { useFormContext } from 'react-hook-form';
import * as S from './SignupGender.styled';
import { RadioButton, SignupFooter } from 'components';
import { FemaleIcon, genderRadioList, MaleIcon } from 'assets';
import { SignupForm } from 'types';
import { usePostGender } from 'hooks';

interface SignupGenderProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  MAX_PAGE: number;
}

const SignupGender = ({ page, setPage, MAX_PAGE }: SignupGenderProps) => {
  const { control, watch, handleSubmit } = useFormContext<SignupForm>();
  const gender = watch('gender');
  const isNextButtonEnabled = !!gender;

  const { mutate: postGender } = usePostGender();

  const handleClickNext = () => {
    if (isNextButtonEnabled) {
      if (gender) {
        postGender(
          { gender: gender },
          {
            onSuccess: () => {
              setPage(page + 1);
            },
          }
        );
      }
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
          radioList={genderRadioList}
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
