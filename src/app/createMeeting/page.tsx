'use client';
import { BackLayout } from 'components';
import * as S from './page.styled';
import { useState } from 'react';
import {
  CreateMeetingRoom,
  DefaultImageSelect,
  InviteFriends,
} from './containers';
import { FormProvider, useForm } from 'react-hook-form';
import { CreateMeetingForm } from 'types';
import { defaultValues } from 'assets';

const CreateMeeting = () => {
  const [step, setStep] = useState(0);

  const methods = useForm<CreateMeetingForm>({
    defaultValues: defaultValues,
  });

  const renderPage = (step: number) => {
    switch (step) {
      case 0:
        return <CreateMeetingRoom step={step} setStep={setStep} />;
      case 1:
        return <InviteFriends />;
      // TODO: 다른 방법 있나 생각해보기
      case 999:
        return <DefaultImageSelect setStep={setStep} />;
    }
  };

  return (
    <BackLayout
      title={step === 999 ? '기본 이미지 선택' : '미팅 만들기'}
      step={step}
      setStep={setStep}
    >
      <FormProvider {...methods}>
        <S.Container>{renderPage(step)}</S.Container>
      </FormProvider>
    </BackLayout>
  );
};

export default CreateMeeting;
