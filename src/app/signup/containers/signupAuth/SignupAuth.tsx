import { authTabList, AddFileIcon } from 'assets';
import { Button, Tabs, TextController } from 'components';
import { useState } from 'react';
import { Control, UseFormWatch } from 'react-hook-form';
import { SignupForm } from 'types';
import * as S from './SignupAuth.styled';

interface SignupAuthProps {
  control: Control<any>;
  watch: UseFormWatch<SignupForm>;
}

const SignupAuth = ({ control, watch }: SignupAuthProps) => {
  // TODO: 전역관리로 수정
  const [activeTab, setActiveTab] = useState<string>(authTabList[0].key);

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <>
      <Tabs tabList={authTabList} onChange={handleTabChange} />
      {activeTab === 'email' ? (
        <>
          <S.WithButtonWrapper>
            <S.InputWrapper>
              <S.InputLabel>직장</S.InputLabel>
              <TextController
                name="email"
                control={control}
                value={watch('email')}
                rules={{ required: true }}
                placeholder="email 입력"
              />
            </S.InputWrapper>
            <Button size="lg" outline>
              인증메일 전송
            </Button>
          </S.WithButtonWrapper>
          <S.InputWrapper>
            <S.InputLabel>인증번호</S.InputLabel>
            <TextController
              name="authCode"
              control={control}
              value={watch('authCode')}
              rules={{ required: true }}
              placeholder="인증번호를 입력해 주세요."
            />
          </S.InputWrapper>
        </>
      ) : (
        <>
          {/* TODO: ImageUpload 컴포넌트 단일등록 수정 */}
          <S.WithButtonWrapper>
            <S.AuthImageContainer>
              <S.AuthImageWrapper>
                <S.AuthImageContentWrapper>
                  <AddFileIcon />
                  <S.AuthImageTitle>
                    자유롭게 인증자료를 올려주세요.
                  </S.AuthImageTitle>
                  <S.AuthImageSubTitle>
                    (예: 명함, 면허증, 학생증, 재직증명서, 재학증명서 등)
                  </S.AuthImageSubTitle>
                </S.AuthImageContentWrapper>
              </S.AuthImageWrapper>
            </S.AuthImageContainer>
            <Button size="lg" outline>
              이미지 업로드
            </Button>
          </S.WithButtonWrapper>
        </>
      )}
    </>
  );
};

export default SignupAuth;
