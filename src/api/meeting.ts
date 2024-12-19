import { CreateMeetingReq } from 'types';
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
