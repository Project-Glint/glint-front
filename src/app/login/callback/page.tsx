'use client';
import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { getWorkThroughStepAPI } from 'api/signup';
import useUserStore from 'store/userStore';
import { getUserInfo } from 'api/user';
import { useDialog } from 'components/Dialog';

export default function LoginCallback() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);
  const { confirm } = useDialog();

  useEffect(() => {
    const accessToken = searchParams.get('access_token');
    const refreshToken = searchParams.get('refresh_token');

    const matchTargetUrl = async () => {
      if (accessToken && refreshToken) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
      }
      const response = await getWorkThroughStepAPI();
      if (response.status !== 'success') {
        router.push('/login');
        return;
      }
      const data = response.data;
      if (data.workThroughStep === 'COMPLETE') {
        router.push('/main');
        return;
      }

      // userInfo
      if (data.id) {
        confirm({
          description: '진행 중인 회원가입이 있어요',
          cancelButtonText: '처음부터',
          confirmButtonText: '이어서 진행',
        })
          .then(async () => {
            const info = await getUserInfo(data.id);
            if (info.status === 'success') {
              setUser(info.data);
            }
            router.push(`/signup?id=${data.id}&step=${data.workThroughStep}`);
          })
          .catch(() => {
            router.push(`/signup`);
          });
        return;
      }

      router.push(`/signup`);
    };

    matchTargetUrl();
  }, []);

  return null;
}
