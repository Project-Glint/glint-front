import { useMutation } from '@tanstack/react-query';
import {
  postBirthdateAPI,
  postBodyTypeAPI,
  postGenderAPI,
  postHeightAPI,
  postNicknameAPI,
  postRegionAPI,
  postReligionAPI,
  postSmokingDrinkingTypeAPI,
  saveOccupation,
  searchCompanyId,
  searchCompanyName,
} from 'api/signup';
import {
  BirthdateReq,
  BodyTypeReq,
  GenderReq,
  HeightReq,
  NicknameReq,
  RegionReq,
  ReligionReq,
  SmokingDrinkingTypeReq,
} from 'types';

/**
 * @summary 기업명 이름 검색
 * @request GET:/api/v1/company/name
 */
export function useSearchCompanyName() {
  return useMutation({
    mutationFn: searchCompanyName,
  });
}

/**
 * @summary 기업명 id 검색
 * @request GET:/api/v1/company/:id
 */
export function useSearchCompanyId() {
  return useMutation({
    mutationFn: searchCompanyId,
  });
}

/**
 * @summary 유저 Occupation 저장
 * @request POST:/api/v1/work-through/occupation
 */
export function useSaveOccupation() {
  return useMutation({
    mutationFn: saveOccupation,
  });
}

/**
 * @summary 유저 nickname 저장
 * @request POST:/api/v1/work-through/nickname
 */
export const usePostNickname = () => {
  return useMutation({
    mutationFn: (req: NicknameReq) => postNicknameAPI(req),
  });
};

/**
 * @summary 유저 gender 저장
 * @request POST:/api/v1/work-through/gender
 */
export const usePostGender = () => {
  return useMutation({
    mutationFn: (req: GenderReq) => postGenderAPI(req),
  });
};

/**
 * @summary 유저 birthdate 저장
 * @request POST:/api/v1/work-through/birthdate
 */
export const usePostBirthdate = () => {
  return useMutation({
    mutationFn: (req: BirthdateReq) => postBirthdateAPI(req),
  });
};

/**
 * @summary 유저 height 저장
 * @request POST:/api/v1/work-through/height
 */
export const usePostHeight = () => {
  return useMutation({
    mutationFn: (req: HeightReq) => postHeightAPI(req),
  });
};

/**
 * @summary 유저 body-type 저장
 * @request POST:/api/v1/work-through/body-type
 */
export const usePostBodyType = () => {
  return useMutation({
    mutationFn: (req: BodyTypeReq) => postBodyTypeAPI(req),
  });
};

/**
 * @summary 유저 SmokingType & DrinkingType 저장
 * @request POST:/api/v1/work-through/smoking-drinking-type
 */
export const usePostSmokingDrinkingType = () => {
  return useMutation({
    mutationFn: (req: SmokingDrinkingTypeReq) =>
      postSmokingDrinkingTypeAPI(req),
  });
};

/**
 * @summary 유저 Religion 저장
 * @request POST:/api/v1/work-through/religion
 */
export const usePostReligion = () => {
  return useMutation({
    mutationFn: (req: ReligionReq) => postReligionAPI(req),
  });
};

/**
 * @summary 유저 region 저장
 * @request POST:/api/v1/work-through/region
 */
export const usePostRegion = () => {
  return useMutation({
    mutationFn: (req: RegionReq) => postRegionAPI(req),
  });
};
