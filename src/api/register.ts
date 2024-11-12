import { CommonResp, CompanyInfo } from 'types/api/register';
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
