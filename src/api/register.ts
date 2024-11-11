import { httpClient } from './axios';

/**
 * @summary 기업명 이름 검색
 * @request GET:/api/v1/company/name
 */
export async function searchCompanyName(companyName: string) {
  const response = await httpClient.get(`/api/v1/company/name`, {
    params: { companyName },
  });
  return response.data;
}
