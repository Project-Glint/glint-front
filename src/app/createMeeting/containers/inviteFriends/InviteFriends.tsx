import { useFormContext } from 'react-hook-form';
import { CreateMeetingForm } from 'types';
import * as S from './InviteFriends.styled';
import { ButtonFooter, ProfileCard, RadioCard } from 'components';
import { inviteFriendsRadioList } from 'assets';
import { useEffect } from 'react';

const InviteFriends = () => {
  const { control, watch, setValue, handleSubmit } =
    useFormContext<CreateMeetingForm>();
  const withFriends = watch('withFriends');
  const inviteFriends = watch('inviteFriends');
  const isNextButtonEnabled =
    withFriends === 'N' ||
    (inviteFriends !== undefined && inviteFriends?.length > 0);

  useEffect(() => {
    if (withFriends === 'N') {
      setValue('inviteFriends', []);
    }
  }, [withFriends]);

  const handleClickNext = (data: CreateMeetingForm) => {
    console.log('data', data);
    if (isNextButtonEnabled) {
      console.log('완료');
    }
  };

  const openChildren = () => {
    return (
      <S.FriendsContainer>
        <S.FriendsWrapper>
          <S.FriendsTitle>회사 동기</S.FriendsTitle>
          <ProfileCard
            userName="신채호"
            age={29}
            img="12"
            info={{ universityName: '한국대학교', departmentName: '한국학과' }}
            control={control}
            name="inviteFriends"
            isCheck
          />
        </S.FriendsWrapper>
        <S.FriendsWrapper>
          <S.FriendsTitle>동네 친구</S.FriendsTitle>
          <ProfileCard
            userName="이나래"
            age={29}
            img="12"
            info={{ universityName: '한국대학교', departmentName: '한국학과' }}
            control={control}
            name="inviteFriends"
            isCheck
          />
        </S.FriendsWrapper>
      </S.FriendsContainer>
    );
  };

  return (
    <>
      <S.Title>
        미팅을 함께할
        <br />
        친구가 있으신가요?
      </S.Title>
      <RadioCard
        name="withFriends"
        control={control}
        radioList={inviteFriendsRadioList}
        isOpen
        openKey="Y"
        openChildren={openChildren()}
      />
      <ButtonFooter
        label="다음"
        isNextButtonEnabled={isNextButtonEnabled}
        handleClickNext={handleSubmit(handleClickNext)}
      />
    </>
  );
};

export default InviteFriends;
