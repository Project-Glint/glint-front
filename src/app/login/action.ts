'use server';
import { cookies } from 'next/headers';

const ACCESS_TOKEN_EXPIRED = 60 * 60 * 1; // 1시간
const REFRESH_TOKEN_EXPIRED = 60 * 60 * 24 * 7; // 7일

export const setTokens = async (accessToken: string, refreshToken: string) => {
  const cookiesHeaders = await cookies();

  cookiesHeaders.set('accessToken', accessToken, {
    httpOnly: true,
    secure: true,
    path: '/',
    sameSite: 'strict',
    maxAge: ACCESS_TOKEN_EXPIRED,
  });

  cookiesHeaders.set('refreshToken', refreshToken, {
    httpOnly: true,
    secure: true,
    path: '/',
    sameSite: 'strict',
    maxAge: REFRESH_TOKEN_EXPIRED,
  });
};
