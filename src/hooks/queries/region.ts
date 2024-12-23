import { useQuery } from '@tanstack/react-query';
import { getRegionCityAPI, getRegionStateAPI } from 'api/region';
import { CommonResp, RegionRes } from 'types';

/**
 * @summary Region [시,도] 조회
 * @request GET:/api/v1/region
 */
export const useGetRegionState = () => {
  return useQuery<CommonResp<RegionRes[]>>({
    queryKey: ['region'],
    queryFn: () => getRegionStateAPI(),
  });
};

/**
 * @summary Region [시,군,구] 조회
 * @request GET:/api/v1/region/{parentId}
 */
export const useGetRegionCity = (parentId: number) => {
  return useQuery<CommonResp<RegionRes[]>>({
    queryKey: ['region', parentId],
    queryFn: () => getRegionCityAPI(parentId),
    enabled: !!parentId,
  });
};
