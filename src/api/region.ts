import { CommonResp, regionRes } from 'types';
import { httpClient } from './axios';

/**
 * @summary Region [시,도] 조회
 * @request GET:/api/v1/region
 */
export const getRegionStateAPI = async () => {
  const { data } =
    await httpClient.get<CommonResp<regionRes[]>>(`/api/v1/region`);
  return data;
};

/**
 * @summary Region [시,군,구] 조회
 * @request GET:/api/v1/region/{parentId}
 */
export const getRegionCityAPI = async (parentId: number) => {
  const { data } = await httpClient.get<CommonResp<regionRes[]>>(
    `/api/v1/region/${parentId}`
  );
  return data;
};
