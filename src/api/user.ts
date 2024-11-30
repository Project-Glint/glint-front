import { httpClient } from './axios';

/**
 * @summary User 관련 모든 정보 (UserDetail, UserProfile) 조회
 * @request GET:/api/v1/user/{userId}/info
 */
export const getUserInfo = async (userId: number) => {
  const { data } = await httpClient.get(`/api/v1/user/${userId}/info`);

  return data;
};
