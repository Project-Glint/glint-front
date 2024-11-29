'use client';
import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { getWorkThroughStep } from 'api/signup';

export default function LoginCallback() {
  const searchParams = useSearchParams();
  const router = useRouter();

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

      router.push(`/signup?id=${data.id}&step=${data.workThroughStep}`);
    };

    matchTargetUrl();
  }, []);

  return null;
}
