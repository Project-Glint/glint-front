import { useMutation } from '@tanstack/react-query';
import { postCreateMeetingAPI } from 'api/meeting';
import { CreateMeetingReq } from 'types';

/**
 * @summary Meeting 생성
 * @request POST:/api/v1/meeting
 */
export const usePostCreateMeeting = () => {
  return useMutation({
    mutationFn: (req: CreateMeetingReq) => postCreateMeetingAPI(req),
  });
};
