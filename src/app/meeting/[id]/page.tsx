'use client';
import { useState } from 'react';
import {
  BackLayout,
  Button,
  ButtonFooter,
  ProfileCard,
  Tabs,
} from 'components';
import * as S from './MeetingDetail.styled';

const men = [
  { name: '신채호', age: 32, company: '삼성전자', job: 'UI디자이너' },
  { name: '이서현', age: 31, company: '삼성전자', job: '안드로이드 개발자' },
];
const women = [{ name: '윤서진', age: 29, company: 'LG전자', job: 'MD' }];

const groups = [
  [
    { name: '김다은', age: 29, company: '두산', job: '기계 엔지니어' },
    { name: '하지안', age: 29, company: '이랜드', job: '패션 디자이너' },
    { name: '오시은', age: 29, company: 'CJ', job: '브랜드 매니저' },
  ],
  [
    { name: '이서연', age: 29, company: '롯데', job: '마케팅 매니저' },
    { name: '진소율', age: 29, company: '카카오', job: '서비스 기획자' },
  ],
];

const attendant = { men, women, groups: [] };
const participant = { men, women, groups };

interface DecideParticipateProps {
  refuse: () => void;
  approve: () => void;
}

const DecideParticipate = ({ refuse, approve }: DecideParticipateProps) => {
  // key 값 내려받기
  const clickRefuse = () => {
    refuse();
  };
  const clickApprove = () => {
    approve();
  };
  return (
    <S.ButtonContainer>
      <Button onClick={clickRefuse} outline size="sm">
        거절
      </Button>
      <Button onClick={clickApprove} size="sm">
        수락
      </Button>
    </S.ButtonContainer>
  );
};

const MeetingDetail = () => {
  const [status, setStatus] = useState('participant');
  const data = status === 'participant' ? attendant : participant;
  console.log(data);
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
              key: 'attendant',
              label: '참가자 신청자',
            },
          ]}
          type="outline"
          onChange={(key) => setStatus(key)}
        />
        <S.ParticipantGroup>
          {Object.hasOwn(data, 'men') && data.men.length > 0 && (
            <div>
              <S.Label>남자</S.Label>
              {data.men.map((person) => (
                <ProfileCard
                  key={`male-${person.name}`}
                  userName={person.name}
                  age={person.age}
                  img=""
                  info={{ companyName: person.company, occupation: person.job }}
                  profileEnd={
                    status !== 'participant' && (
                      <DecideParticipate refuse={() => {}} approve={() => {}} />
                    )
                  }
                />
              ))}
            </div>
          )}
          {Object.hasOwn(data, 'women') && data.women.length > 0 && (
            <div>
              <S.Label>여자</S.Label>
              {data.women.map((person) => (
                <ProfileCard
                  key={`female-${person.name}`}
                  userName={person.name}
                  age={person.age}
                  img=""
                  info={{ companyName: person.company, occupation: person.job }}
                  profileEnd={
                    status !== 'participant' && (
                      <DecideParticipate refuse={() => {}} approve={() => {}} />
                    )
                  }
                />
              ))}
            </div>
          )}
          {Object.hasOwn(data, 'groups') &&
            data.groups.length > 0 &&
            data.groups.map((group, index) => (
              <div key={`group-${index}`}>
                <S.LabelContainer>
                  <S.Label
                    group
                  >{`${group[0].name} 외 ${group.length}명`}</S.Label>
                  {status !== 'participant' && (
                    <DecideParticipate refuse={() => {}} approve={() => {}} />
                  )}
                </S.LabelContainer>
                {group.map((person, personIndex) => (
                  <ProfileCard
                    key={`group-${person.name}-${index}-${personIndex}`}
                    userName={person.name}
                    age={person.age}
                    img=""
                    info={{
                      companyName: person.company,
                      occupation: person.job,
                    }}
                  />
                ))}
              </div>
            ))}
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
