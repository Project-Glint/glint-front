import { useFormContext } from 'react-hook-form';
import * as S from './SignupProfile.styled';
import { SignupForm } from 'types';
import { ImageUpload, SignupFooter } from 'components';
import { useState } from 'react';

interface SignupProfileProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  MAX_PAGE: number;
}

const SignupProfile = ({ page, setPage, MAX_PAGE }: SignupProfileProps) => {
  const { control, watch, handleSubmit } = useFormContext<SignupForm>();
  const [images, setImages] = useState<string[]>([]);
  const isNextButtonEnabled = !!watch('profile') && images.length >= 3;
  const handleClickNext = (data: SignupForm) => {
    console.log('data', data);
  };
  const handleClickPrev = () => {
    setPage(page - 1);
  };

  return (
    <>
      <S.Container>
        <S.ImageWrapper>
          <ImageUpload
            name="profile"
            control={control}
            imageLength={6}
            previews={images}
            setPreviews={setImages}
          />
          <S.Description>사진은 최소 3장 이상 업로드해 주세요.</S.Description>
        </S.ImageWrapper>
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

export default SignupProfile;
