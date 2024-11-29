'use client';

import { DefaultLayout } from 'components';
import { useState } from 'react';
import * as S from './page.styled';
import { signupTitle, stepList } from 'assets';
import {
  SignupJob,
  SignupAuth,
  SignupNicknameHeight,
  SignupGender,
  SignupCharacter,
  SignupBirth,
  SignupProfile,
  SignupRegion,
  SignupKeyword,
} from './containers';
import { useForm, FormProvider } from 'react-hook-form';
import { SignupForm } from 'types';
import { useSearchParams } from 'next/navigation';
import { SignupSelfIntroduce } from './containers/signupSelfIntroduce';

const defaultValue = {
  companyName: '',
  job: '',
  university: '',
  major: '',
  email: '',
  authCode: 0,
  authImage: null,
  nickname: '',
  gender: '',
  year: '',
  month: '',
  day: '',
  height: 0,
  bodyType: '',
  drinkingType: '',
  smokingType: '',
  religion: '',
  residenceRegion: '',
  activityRegion: '',
  hashtags: [],
  lifeGoal: '',
  preference: '',
  loveStyle: '',
  profile: null,
};

const Signup = () => {
  const searchParams = useSearchParams();
  const step = searchParams.get('step');
  const stepPage = stepList.indexOf(step || '');
  const targetPage = stepPage !== -1 ? stepPage + 1 : 1;
  const [page, setPage] = useState(targetPage);

  const MAX_PAGE = 13;

  const methods = useForm<SignupForm>({
    defaultValues: defaultValue,
  });

  const currentTitleData = signupTitle.find((item) => item.id === page);

  const renderPage = (page: number) => {
    switch (page) {
      case 1:
        return <SignupJob page={page} setPage={setPage} MAX_PAGE={MAX_PAGE} />;
      case 2:
        return <SignupAuth page={page} setPage={setPage} MAX_PAGE={MAX_PAGE} />;
      case 3:
        return (
          <SignupNicknameHeight
            page={page}
            setPage={setPage}
            MAX_PAGE={MAX_PAGE}
            type="nickname"
          />
        );
      case 4:
        return (
          <SignupGender page={page} setPage={setPage} MAX_PAGE={MAX_PAGE} />
        );
      case 5:
        return (
          <SignupBirth page={page} setPage={setPage} MAX_PAGE={MAX_PAGE} />
        );
      case 6:
        return (
          <SignupNicknameHeight
            page={page}
            setPage={setPage}
            MAX_PAGE={MAX_PAGE}
            type="height"
          />
        );
      case 7:
        return (
          <SignupCharacter
            page={page}
            setPage={setPage}
            MAX_PAGE={MAX_PAGE}
            type="bodyType"
          />
        );
      case 8:
        return (
          <SignupCharacter
            page={page}
            setPage={setPage}
            MAX_PAGE={MAX_PAGE}
            type="smokingDrinking"
          />
        );
      case 9:
        return (
          <SignupCharacter
            page={page}
            setPage={setPage}
            MAX_PAGE={MAX_PAGE}
            type="religion"
          />
        );
      case 10:
        return (
          <SignupRegion page={page} setPage={setPage} MAX_PAGE={MAX_PAGE} />
        );
      case 11:
        return (
          <SignupKeyword page={page} setPage={setPage} MAX_PAGE={MAX_PAGE} />
        );
      case 12:
        return (
          <SignupSelfIntroduce
            page={page}
            setPage={setPage}
            MAX_PAGE={MAX_PAGE}
          />
        );
      case 13:
        return (
          <SignupProfile page={page} setPage={setPage} MAX_PAGE={MAX_PAGE} />
        );
    }
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
      <FormProvider {...methods}>
        <S.ContentWrapper>{renderPage(page)}</S.ContentWrapper>
      </FormProvider>
    </DefaultLayout>
  );
};

export default Signup;
