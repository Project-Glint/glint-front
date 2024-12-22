'use client';
import { DefaultLayout, HomeFooter } from 'components';
import { useGetMeetingList } from 'hooks';
import { useRouter } from 'next/navigation';
import useUserStore from 'store/userStore';
import { MeetingListItem } from 'types';

const Main = () => {
  const user = useUserStore((state) => state.user);
  const { data: meetingList } = useGetMeetingList();
  const router = useRouter();
  console.log('user', user);
  console.log('meetingList', meetingList);
  return (
    <DefaultLayout>
      Home
      <div>User Info</div>
      <div>UserId: {user?.userId}</div>
      <div>WorkThroughStep: {user?.workThroughStep}</div>
      <div>nickname: {user?.userDetailResponseDto.nickname}</div>
      <div>MeetingList</div>
      {meetingList &&
        meetingList.items.map((item: MeetingListItem) => (
          <div
            key={item.meetingId}
            style={{ height: '50px', border: '1px solid black' }}
            onClick={() => router.push(`/meeting/${item.meetingId}`)}
          >
            <div>meetingId: {item?.meetingId}</div>
            <div>title: {item?.title}</div>
            <div>
              image:
              <img
                style={{ height: '24px', width: '24px' }}
                src={item?.meetingImage}
              />
            </div>
          </div>
        ))}
      <HomeFooter />
    </DefaultLayout>
  );
};

export default Main;
