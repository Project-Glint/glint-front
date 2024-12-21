import { usePathname, useRouter } from 'next/navigation';
import DefaultLayout from '../DefaultLayout';
import * as S from './BackLayout.styled';
import { DotsThreeVerticalIcon, LeftIcon, ShareNetworkIcon } from 'assets';
import Image from 'next/image';
import testImg from '../../../assets/statics/testImg.jpg';
import React, { useState } from 'react';
import { useDialog } from 'components/Dialog';

interface BackLayoutProps {
  title?: string;
  children?: React.ReactNode;
  isImageHeader?: boolean;
  clickMore?: () => void;
  type?: 'manager' | 'participant';
}

interface MoreInfo {
  type: 'manager' | 'participant';
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MoreInfo = ({ type, setOpen }: MoreInfo) => {
  const router = useRouter();
  const pathname = usePathname();
  const { confirm } = useDialog();

  const clickDelete = () => {
    setOpen(false);
    confirm({
      title: '미팅 방을 삭제할까요?',
      description: '삭제하면 되돌릴 수 없어요. 신중히 결정해주세요.',
      confirmButtonText: '되돌아가기',
      cancelButtonText: '삭제하기',
    })
      .then(() => {
        // 되돌아가기 클릭
      })
      .catch(() => {
        // 삭제하기 클릭;
      });
  };

  const clickUpdate = () => {
    setOpen(false);
    router.push(`${pathname}/edit`);
  };
  return (
    <>
      {type === 'manager' ? (
        <S.MoreList>
          <S.MoreItem onClick={clickUpdate}>미팅 수정하기</S.MoreItem>
          <S.MoreItem onClick={clickDelete}>미팅 삭제하기</S.MoreItem>
        </S.MoreList>
      ) : (
        <S.MoreList>
          <S.MoreItem>미팅 신고하기</S.MoreItem>
        </S.MoreList>
      )}
    </>
  );
};

const BackLayout = ({
  title,
  children,
  isImageHeader,
  type = 'manager',
}: BackLayoutProps) => {
  const router = useRouter();

  const [openMore, setOpenMore] = useState(false);

  const onClickBack = (): void => {
    router.back();
  };

  const onClickMore = () => {
    setOpenMore(!openMore);
  };

  return isImageHeader ? (
    <S.DefaultLayout>
      <S.Header isImageHeader={isImageHeader}>
        <LeftIcon onClick={onClickBack} />
        <S.RightIconWrapper>
          <ShareNetworkIcon />
          <S.InfoContainer>
            <DotsThreeVerticalIcon onClick={onClickMore} />
            {openMore && <MoreInfo type={type} setOpen={setOpenMore} />}
          </S.InfoContainer>
        </S.RightIconWrapper>
      </S.Header>
      <S.ImageHeader>
        <Image src={testImg} alt="Test Image" fill priority />
        <S.GradientOverlay />
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
