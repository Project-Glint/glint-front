import { Control, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { SignupForm } from 'types';
import * as S from './SignupCharacter.styled';
import { Badge } from 'components';
import {
  bodyTypeList,
  drinkingTypeList,
  religionList,
  smokingTypeList,
} from 'assets';

interface SignupCharacterProps {
  control: Control<any>;
  watch: UseFormWatch<SignupForm>;
  type: 'bodyType' | 'smokingDrinking' | 'religion';
  setValue: UseFormSetValue<SignupForm>;
}
const SignupCharacter = ({
  control,
  watch,
  type,
  setValue,
}: SignupCharacterProps) => {
  const bodyType = watch('bodyType');
  const smokingType = watch('smokingType');
  const drinkingType = watch('drinkingType');
  const religion = watch('religion');

  const handleBadgeClick = (key: string) => {
    const field =
      type === 'bodyType'
        ? 'bodyType'
        : type === 'smokingDrinking'
          ? 'drinkingType'
          : 'religion';

    setValue(field, key);
  };
  const renderContent = (label: string) => {
    if (type === 'bodyType') return '체형';
    if (type === 'smokingDrinking') return '음주';
    if (type === 'religion') return '종교';
    return label;
  };
  return (
    <>
      <S.InputWrapper>
        <S.InputLabel>{renderContent('')}</S.InputLabel>
        <Badge
          items={
            type === 'bodyType'
              ? bodyTypeList
              : type === 'smokingDrinking'
                ? drinkingTypeList
                : religionList
          }
          isClickable
          selectedKeys={
            type === 'bodyType'
              ? [bodyType]
              : type === 'smokingDrinking'
                ? [drinkingType]
                : [religion]
          }
          handleClick={handleBadgeClick}
        />
      </S.InputWrapper>
      {type === 'smokingDrinking' && (
        <S.InputWrapper>
          <S.InputLabel>흡연</S.InputLabel>
          <Badge
            items={smokingTypeList}
            isClickable
            selectedKeys={[smokingType]}
            handleClick={(key) => setValue('smokingType', key)}
          />
        </S.InputWrapper>
      )}
    </>
  );
};

export default SignupCharacter;
