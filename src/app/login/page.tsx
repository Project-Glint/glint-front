'use client';
import { DefaultLayout } from 'components/layout';
import * as S from './login.styled';

export default function Login() {
  const clickLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorize/kakao`;
  };
  return (
    <DefaultLayout>
      <S.LoginButtonGroup>
        <S.LoginButton loginType="kakao" onClick={clickLogin}>
          카카오로 로그인
        </S.LoginButton>
        <S.LoginButton loginType="apple">Apple로 로그인</S.LoginButton>
      </S.LoginButtonGroup>
    </DefaultLayout>
  );
}
