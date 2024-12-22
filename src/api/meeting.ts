import { CommonResp, CreateMeetingReq, MeetingListRes } from 'types';
import { httpClient } from './axios';

const MEETING_API = '/api/v1/meeting';
/**
 * @summary Meeting 생성
 * @request POST:/api/v1/meeting
 */
export const postCreateMeetingAPI = async (payload: CreateMeetingReq) => {
  const formData = new FormData();

  formData.append(
    'meetingCreateRequestDto',
    new Blob([JSON.stringify(payload.meetingCreateRequestDto)], {
      type: 'application/json',
    })
  );
  if (payload.image instanceof File) {
    formData.append('image', payload.image);
  }

  const { data } = await httpClient.post(`${MEETING_API}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
};

/**
 * @summary Meeting 리스트 조회
 * @request GET:/api/v1/meeting/list
 */
export const getMeetingListAPI = async () => {
  const { data } = await httpClient.get<CommonResp<MeetingListRes>>(
    `${MEETING_API}/list?page=1&size=5`
  );

  return data.data;
};
