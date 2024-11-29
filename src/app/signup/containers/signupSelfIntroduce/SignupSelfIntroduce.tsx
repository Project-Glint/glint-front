import { SignupFooter, TextareaController } from 'components';
import * as S from './SignupSelfIntroduce.styled';
import { useFormContext } from 'react-hook-form';
import { SignupForm } from 'types';

interface SignupSelfIntroduceProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  MAX_PAGE: number;
}

const SignupSelfIntroduce = ({
  page,
  setPage,
  MAX_PAGE,
}: SignupSelfIntroduceProps) => {
  const { control, watch, handleSubmit } = useFormContext<SignupForm>();
  const isNextButtonEnabled =
    !!watch('lifeGoal') && !!watch('preference') && !!watch('loveStyle');
  const handleClickNext = (data: SignupForm) => {
    console.log('data', data);
    if (isNextButtonEnabled) {
      setPage(page + 1);
    }
  };

  const handleClickPrev = () => {
    setPage(page - 1);
  };
  return (
    <>
      <S.Container>
        <S.InputLabel>커리어, 목표, 꿈</S.InputLabel>
        <TextareaController
          name="lifeGoal"
          control={control}
          placeholder="현재 하는 일, 준비 중인 것, 앞으로의 목표와 추구하는 삶에 대해 작성해주세요."
          maxLength={500}
          showCharacterCount
          rules={{
            minLength: {
              value: 100,
              message: '100글자 이상 입력해야합니다.',
            },
          }}
        />
      </S.Container>
      <S.Container>
        <S.InputLabel>취향</S.InputLabel>
        <TextareaController
          name="preference"
          control={control}
          placeholder="취미, 좋아하는 음식, 나만의 휴식 방법, 자주 가는 장소, 좋아하는 여행지 등 작성해주세요."
          maxLength={500}
          showCharacterCount
          rules={{
            minLength: {
              value: 100,
              message: '100글자 이상 입력해야합니다.',
            },
          }}
        />
      </S.Container>
      <S.Container>
        <S.InputLabel>연애관</S.InputLabel>
        <TextareaController
          name="loveStyle"
          control={control}
          placeholder="나의 연애 스타일, 상대방에게 바라는 점, 희망하는 연애 모습 등을 작성해주세요."
          maxLength={500}
          showCharacterCount
          rules={{
            minLength: {
              value: 100,
              message: '100글자 이상 입력해야합니다.',
            },
          }}
        />
      </S.Container>
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

export default SignupSelfIntroduce;
