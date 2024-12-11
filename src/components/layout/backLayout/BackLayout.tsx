import { useRouter } from 'next/navigation';
import DefaultLayout from '../DefaultLayout';
import * as S from './BackLayout.styled';
import { DotsThreeVerticalIcon, LeftIcon, ShareNetworkIcon } from 'assets';
import Image from 'next/image';
import testImg from '../../../assets/statics/testImg.jpg';

interface BackLayoutProps {
  title?: string;
  children?: React.ReactNode;
  isImageHeader?: boolean;
}

const BackLayout = ({ title, children, isImageHeader }: BackLayoutProps) => {
  const router = useRouter();

  const onClickBack = (): void => {
    router.back();
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
