'use client';

import { DefaultLayout, SignupFooter } from 'components';
import { useState } from 'react';
import * as S from './page.styled';
import { signupTitle } from 'assets';
import { SignupJob } from './containers';
import { useForm } from 'react-hook-form';
import { SignupForm } from 'types';

const Signup = () => {
  const [page, setPage] = useState(1);

  const MAX_PAGE = 13;

  const { control, handleSubmit, watch, setValue } = useForm<SignupForm>({
    defaultValues: {
      companyName: '',
      job: '',
      university: '',
      major: '',
      email: '',
      authCode: 0,
      authImage: null,
      nickname: '',
      gender: 'MALE',
      birth: {
        year: 0,
        month: 0,
        date: 0,
      },
      height: 0,
      weight: '',
      drinking: '',
      smoking: '',
      religion: '',
      residence: '',
      activityArea: '',
      keyword: '',
      goal: '',
      liking: '',
      theoryOfLove: 's',
      profile: null,
    },
  });

  const isNextButtonEnabled =
    page === 1
      ? !!watch('companyName') && !!watch('job')
      : page === 2
        ? !!watch('email')
        : false;
  const currentTitleData = signupTitle.find((item) => item.id === page);

  const renderPage = (page: number) => {
    switch (page) {
      case 1:
        return (
          <SignupJob control={control} setValue={setValue} watch={watch} />
        );
    }
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
    <DefaultLayout>
      <S.TitleWrapper>
        <S.Page>
          {page}/{MAX_PAGE}
        </S.Page>
        <S.Title>{currentTitleData?.title}</S.Title>
        {currentTitleData?.subTitle && (
          <S.SubTitle>{currentTitleData.subTitle}</S.SubTitle>
        )}
      </S.TitleWrapper>
      <S.ContentWrapper>{renderPage(page)}</S.ContentWrapper>
      <SignupFooter
        page={page}
        maxPage={MAX_PAGE}
        isNextButtonEnabled={isNextButtonEnabled}
        handleClickNext={handleSubmit(handleClickNext)}
        handleClickPrev={handleClickPrev}
      />
    </DefaultLayout>
  );
};

export default Signup;
