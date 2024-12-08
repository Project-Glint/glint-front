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
  control: Control<any>;
  name: string;
  selectedProfile?: string[];
  isCheck?: boolean;
}

const ProfileCard = ({
  userName,
  age,
  img,
  info,
  control,
  selectedProfile,
  isCheck,
}: ProfileCardProps) => {
  const checkboxList = [{ key: userName, label: userName }];
  const isSelected = selectedProfile?.includes(userName);
  return (
    <S.CardContainer isSelected={isSelected}>
      <S.Avatar src={img} />
      <S.InfoWrapper>
        <S.NameAgeWrapper>
          <S.Name>{userName}</S.Name>
          {age}세
        </S.NameAgeWrapper>
        <S.JobWrapper>
          {info.companyName}
          <SmallLineIcon />
          {info.occupation}
        </S.JobWrapper>
      </S.InfoWrapper>
      {isCheck && (
        <Checkbox
          css={S.checkIcon}
          control={control}
          name="selectedProfile"
          checkboxList={checkboxList}
        />
      )}
    </S.CardContainer>
  );
};
export default ProfileCard;
