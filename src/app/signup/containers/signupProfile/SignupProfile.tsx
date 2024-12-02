import { useFormContext } from 'react-hook-form';
import * as S from './SignupProfile.styled';
import { SignupForm } from 'types';
import { ImageUpload, SignupFooter } from 'components';
import { useState } from 'react';
import { usePostProfileImage } from 'hooks';
// import { useRouter } from 'next/navigation';

interface SignupProfileProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  MAX_PAGE: number;
}

const SignupProfile = ({ page, setPage, MAX_PAGE }: SignupProfileProps) => {
  const { control, watch, handleSubmit } = useFormContext<SignupForm>();
  const [previews, setPreviews] = useState<string[]>([]);
  // const router = useRouter();

  const images = watch('images');
  const isNextButtonEnabled = previews.length >= 3;

  const { mutate: postProfileImage } = usePostProfileImage();

  const handleClickNext = () => {
    if (isNextButtonEnabled) {
      postProfileImage(
        {
          images: images?.slice(1),
          representativeImage: images[0],
        },
        {
          onSuccess: () => {
            console.log('Signup Complete');
            // router.push('/main');
          },
        }
      );
    }
  };

  const handleClickPrev = () => {
    setPage(page - 1);
  };

  return (
    <>
      <S.Container>
        <S.ImageWrapper>
          <ImageUpload
            name="images"
            control={control}
            imageLength={6}
            previews={previews}
            setPreviews={setPreviews}
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
