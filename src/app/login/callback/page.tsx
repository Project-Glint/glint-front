'use client';
import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { getWorkThroughStep } from 'api/signup';
import useUserStore from 'store/userStore';
import { getUserInfo } from 'api/user';

export default function LoginCallback() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    const accessToken = searchParams.get('access_token');
    const refreshToken = searchParams.get('refresh_token');

    const matchTargetUrl = async () => {
      if (accessToken && refreshToken) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
      }
      const response = await getWorkThroughStep();
      if (response.status !== 'success') {
        router.push('/login');
        return;
      }
      const data = response.data;
      if (data.workThroughStep === 'COMPLETE') {
        router.push('/');
        return;
      }
      // userInfo
      if (data.id) {
        const info = await getUserInfo(data.id);
        if (info.status === 'success') {
          setUser(info.data);
        }
      }

      router.push(`/signup?id=${data.id}&step=${data.workThroughStep}`);
    };

    matchTargetUrl();
  }, []);

  return null;
}
