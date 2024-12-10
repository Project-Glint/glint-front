import { useFormContext } from 'react-hook-form';
import { SignupForm } from 'types';
import * as S from './SignupRegion.styled';
import { RegionModal, SignupFooter } from 'components';
import { usePostRegion } from 'hooks';

interface SignupRegionProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  MAX_PAGE: number;
}

const SignupRegion = ({ page, setPage, MAX_PAGE }: SignupRegionProps) => {
  const { watch, handleSubmit, setValue } = useFormContext<SignupForm>();
  const residenceRegionName = watch('residenceRegionName');
  const activityRegionName = watch('activityRegionName');
  const residenceRegionId = watch('residenceRegionId');
  const activityRegionId = watch('activityRegionId');
  const isNextButtonEnabled = !!residenceRegionName && !!activityRegionName;

  const { mutate: postRegion } = usePostRegion();

  const handleRegionSelect =
    (fieldPrefix: 'residenceRegion' | 'activityRegion') =>
    (name: string, id: number) => {
      setValue(`${fieldPrefix}Name`, name);
      setValue(`${fieldPrefix}Id`, id);
    };

  const handleClickNext = () => {
    if (isNextButtonEnabled) {
      if (residenceRegionName && activityRegionName) {
        postRegion(
          {
            residenceRegionId: residenceRegionId,
            residenceRegionName: residenceRegionName,
            activityRegionId: activityRegionId,
            activityRegionName: activityRegionName,
          },
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

  return (
    <>
      <S.InputBadgeWrapper>
        <S.InputWrapper>
          <S.InputLabel>거주지</S.InputLabel>
          <RegionModal
            name="residenceRegionName"
            buttonName="선택하기"
            title="거주지를 선택해 주세요"
            onSelect={handleRegionSelect('residenceRegion')}
            initialValue={residenceRegionName}
          />
        </S.InputWrapper>
      </S.InputBadgeWrapper>
      <S.InputBadgeWrapper>
        <S.InputWrapper>
          <S.InputLabel>활동 지역</S.InputLabel>
          <RegionModal
            name="activityRegionName"
            buttonName="선택하기"
            title="활동 지역을 선택해 주세요"
            onSelect={handleRegionSelect('activityRegion')}
            initialValue={activityRegionName}
          />
        </S.InputWrapper>
      </S.InputBadgeWrapper>
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

export default SignupRegion;
