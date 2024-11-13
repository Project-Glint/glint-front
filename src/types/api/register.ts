export interface CommonResp<T> {
  status: string;
  code: number;
  data: T;
}

export interface CompanyInfo {
  companyId: number;
  companyName: string;
}
