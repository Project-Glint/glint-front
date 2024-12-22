import { AvatarList } from 'components/avatar';
import * as S from './MeetingCard.styled';
import { SmallLineIcon } from 'assets';

interface MeetingCardProps {
  title: string;
  region: string;
  type: string;
  meetingImage: string;
}

const MeetingCard = ({
  title,
  region,
  type,
  meetingImage,
}: MeetingCardProps) => {
  const avatarList = [
    { userId: 1, image: '123' },
    { userId: 2, image: '123' },
    { userId: 3, image: '123' },
    { userId: 4, image: '123' },
  ];

  const typeRender = (type: string) => {
    switch (type) {
      case 'DOUBLE':
        return '2:2';
      case 'TRIPLE':
        return '3:3';
      case 'QUADRUPLE':
        return '4:4';
    }
  };
  return (
    <S.MeetingCardContainer>
      <S.InfoWrapper>
        <S.Img src={meetingImage} />
        <S.TitleWrapper>
          <S.Title>{title}</S.Title>
          <S.Description>
            <S.RowWrapper>
              {region} <SmallLineIcon /> {typeRender(type)}
            </S.RowWrapper>
          </S.Description>
        </S.TitleWrapper>
      </S.InfoWrapper>
      <S.RowWrapper>
        <S.GenderWrapper>
          <S.Gender>남자</S.Gender>
          <AvatarList avatarList={avatarList} />
        </S.GenderWrapper>
        <SmallLineIcon />
        <S.GenderWrapper>
          <S.Gender>여자</S.Gender>
          <AvatarList avatarList={avatarList} />
        </S.GenderWrapper>
      </S.RowWrapper>
    </S.MeetingCardContainer>
  );
};

export default MeetingCard;
