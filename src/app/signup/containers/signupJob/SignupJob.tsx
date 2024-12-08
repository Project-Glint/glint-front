import { jobTabList } from 'assets';
import { SignupFooter, Tabs, TextController } from 'components';
import * as S from './SignupJob.styled';
import { useFormContext } from 'react-hook-form';
import { useState } from 'react';
import { SignupForm } from 'types';

interface SignupJobProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  MAX_PAGE: number;
}

const SignupJob = ({ page, setPage, MAX_PAGE }: SignupJobProps) => {
  // TODO: 전역관리로 수정
  const [activeTab, setActiveTab] = useState<string>(jobTabList[0].key);
  const { control, watch, handleSubmit } = useFormContext<SignupForm>();
  const isNextButtonEnabled = !!watch('companyName') && !!watch('job');

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  const renderContent = (worker: string, student: string) => {
    return activeTab === 'worker' ? worker : student;
  };

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
      <Tabs tabList={jobTabList} onChange={handleTabChange} />
      <S.InputWrapper>
        <S.InputLabel>{renderContent('직장', '학교')}</S.InputLabel>
        <TextController
          name={renderContent('companyName', 'university')}
          control={control}
          value={renderContent(watch('companyName'), watch('university'))}
          rules={{
            required: true,
            minLength: {
              value: 2,
              message: '직장은 2 ~ 15글자로 입력해 주세요.',
            },
            maxLength: {
              value: 15,
              message: '직장은 2 ~ 15글자로 입력해 주세요.',
            },
          }}
          placeholder={renderContent(
            '삼성전자, 현대 자동차, 네이버 등',
            '한국대학교, 가나다대학교 등'
          )}
          cancelIcon
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.InputLabel>{renderContent('직업', '학과')}</S.InputLabel>
        <TextController
          name={renderContent('job', 'major')}
          control={control}
          value={renderContent(watch('job'), watch('major'))}
          rules={{
            required: true,
            minLength: {
              value: 2,
              message: '직업은 2 ~ 15글자로 입력해 주세요.',
            },
            maxLength: {
              value: 15,
              message: '직업은 2 ~ 15글자로 입력해 주세요.',
            },
          }}
          placeholder={renderContent(
            '의사, 개발자, 공무원, 은행원 등',
            '경영학과, 컴퓨터공학과 등'
          )}
          cancelIcon
        />
      </S.InputWrapper>
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

export default SignupJob;
