import { useFormContext } from 'react-hook-form';
import * as S from './SignupCharacter.styled';
import { Chip, SignupFooter } from 'components';
import {
  bodyTypeList,
  drinkingTypeList,
  religionList,
  smokingTypeList,
} from 'assets';
import { SignupForm } from 'types';
import {
  usePostBodyType,
  usePostReligion,
  usePostSmokingDrinkingType,
} from 'hooks';

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
  const isNextButtonEnabled =
    !!bodyType || !!smokingType || !!drinkingType || !!religion;

  const { mutate: postBodyType } = usePostBodyType();
  const { mutate: postSmokingDrinkingType } = usePostSmokingDrinkingType();
  const { mutate: postReligion } = usePostReligion();

  const handleClickNext = () => {
    if (isNextButtonEnabled) {
      if (type === 'bodyType' && bodyType) {
        postBodyType(
          { bodyType: bodyType },
          {
            onSuccess: () => {
              setPage(page + 1);
            },
          }
        );
      } else if (type === 'smokingDrinking' && smokingType && drinkingType) {
        postSmokingDrinkingType(
          { smokingType: smokingType, drinkingType: drinkingType },
          {
            onSuccess: () => {
              setPage(page + 1);
            },
          }
        );
      } else if (type === 'religion' && religion) {
        postReligion(
          { religion: religion },
          {
            onSuccess: () => {
              setPage(page + 1);
            },
          }
        );
      }
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
        <Chip
          items={
            type === 'bodyType'
              ? bodyTypeList
              : type === 'smokingDrinking'
                ? drinkingTypeList
                : religionList
          }
          size="lg"
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
          <Chip
            items={smokingTypeList}
            selectedKeys={[smokingType]}
            size="lg"
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
