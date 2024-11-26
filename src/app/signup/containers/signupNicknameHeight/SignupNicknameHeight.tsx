import { SignupFooter, TextController } from 'components';
import * as S from './SignupNicknameHeight.styled';
import { useFormContext } from 'react-hook-form';
import { SignupForm } from 'types';

interface SignupNicknameHeightProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  MAX_PAGE: number;
  type: 'nickname' | 'height';
}

const SignupNicknameHeight = ({
  page,
  setPage,
  MAX_PAGE,
  type,
}: SignupNicknameHeightProps) => {
  const { control, watch, handleSubmit } = useFormContext<SignupForm>();
  const isNextButtonEnabled = !!watch('nickname');
  const renderContent = (nickname: string, height: string) => {
    return type === 'nickname' ? nickname : height;
  };
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
      <S.InputWrapper>
        <S.InputLabel>{renderContent('닉네임', '키')}</S.InputLabel>
        <TextController
          name={renderContent('nickname', 'height')}
          control={control}
          value={type === 'nickname' ? watch('nickname') : watch('height')}
          rules={{ required: true, minLength: 3, maxLength: 15 }}
          placeholder={renderContent(
            '닉네임을 입력해 주세요.',
            '키를 입력해 주세요.'
          )}
        />
      </S.InputWrapper>
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

export default SignupNicknameHeight;
