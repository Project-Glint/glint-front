import { useMutation, useQuery } from '@tanstack/react-query';
import { getMeetingListAPI, postCreateMeetingAPI } from 'api/meeting';
import { CreateMeetingReq, MeetingListRes } from 'types';

/**
 * @summary Meeting 생성
 * @request POST:/api/v1/meeting
 */
export const usePostCreateMeeting = () => {
  return useMutation({
    mutationFn: (req: CreateMeetingReq) => postCreateMeetingAPI(req),
  });
};

/**
 * @summary Meeting 리스트 조회
 * @request GET:/api/v1/meeting/list
 */
export const useGetMeetingList = () => {
  return useQuery<MeetingListRes>({
    queryKey: ['meetingList'],
    queryFn: () => getMeetingListAPI(),
  });
};
