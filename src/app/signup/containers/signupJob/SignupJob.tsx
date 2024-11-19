import { jobTabList } from 'assets';
import { Tabs, TextController } from 'components';
import * as S from './SignupJob.styled';
import { Control, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { SignupForm } from 'types';

interface SignupJobProps {
  control: Control<any>;
  setValue: UseFormSetValue<SignupForm>;
  watch: UseFormWatch<SignupForm>;
}

const SignupJob = ({ control, setValue, watch }: SignupJobProps) => {
  return (
    <>
      <Tabs tabList={jobTabList} />
      <S.InputWrapper>
        <S.InputLabel>직장</S.InputLabel>
        <TextController
          name="companyName"
          control={control}
          value={watch('companyName')}
          rules={{ required: true, minLength: 2, maxLength: 15 }}
          placeholder="삼성전자, 현대 자동차, 네이버 등"
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.InputLabel>직업</S.InputLabel>
        <TextController
          name="job"
          control={control}
          rules={{ required: true, minLength: 2, maxLength: 15 }}
          placeholder="의사, 개발자, 공무원, 은행원 등"
        />
      </S.InputWrapper>
    </>
  );
};

export default SignupJob;
