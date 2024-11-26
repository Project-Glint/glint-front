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

export type CertType = 'ACADEMIC' | 'WORKER';

export interface OccupationReq {
  certType: CertType;
  universityId?: number;
  departmentId?: number;
  companyId?: number;
  occupation?: string;
}
