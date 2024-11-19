import { SerializedStyles } from '@emotion/react';
import * as S from './Layout.styled';

interface Props {
  css?: SerializedStyles;
  children?: React.ReactNode;
}

/**
 * DefaultLayout을 반환하는 컴포넌트
 * @return {JSX}
 */
export default function DefaultLayout({ children }: Props) {
  return <S.DefaultLayout>{children}</S.DefaultLayout>;
}
