'use client';
import { BackLayout } from 'components';
import * as S from './page.styled';
import { useState } from 'react';
import { CreateMeetingRoom } from './containers';
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
    }
  };

  return (
    <BackLayout title="미팅 만들기" step={step} setStep={setStep}>
      <FormProvider {...methods}>
        <S.Container>{renderPage(step)}</S.Container>
      </FormProvider>
    </BackLayout>
  );
};

export default CreateMeeting;
