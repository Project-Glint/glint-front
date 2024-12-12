import { SmallLineIcon } from 'assets';
import * as S from './ProfileCard.styled';
import { Control } from 'react-hook-form';
import { Checkbox } from 'components';

interface ProfileCardProps {
  userName: string;
  age: number;
  img: string;
  info: {
    companyName?: string;
    occupation?: string;
    universityName?: string;
    departmentName?: string;
  };
  control?: Control<any>;
  name?: string;
  isCheck?: boolean;
}

const ProfileCard = ({
  userName,
  age,
  img,
  info,
  control,
  name,
  isCheck,
}: ProfileCardProps) => {
  const checkboxList = [{ key: userName, label: userName }];
  return (
    <S.CardContainer>
      <S.Avatar src={img} />
      <S.InfoWrapper>
        <S.NameAgeWrapper>
          <S.Name>{userName}</S.Name>
          {age}세
        </S.NameAgeWrapper>
        <S.JobWrapper>
          {info.companyName ? info.companyName : info.universityName}
          <SmallLineIcon />
          {info.occupation ? info.occupation : info.departmentName}
        </S.JobWrapper>
      </S.InfoWrapper>
      {isCheck && control && name && (
        <Checkbox
          css={S.checkIcon}
          control={control}
          name={name}
          checkboxList={checkboxList}
        />
      )}
    </S.CardContainer>
  );
};
export default ProfileCard;
