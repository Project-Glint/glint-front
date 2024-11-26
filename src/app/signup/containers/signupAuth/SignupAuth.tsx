import { authTabList, AddFileIcon } from 'assets';
import { Button, SignupFooter, Tabs, TextController } from 'components';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import * as S from './SignupAuth.styled';
import { SignupForm } from 'types';

interface SignupAuthProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  MAX_PAGE: number;
}

const SignupAuth = ({ page, setPage, MAX_PAGE }: SignupAuthProps) => {
  // TODO: 전역관리로 수정
  const [activeTab, setActiveTab] = useState<string>(authTabList[0].key);
  const { control, watch, handleSubmit } = useFormContext<SignupForm>();
  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };
  const isNextButtonEnabled = !!watch('email') || !!watch('authImage');

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

export default SignupAuth;
