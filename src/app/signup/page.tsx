'use client';

import { DefaultLayout, SignupFooter } from 'components';
import { useState } from 'react';
import * as S from './page.styled';
import { signupTitle } from 'assets';
import {
  SignupJob,
  SignupAuth,
  SignupNicknameHeight,
  SignupGender,
  SignupCharacter,
} from './containers';
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
      gender: '',
      birthdate: '',
      height: 0,
      bodyType: '',
      drinkingType: '',
      smokingType: '',
      religion: '',
      residenceRegion: '',
      activityRegion: '',
      hashtags: '',
      lifeGoal: '',
      preference: '',
      loveStyle: '',
      profile: null,
    },
  });

  const isNextButtonEnabled =
    page === 1
      ? !!watch('companyName') && !!watch('job')
      : page === 2
        ? !!watch('email') || !!watch('authImage')
        : page === 3
          ? !!watch('nickname')
          : page === 4
            ? !!watch('gender')
            : true;
  const currentTitleData = signupTitle.find((item) => item.id === page);

  const renderPage = (page: number) => {
    switch (page) {
      case 1:
        return <SignupJob control={control} watch={watch} />;
      case 2:
        return <SignupAuth control={control} watch={watch} />;
      case 3:
        return (
          <SignupNicknameHeight
            control={control}
            watch={watch}
            type="nickname"
          />
        );
      case 4:
        return <SignupGender control={control} watch={watch} />;
      case 6:
        return (
          <SignupNicknameHeight control={control} watch={watch} type="height" />
        );
      case 7:
        return (
          <SignupCharacter
            control={control}
            watch={watch}
            type="bodyType"
            setValue={setValue}
          />
        );
      case 8:
        return (
          <SignupCharacter
            control={control}
            watch={watch}
            type="smokingDrinking"
            setValue={setValue}
          />
        );
      case 9:
        return (
          <SignupCharacter
            control={control}
            watch={watch}
            type="religion"
            setValue={setValue}
          />
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
