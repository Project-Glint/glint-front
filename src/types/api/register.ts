export interface CommonResp<T> {
  status: string;
  code: number;
  data: T;
}

export interface CompanyInfo {
  companyId: number;
  companyName: string;
}

export interface WorkThroughStep {
  id: number;
  email: string;
  workThroughStep: string;
}
