interface userDetailResponseDto {
  id: number;
  userId: number;
  nickname: string | null;
  gender: string | null;
  birthdate: string | null;
  age: number | null;
  height: number | null;
  representativeProfileImage: string | null;
}

interface UserProfileResponseDto {
  id: number;
  userId: number;
  certType: string;
  occupation: string;
  company: {
    companyId: number | null;
    companyName: string | null;
    companyDomain: string | null;
  };
  university: {
    universityId: number | null;
    universityName: string | null;
    universityDomain: string | null;
  };
  department: {
    departmentId: number | null;
    departmentName: string | null;
  };
  residenceRegion: {
    regionId: number | null;
    name: string | null;
    parentId: number | null;
    parentName: string | null;
  };
  activityRegion: {
    regionId: number | null;
    name: string | null;
    parentId: number | null;
    parentName: string | null;
  };
  bodyType: string | null;
  smokingType: string | null;
  religion: string | null;
  drinkingType: string | null;
  selfIntroduction: {
    selfIntroductionId: number | null;
    lifeGoal: string | null;
    preference: string | null;
    loveStyle: string | null;
  };
  hashtags: string[] | null;
}
export interface UserData {
  userId: number;
  email: string;
  workThroughStep: string;
  userDetailResponseDto: userDetailResponseDto;
  userProfileResponseDto: UserProfileResponseDto;
}
