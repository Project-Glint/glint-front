import {
  CommonResp,
  CompanyInfo,
  OccupationReq,
  WorkThroughStep,
} from 'types/api/signup';
import { httpClient } from './axios';

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
  const response = await httpClient.post(
    `/api/v1/work-through/occupation`,
    payload
  );
  return response.data;
}
