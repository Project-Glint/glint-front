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

export interface NicknameReq {
  nickname: string;
}

export interface GenderReq {
  gender: 'MALE' | 'FEMALE' | string;
}

export interface BirthdateReq {
  // 1996-01-01
  birthdate: string;
}

export interface HeightReq {
  height: number;
}

export interface BodyTypeReq {
  bodyType:
    | 'SLENDER'
    | 'SLIM_ATHLETIC'
    | 'AVERAGE'
    | 'SLIM_MUSCULAR'
    | 'MUSCULAR'
    | 'CHUBBY'
    | string;
}

export interface SmokingDrinkingTypeReq {
  smokingType: 'SMOKER' | 'NON_SMOKER' | string;
  drinkingType:
    | 'NON_DRINKER'
    | 'OCCASIONAL'
    | 'ENJOYS_DRINKING'
    | 'LOVES_DRINKING'
    | string;
}

export interface ReligionReq {
  religion: 'NONE' | 'PROTESTANT' | 'CATHOLIC' | 'BUDDHIST' | 'OTHER' | string;
}

export interface RegionReq {
  residenceRegionId: number;
  residenceRegionName: string;
  activityRegionId: number;
  activityRegionName: string;
}

export interface HashtagsReq {
  hashtags: string[];
}

export interface SelfIntroduceReq {
  lifeGoal: string;
  preference: string;
  loveStyle: string;
}

export interface ProfileReq {
  images: File[] | string[];
  representativeImage: File | string;
}
