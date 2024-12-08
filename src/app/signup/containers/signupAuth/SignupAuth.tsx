import { authTabList, AddFileIcon } from 'assets';
import { Button, SignupFooter, Tabs, TextController } from 'components';
import { useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import * as S from './SignupAuth.styled';
import { SignupForm } from 'types';
import {
  usePostCertifyCode,
  usePostCertifyImage,
  usePostSendEmail,
} from 'hooks';

interface SignupAuthProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  MAX_PAGE: number;
}

const SignupAuth = ({ page, setPage, MAX_PAGE }: SignupAuthProps) => {
  // TODO: 전역관리로 수정
  const [activeTab, setActiveTab] = useState<string>(authTabList[0].key);
  const [isSendEmail, setIsSendEmail] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const { control, watch, getValues, setValue, handleSubmit } =
    useFormContext<SignupForm>();
  const { mutate: sendEmail } = usePostSendEmail();
  const { mutate: certifyCode } = usePostCertifyCode();
  const { mutate: certifyImage } = usePostCertifyImage();
  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };
  const email = watch('email');
  const authCode = watch('authCode');
  const authImage = watch('authImage');
  const isActiveEmail = activeTab === 'email';
  const isNextButtonEnabled = isActiveEmail ? !!authCode : !!authImage;

  const handleClickNext = async (data: SignupForm) => {
    if (!isNextButtonEnabled) return;

    const currentCode = getValues('authCode');
    const currentImage = getValues('authImage');
    if (isActiveEmail) {
      certifyCode(
        {
          certType: 'WORKER', // TODO: 초기화되는 값으로 넣기
          email: email,
          code: currentCode,
        },
        {
          onSuccess() {
            setPage(page + 1);
          },
        }
      );
      return;
    }

    certifyImage(
      { certifyImage: currentImage },
      {
        onSuccess() {
          setPage(page + 1);
        },
      }
    );
  };

  const handleClickPrev = () => {
    setPage(page - 1);
  };

  const sendEmailButton = () => {
    sendEmail({
      certType: 'ACADEMIC',
      email: email,
    });
    setIsSendEmail(true);
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
      if (!allowedTypes.includes(file.type)) return;

      const MAX_SIZE = 20 * 1024 * 1024;
      if (file.size > MAX_SIZE) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          setPreview(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
      setValue('authImage', file);
    }
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
                value={email}
                rules={{ required: true }}
                placeholder="email 입력"
              />
            </S.InputWrapper>
            <Button size="lg" outline onClick={sendEmailButton}>
              인증메일 전송
            </Button>
          </S.WithButtonWrapper>
          {isSendEmail && (
            <S.InputWrapper>
              <S.InputLabel>인증번호</S.InputLabel>
              <TextController
                name="authCode"
                control={control}
                value={authCode}
                rules={{ required: true }}
                placeholder="인증번호를 입력해 주세요."
                timer
                timerDuration={180}
                cancelIcon
              />
            </S.InputWrapper>
          )}
        </>
      ) : (
        <>
          {/* TODO: ImageUpload 컴포넌트 단일등록 수정 */}
          <S.WithButtonWrapper>
            <S.AuthImageContainer>
              {preview ? (
                <img src={preview} alt="preview" width="100%" height="auto" />
              ) : (
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
              )}
            </S.AuthImageContainer>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleChangeImage}
              accept=".jpg,.jpeg,.png"
            />
            <Button
              size="lg"
              outline
              onClick={() => fileInputRef.current?.click()}
            >
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
