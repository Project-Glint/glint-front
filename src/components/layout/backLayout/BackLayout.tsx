import { useRouter } from 'next/navigation';
import DefaultLayout from '../DefaultLayout';
import * as S from './BackLayout.styled';
import { LeftIcon } from 'assets';

interface BackLayoutProps {
  title?: string;
  children?: React.ReactNode;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const BackLayout = ({ title, children, step, setStep }: BackLayoutProps) => {
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
  return (
    <DefaultLayout>
      <S.Header>
        <LeftIcon onClick={onClickBack} />
        <S.Title>{title}</S.Title>
      </S.Header>
      <S.Context>{children}</S.Context>
    </DefaultLayout>
  );
};

export default BackLayout;
