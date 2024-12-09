import { useRouter } from 'next/navigation';
import DefaultLayout from '../DefaultLayout';
import * as S from './BackLayout.styled';
import { DotsThreeVerticalIcon, LeftIcon, ShareNetworkIcon } from 'assets';
import Image from 'next/image';
import testImg from '../../../assets/statics/testImg.jpg';

interface BackLayoutProps {
  title?: string;
  children?: React.ReactNode;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  isImageHeader?: boolean;
}

const BackLayout = ({
  title,
  children,
  step,
  setStep,
  isImageHeader,
}: BackLayoutProps) => {
  const router = useRouter();

  const onClickBack = (): void => {
    if (step > 0 && step !== 999) {
      setStep(step - 1);
    } else if (step === 999) {
      setStep(0);
    } else {
      router.back();
    }
  };

  return isImageHeader ? (
    <S.DefaultLayout>
      <S.ImageHeader>
        <Image src={testImg} alt="Test Image" fill priority />
        <S.GradientOverlay />
        <S.Header isImageHeader={isImageHeader}>
          <LeftIcon onClick={onClickBack} />
          <S.RightIconWrapper>
            <ShareNetworkIcon />
            <DotsThreeVerticalIcon />
          </S.RightIconWrapper>
        </S.Header>
      </S.ImageHeader>
      <S.Context>{children}</S.Context>
    </S.DefaultLayout>
  ) : (
    <DefaultLayout>
      <S.Header>
        <LeftIcon onClick={onClickBack} />
        {title && <S.Title>{title}</S.Title>}
      </S.Header>
      <S.Context>{children}</S.Context>
    </DefaultLayout>
  );
};

export default BackLayout;
