import * as S from './AvatarList.styled';

interface AvatarPops {
  // TODO: 수정필요
  avatarList: {
    userId: number;
    image: string;
  }[];
}

const AvatarList = ({ avatarList }: AvatarPops) => {
  return (
    <S.AvatarContainer>
      {avatarList
        .sort((a, b) => b.userId - a.userId)
        .map((item) => (
          <S.AvatarRoot key={item.userId} zIndex={item.userId}>
            <S.AvatarImage src={item.image} />
            <S.AvatarFallback>*</S.AvatarFallback>
          </S.AvatarRoot>
        ))}
    </S.AvatarContainer>
  );
};

export default AvatarList;
