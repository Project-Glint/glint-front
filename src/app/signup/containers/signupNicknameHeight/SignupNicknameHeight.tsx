import { SignupFooter, TextController } from 'components';
import * as S from './SignupNicknameHeight.styled';
import { useFormContext } from 'react-hook-form';
import { SignupForm } from 'types';
import { usePostHeight, usePostNickname } from 'hooks';

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
  const {
    control,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useFormContext<SignupForm>();
  const nickname = watch('nickname');
  const height = watch('height');
  const isNextButtonEnabled = !!nickname || !!height;

  const { mutate: postNickname } = usePostNickname();
  const { mutate: postHeight } = usePostHeight();

  const renderContent = (nickname: string, height: string) => {
    return type === 'nickname' ? nickname : height;
  };

  const handleClickNext = () => {
    if (isNextButtonEnabled) {
      if (type === 'nickname' && nickname) {
        postNickname(
          { nickname: nickname },
          {
            onSuccess: () => {
              setPage(page + 1);
            },
            onError: () => {
              setError('nickname', { message: '이미 사용 중인 닉네임이에요.' });
            },
          }
        );
      } else if (type === 'height' && height) {
        postHeight(
          { height: height },
          {
            onSuccess: () => {
              setPage(page + 1);
            },
            onError: () => {
              setError('height', { message: '올바른 키를 입력해 주세요.' });
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
      <S.InputWrapper>
        <S.InputLabel>{renderContent('닉네임', '키')}</S.InputLabel>
        <TextController
          hasError={
            type === 'nickname'
              ? !!errors.nickname?.message
              : !!errors.height?.message
          }
          name={renderContent('nickname', 'height')}
          control={control}
          value={type === 'nickname' ? nickname : height}
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
