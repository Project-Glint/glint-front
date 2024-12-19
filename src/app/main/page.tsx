'use client';
import { DefaultLayout, HomeFooter } from 'components';
import useUserStore from 'store/userStore';

const Main = () => {
  const user = useUserStore((state) => state.user);
  console.log('user', user);
  return (
    <DefaultLayout>
      Home
      <div>User Info</div>
      <div>UserId: {user?.userId}</div>
      <div>WorkThroughStep: {user?.workThroughStep}</div>
      <div>nickname: {user?.userDetailResponseDto.nickname}</div>
      <HomeFooter />
    </DefaultLayout>
  );
};

export default Main;
