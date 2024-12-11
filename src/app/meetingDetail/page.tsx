'use client';
import { BackLayout } from 'components';
import { FormProvider, useForm } from 'react-hook-form';
import { useState } from 'react';
import { MeetingDetailForm } from 'types';
import { meetingDetailDefaultValues } from 'assets';
import { ParticipantsMeetingDetail, RequestParticipation } from './containers';
import * as S from './page.styled';

const MeetingDetail = () => {
  const [step, setStep] = useState(0);

  const methods = useForm<MeetingDetailForm>({
    defaultValues: meetingDetailDefaultValues,
  });

  const renderPage = (step: number) => {
    // 참가자 flow
    switch (step) {
      // 참가자 첫 화면
      case 0:
        return <ParticipantsMeetingDetail step={step} setStep={setStep} />;
      // 참여 신청 화면
      case 1:
        return <RequestParticipation />;
    }
  };
  return (
    <BackLayout
      isImageHeader={step === 0 ? true : false}
      title={step === 1 ? '참가 신청' : ''}
    >
      <FormProvider {...methods}>
        <S.Container>{renderPage(step)}</S.Container>
      </FormProvider>
    </BackLayout>
  );
};

export default MeetingDetail;
