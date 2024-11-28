import { GENDER_RADIOS } from 'assets';

export interface SignupForm {
  companyName: string;
  job: string;
  university: string;
  major: string;
  email: string;
  authCode: number;
  authImage: File | string | null;
  nickname: string;
  gender: (typeof GENDER_RADIOS)[number]['key'] | string;
  year: number | string;
  month: number | string;
  day: number | string;
  height: number;
  bodyType: string;
  drinkingType: string;
  smokingType: string;
  religion: string;
  residenceRegion: string;
  activityRegion: string;
  hashtags: string | string[];
  lifeGoal: string;
  preference: string;
  loveStyle: string;
  profile: File[] | null;
}
