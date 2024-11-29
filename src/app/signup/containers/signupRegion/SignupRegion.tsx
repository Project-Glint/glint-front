import { useFormContext } from 'react-hook-form';
import { SignupForm } from 'types';
import * as S from './SignupRegion.styled';
import { Badge, RegionModal, SignupFooter } from 'components';
import { WhiteXIcon } from 'assets';

interface SignupRegionProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  MAX_PAGE: number;
}

const SignupRegion = ({ page, setPage, MAX_PAGE }: SignupRegionProps) => {
  const { watch, handleSubmit, setValue } = useFormContext<SignupForm>();
  const residenceRegion = watch('residenceRegion');
  const activityRegion = watch('activityRegion');
  const isNextButtonEnabled =
    !!watch('residenceRegion') && !!watch('activityRegion');
  const handleClickNext = (data: SignupForm) => {
    console.log('data', data);
    if (isNextButtonEnabled) {
      setPage(page + 1);
    }
  };

  const handleClickPrev = () => {
    setPage(page - 1);
  };

  const badge = (key: any) => {
    return {
      key: key,
      label: key,
      icon: <WhiteXIcon />,
    };
  };
  console.log('residence', residenceRegion);
  return (
    <>
      <S.InputBadgeWrapper>
        <S.InputWrapper>
          <S.InputLabel>거주지</S.InputLabel>
          <RegionModal
            name="residenceRegion"
            css={S.button}
            buttonName="선택하기"
            title="거주지를 선택해 주세요"
            onSelect={(value) => setValue('residenceRegion', value)}
          />
        </S.InputWrapper>
        {residenceRegion && (
          <Badge
            items={badge(residenceRegion)}
            key={residenceRegion}
            isClickable
            selectedKeys={[residenceRegion]}
          />
        )}
      </S.InputBadgeWrapper>
      <S.InputBadgeWrapper>
        <S.InputWrapper>
          <S.InputLabel>활동 지역</S.InputLabel>
          <RegionModal
            name="activityRegion"
            css={S.button}
            buttonName="선택하기"
            title="활동 지역을 선택해 주세요"
            onSelect={(value) => setValue('activityRegion', value)}
          />
        </S.InputWrapper>
        {activityRegion && (
          <Badge
            items={badge(activityRegion)}
            key={activityRegion}
            isClickable
            selectedKeys={[activityRegion]}
          />
        )}
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
