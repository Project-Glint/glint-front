import {
  BirthdateReq,
  BodyTypeReq,
  CertifyCodeReq,
  CertifyImageReq,
  CommonResp,
  CompanyResp,
  DepartmentResp,
  GenderReq,
  HashtagsReq,
  HeightReq,
  NicknameReq,
  OccupationReq,
  ProfileReq,
  RegionReq,
  ReligionReq,
  SelfIntroduceReq,
  SendEmailReq,
  SmokingDrinkingTypeReq,
  UniversityResp,
  WorkThroughStepResp,
} from 'types/api/signup';
import { httpClient } from './axios';

const SIGNUP_API = '/api/v1/work-through';

/**
 * @summary 유저 work-through step 조회
 * @request GET:/api/v1/user/work-through/step
 */
export async function getWorkThroughStepAPI() {
  const { data } = await httpClient.get<CommonResp<WorkThroughStepResp>>(
    `/api/v1/user/work-through-step`
  );
  return data;
}

/**
 * @summary 기업명 이름 검색
 * @request GET:/api/v1/company/name
 */
export async function getCompanyNameAPI(companyName: string) {
  const { data } = await httpClient.get<CommonResp<CompanyResp[]>>(
    `/api/v1/company/name`,
    {
      params: { companyName },
    }
  );
  return data;
}

/**
 * @summary 기업명 id 검색
 * @request GET:/api/v1/company/:id
 */
export async function getCompanyIdAPI(companyId: number) {
  const { data } = await httpClient.get<CommonResp<CompanyResp>>(
    `/api/v1/company/${companyId}`
  );
  return data;
}

/**
 * @summary 학교명 이름 검색
 * @request GET:/api/v1/university/name
 */
export async function getUniversityNameAPI(universityName: string) {
  const { data } = await httpClient.get<CommonResp<UniversityResp[]>>(
    `/api/v1/university/name`,
    { params: { universityName } }
  );
  return data;
}

/**
 * @summary 학교명 id 검색
 * @request GET:/api/v1/university/:id
 */
export async function getUniversityIdAPI(universityId: number) {
  const { data } = await httpClient.get<CommonResp<UniversityResp>>(
    `/api/v1/university/${universityId}`
  );
  return data;
}

/**
 * @summary 학과명 검색
 * @request GET:/api/v1/department/name
 */
export async function getDepartmentNameAPI(departmentName: string) {
  const { data } = await httpClient.get<CommonResp<DepartmentResp[]>>(
    `/api/v1/department/name`,
    { params: { departmentName } }
  );
  return data;
}

/**
 * @summary 학과 id 검색
 * @request GET:/api/v1/department/:id
 */
export async function getDepartmentIdAPI(departmentId: number) {
  const { data } = await httpClient.get<CommonResp<UniversityResp>>(
    `/api/v1/department/${departmentId}`
  );
  return data;
}

/**
 * @summary 유저 Occupation 저장
 * @request POST:/api/v1/work-through/occupation
 */
export async function postOccupationAPI(payload: OccupationReq) {
  const { data } = await httpClient.post(`${SIGNUP_API}/occupation`, payload);

  return data;
}

/**
 * @summary 인증 이메일 발송
 * @request POST:/api/v1/work-through/certify
 */
export async function postSendEmail(payload: SendEmailReq) {
  const { data } = await httpClient.post(`${SIGNUP_API}/certify`, payload);
  return data;
}

/**
 * @summary 인증 이메일 코드 확인
 * @request POST:/api/v1/work-through/certify/code
 */
export async function postCertifyCode(payload: CertifyCodeReq) {
  const { data } = await httpClient.post(`${SIGNUP_API}/certify/code`, payload);
  return data;
}

/**
 * @summary 인증 이미지 전송
 * @request POST:/api/v1/work-through/certify/image
 */
export async function postCertifyImage(payload: CertifyImageReq) {
  const formData = new FormData();
  formData.append('certifyImage', payload.certifyImage);

  const { data } = await httpClient.post(
    `${SIGNUP_API}/certify/image`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return data;
}

/**
 * @summary 유저 nickname 저장
 * @request POST:/api/v1/work-through/nickname
 */
export const postNicknameAPI = async (payload: NicknameReq) => {
  const { data } = await httpClient.post(`${SIGNUP_API}/nickname`, payload);

  return data;
};

/**
 * @summary 유저 gender 저장
 * @request POST:/api/v1/work-through/gender
 */
export const postGenderAPI = async (payload: GenderReq) => {
  const { data } = await httpClient.post(`${SIGNUP_API}/gender`, payload);

  return data;
};

/**
 * @summary 유저 birthdate 저장
 * @request POST:/api/v1/work-through/birthdate
 */
export const postBirthdateAPI = async (payload: BirthdateReq) => {
  const { data } = await httpClient.post(`${SIGNUP_API}/birthdate`, payload);

  return data;
};

/**
 * @summary 유저 height 저장
 * @request POST:/api/v1/work-through/height
 */
export const postHeightAPI = async (payload: HeightReq) => {
  const { data } = await httpClient.post(`${SIGNUP_API}/height`, payload);

  return data;
};

/**
 * @summary 유저 body-type 저장
 * @request POST:/api/v1/work-through/body-type
 */
export const postBodyTypeAPI = async (payload: BodyTypeReq) => {
  const { data } = await httpClient.post(`${SIGNUP_API}/body-type`, payload);

  return data;
};

/**
 * @summary 유저 SmokingType & DrinkingType 저장
 * @request POST:/api/v1/work-through/smoking-drinking-type
 */
export const postSmokingDrinkingTypeAPI = async (
  payload: SmokingDrinkingTypeReq
) => {
  const { data } = await httpClient.post(
    `${SIGNUP_API}/smoking-drinking-type`,
    payload
  );

  return data;
};

/**
 * @summary 유저 Religion 저장
 * @request POST:/api/v1/work-through/religion
 */
export const postReligionAPI = async (payload: ReligionReq) => {
  const { data } = await httpClient.post(`${SIGNUP_API}/religion`, payload);

  return data;
};

/**
 * @summary 유저 region 저장
 * @request POST:/api/v1/work-through/region
 */
export const postRegionAPI = async (payload: RegionReq) => {
  const { data } = await httpClient.post(`${SIGNUP_API}/region`, payload);

  return data;
};

/**
 * @summary 유저 hashtags 저장
 * @request POST:/api/v1/work-through/hashtags
 */
export const postHashtagsAPI = async (payload: HashtagsReq) => {
  const { data } = await httpClient.post(`${SIGNUP_API}/hashtags`, payload);

  return data;
};

/**
 * @summary 유저 selfIntroduce 저장
 * @request POST:/api/v1/work-through/self-introduction
 */
export const postSelfIntroduceAPI = async (payload: SelfIntroduceReq) => {
  const { data } = await httpClient.post(
    `${SIGNUP_API}/self-introduction`,
    payload
  );

  return data;
};

/**
 * @summary 유저 Profile 저장
 * @request POST:/api/v1/work-through/images/profile
 */
export const postProfileImageAPI = async ({
  images,
  representativeImage,
}: ProfileReq) => {
  const formData = new FormData();

  images.forEach((image) => {
    formData.append('images', image);
  });

  formData.append('representativeImage', representativeImage);

  const { data } = await httpClient.post(
    `${SIGNUP_API}/images/profile`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  return data;
};
