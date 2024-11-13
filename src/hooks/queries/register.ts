import { useMutation } from '@tanstack/react-query';
import { searchCompanyId, searchCompanyName } from 'api/register';

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
