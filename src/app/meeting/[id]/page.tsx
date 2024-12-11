'use client';
import { BackLayout, ButtonFooter, ProfileCard, Tabs } from 'components';
import * as S from './MeetingDetail.styled';

const men = [
  { name: '신채호', age: 32, company: '삼성전자', job: 'UI디자이너' },
  { name: '이서현', age: 31, company: '삼성전자', job: '안드로이드 개발자' },
];
const women = [{ name: '윤서진', age: 29, company: 'LG전자', job: 'MD' }];

const MeetingDetail = () => {
  return (
    <BackLayout isImageHeader>
      <S.MeetingHeader>
        <S.Title>대기업 직장인끼리 편하게 만나요.</S.Title>
        <S.InfoWrapper>
          <S.MeetingInfo>서울시 종로구</S.MeetingInfo>
          <S.InfoDivider />
          <S.MeetingInfo>2:2</S.MeetingInfo>
          <S.InfoDivider />
          <S.MeetingInfo>삼성</S.MeetingInfo>
        </S.InfoWrapper>
        <S.Divider />
        <S.Description>
          함께할 대기업 직장인 두 분을 찾습니다! 2:2 미팅에서 즐겁고 가벼운
          대화를 나누며 서로 알아갈 기회를 만들어보세요. 편안한 분위기 속에서
          새로운 인연을 만나고 싶으신 분들 환영합니다!
        </S.Description>
      </S.MeetingHeader>

      <S.DividerPadding />

      <S.ParticipantList>
        <Tabs
          tabList={[
            {
              key: 'participant',
              label: '참가자',
            },
            {
              key: 'applicant',
              label: '참가자 신청자',
            },
          ]}
          type="outline"
        />
        <S.ParticipantGroup>
          <div>
            <S.Label>남자</S.Label>
            {men.map((person) => (
              <ProfileCard
                key={person.name}
                userName={person.name}
                age={person.age}
                img=""
                info={{ companyName: person.company, occupation: person.job }}
              />
            ))}
          </div>
          <div>
            <S.Label>여자</S.Label>
            {women.map((person) => (
              <ProfileCard
                key={person.name}
                userName={person.name}
                age={person.age}
                img=""
                info={{ companyName: person.company, occupation: person.job }}
              />
            ))}
          </div>
        </S.ParticipantGroup>
      </S.ParticipantList>
      <ButtonFooter
        label="채팅 시작"
        isNextButtonEnabled={true}
        handleClickNext={() => {}}
      />
    </BackLayout>
  );
};

export default MeetingDetail;
