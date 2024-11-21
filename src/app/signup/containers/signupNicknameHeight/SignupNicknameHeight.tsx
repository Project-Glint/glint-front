import { TextController } from 'components';
import * as S from './SignupNicknameHeight.styled';
import { Control, UseFormWatch } from 'react-hook-form';
import { SignupForm } from 'types';

interface SignupNicknameHeightProps {
  control: Control<any>;
  watch: UseFormWatch<SignupForm>;
  type: 'nickname' | 'height';
}

const SignupNicknameHeight = ({
  type,
  control,
  watch,
}: SignupNicknameHeightProps) => {
  const renderContent = (nickname: string, height: string) => {
    return type === 'nickname' ? nickname : height;
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
    </>
  );
};

export default SignupNicknameHeight;
