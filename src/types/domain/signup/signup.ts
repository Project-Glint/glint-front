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
  gender: (typeof GENDER_RADIOS)[number]['key'];
  birth: {
    year: number;
    month: number;
    date: number;
  };
  height: number;
  weight: string;
  drinking: string;
  smoking: string;
  religion: string;
  residence: string;
  activityArea: string;
  keyword: string | string[];
  goal: string;
  liking: string;
  theoryOfLove: string;
  profile: File[] | null;
}
