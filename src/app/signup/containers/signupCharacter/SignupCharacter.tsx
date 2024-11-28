import { useFormContext } from 'react-hook-form';
import * as S from './SignupCharacter.styled';
import { Badge, SignupFooter } from 'components';
import {
  bodyTypeList,
  drinkingTypeList,
  religionList,
  smokingTypeList,
} from 'assets';
import { SignupForm } from 'types';

interface SignupCharacterProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  MAX_PAGE: number;
  type: 'bodyType' | 'smokingDrinking' | 'religion';
}
const SignupCharacter = ({
  page,
  setPage,
  MAX_PAGE,
  type,
}: SignupCharacterProps) => {
  const { watch, setValue, handleSubmit } = useFormContext<SignupForm>();
  const bodyType = watch('bodyType');
  const smokingType = watch('smokingType');
  const drinkingType = watch('drinkingType');
  const religion = watch('religion');
  const isNextButtonEnabled = true;

  const handleClickNext = (data: SignupForm) => {
    console.log('data', data);
    if (isNextButtonEnabled) {
      setPage(page + 1);
    }
  };

  const handleClickPrev = () => {
    setPage(page - 1);
  };

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
      <SignupFooter
        page={page}
        maxPage={MAX_PAGE}
        isNextButtonEnabled={isNextButtonEnabled}
        handleClickNext={handleSubmit(handleClickNext)}
        handleClickPrev={handleClickPrev}
      />
    </>
  );
};

export default SignupCharacter;
