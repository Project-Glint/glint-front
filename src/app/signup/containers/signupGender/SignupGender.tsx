import { Control, UseFormWatch } from 'react-hook-form';
import { SignupForm } from 'types';
import * as S from './SignupGender.styled';
import { RadioButton } from 'components';
import { FemaleIcon, GENDER_RADIOS, MaleIcon } from 'assets';

interface SignupGender {
  control: Control<any>;
  watch: UseFormWatch<SignupForm>;
}

const SignupGender = ({ control, watch }: SignupGender) => {
  const gender = watch('gender');
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
    </>
  );
};
export default SignupGender;
