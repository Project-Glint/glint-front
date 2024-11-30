import {
  BirthdateReq,
  BodyTypeReq,
  CommonResp,
  CompanyInfo,
  GenderReq,
  HeightReq,
  NicknameReq,
  OccupationReq,
  ReligionReq,
  SmokingDrinkingTypeReq,
  WorkThroughStep,
} from 'types/api/signup';
import { httpClient } from './axios';

const SIGNUP_API = '/api/v1/work-through';

/**
 * @summary 기업명 이름 검색
 * @request GET:/api/v1/company/name
 */
export async function searchCompanyName(companyName: string) {
  const response = await httpClient.get<CommonResp<CompanyInfo[]>>(
    `/api/v1/company/name`,
    {
      params: { companyName },
    }
  );
  return response.data;
}

/**
 * @summary 기업명 id 검색
 * @request GET:/api/v1/company/:id
 */
export async function searchCompanyId(companyId: number) {
  const response = await httpClient.get<CommonResp<CompanyInfo>>(
    `/api/v1/company/${companyId}`
  );
  return response.data;
}

/**
 * @summary 유저 work-through step 조회
 * @request GET:/api/v1/user/work-through/step
 */
export async function getWorkThroughStep() {
  const response = await httpClient.get<CommonResp<WorkThroughStep>>(
    `/api/v1/user/work-through-step`
  );
  return response.data;
}

/**
 * @summary 유저 Occupation 저장
 * @request POST:/api/v1/work-through/occupation
 */
export async function saveOccupation(payload: OccupationReq) {
  const response = await httpClient.post(`${SIGNUP_API}/occupation`, payload);
  return response.data;
}

/**
 * @summary 유저 nickname 저장
 * @request POST:/api/v1/work-through/nickname
 */
export const postNicknameAPI = async (req: NicknameReq) => {
  const { data } = await httpClient.post(`${SIGNUP_API}/nickname`, req);

  return data;
};

/**
 * @summary 유저 gender 저장
 * @request POST:/api/v1/work-through/gender
 */
export const postGenderAPI = async (req: GenderReq) => {
  const { data } = await httpClient.post(`${SIGNUP_API}/gender`, req);

  return data;
};

/**
 * @summary 유저 birthdate 저장
 * @request POST:/api/v1/work-through/birthdate
 */
export const postBirthdateAPI = async (req: BirthdateReq) => {
  const { data } = await httpClient.post(`${SIGNUP_API}/birthdate`, req);

  return data;
};

/**
 * @summary 유저 height 저장
 * @request POST:/api/v1/work-through/height
 */
export const postHeightAPI = async (req: HeightReq) => {
  const { data } = await httpClient.post(`${SIGNUP_API}/height`, req);

  return data;
};

/**
 * @summary 유저 body-type 저장
 * @request POST:/api/v1/work-through/body-type
 */
export const postBodyTypeAPI = async (req: BodyTypeReq) => {
  const { data } = await httpClient.post(`${SIGNUP_API}/body-type`, req);

  return data;
};

/**
 * @summary 유저 SmokingType & DrinkingType 저장
 * @request POST:/api/v1/work-through/smoking-drinking-type
 */
export const postSmokingDrinkingTypeAPI = async (
  req: SmokingDrinkingTypeReq
) => {
  const { data } = await httpClient.post(
    `${SIGNUP_API}/smoking-drinking-type`,
    req
  );

  return data;
};

/**
 * @summary 유저 Religion 저장
 * @request POST:/api/v1/work-through/religion
 */
export const postReligionAPI = async (req: ReligionReq) => {
  const { data } = await httpClient.post(`${SIGNUP_API}/religion`, req);

  return data;
};
