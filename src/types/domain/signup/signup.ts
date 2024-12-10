export interface SignupForm {
  // OCCUPATION
  certType: 'ACADEMIC' | 'WORKER' | string;
  companyName: string;
  universityName: string;
  departmentName: string;
  occupation: string;
  // CERTIFY
  email: string;
  authCode: string;
  authImage: File | string;
  // NICKNAME
  nickname: string;
  // GENDER
  gender: 'MALE' | 'FEMALE' | string;
  // BIRTHDATE
  year: number | string;
  month: number | string;
  day: number | string;
  // HEIGHT
  height: number;
  // BODY_TYPE
  bodyType:
    | 'SLENDER'
    | 'SLIM_ATHLETIC'
    | 'AVERAGE'
    | 'SLIM_MUSCULAR'
    | 'MUSCULAR'
    | 'CHUBBY'
    | string;
  // DRINKING_SMOKING_TYPE
  smokingType: 'SMOKER' | 'NON_SMOKER' | string;
  drinkingType:
    | 'NON_DRINKER'
    | 'OCCASIONAL'
    | 'ENJOYS_DRINKING'
    | 'LOVES_DRINKING'
    | string;
  // RELIGION
  religion: 'NONE' | 'PROTESTANT' | 'CATHOLIC' | 'BUDDHIST' | 'OTHER' | string;
  // REGION
  residenceRegionName: string;
  residenceRegionId: number; // 추가
  activityRegionName: string;
  activityRegionId: number; // 추가
  // HASHTAG
  hashtags: string[];
  // SELF_INTRODUCTION
  lifeGoal: string;
  preference: string;
  loveStyle: string;
  // PROFILE_IMAGE
  representativeImage: File | string;
  images: File[] | string[];
}
