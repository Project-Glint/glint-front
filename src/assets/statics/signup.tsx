import { UserData } from 'types';

export const signupTitle = [
  {
    id: 1,
    title: (
      <>
        직업 또는 학교 정보를
        <br />
        입력해 주세요.
      </>
    ),
  },
  {
    id: 2,
    title: (
      <>
        이메일 또는 이미지로
        <br />
        인증해 주세요.
      </>
    ),
    subTitle: <>전문직, 학과 인증은 이미지 인증을 이용해 주세요.</>,
  },
  {
    id: 3,
    title: (
      <>
        사용할
        <br />
        닉네임을 입력해 주세요.
      </>
    ),
  },
  {
    id: 4,
    title: (
      <>
        성별을
        <br />
        알려주세요.
      </>
    ),
  },
  {
    id: 5,
    title: (
      <>
        생년월일을
        <br />
        입력해 주세요.
      </>
    ),
    subTitle: <>프로필에는 만 나이로 보여요.</>,
  },
  {
    id: 6,
    title: (
      <>
        키를
        <br />
        입력해 주세요.
      </>
    ),
  },
  {
    id: 7,
    title: (
      <>
        체형을
        <br />
        선택해 주세요.
      </>
    ),
  },
  {
    id: 8,
    title: (
      <>
        음주 / 흡연 여부를
        <br />
        선택해 주세요.
      </>
    ),
  },
  {
    id: 9,
    title: (
      <>
        종교를
        <br />
        선택해 주세요.
      </>
    ),
  },
  {
    id: 10,
    title: (
      <>
        지역을
        <br />
        선택해 주세요.
      </>
    ),
  },
  {
    id: 11,
    title: (
      <>
        나를 표현하는 키워드를
        <br />
        입력해 주세요.
      </>
    ),
    subTitle: <>직업, 성격, MBTI등 키워드로 자신을 표현하세요.</>,
  },
  {
    id: 12,
    title: <>자기소개를 작성해주세요.</>,
    subTitle: <>자세하고 솔직한 글일 수록 호감도가 높아져요.</>,
  },
  {
    id: 13,
    title: (
      <>
        프로필 사진을
        <br />
        등록해 주세요.
      </>
    ),
    subTitle: (
      <>
        이목구비가 잘 보이는 얼굴 사진이나
        <br />
        전체적인 분위기가 잘 나타나는 사진을 올려주세요.
      </>
    ),
  },
];

export const stepList = [
  'OCCUPATION',
  'CERTIFY',
  'NICKNAME',
  'GENDER',
  'BIRTHDATE',
  'HEIGHT',
  'BODY_TYPE',
  'DRINKING_SMOKING_TYPE',
  'RELIGION',
  'REGION',
  'HASHTAG',
  'SELF_INTRODUCTION',
  'PROFILE_IMAGE',
  'COMPLETE',
];

export const jobTabList = [
  { key: 'worker', label: '직장인' },
  { key: 'student', label: '대학생' },
];

export const authTabList = [
  { key: 'email', label: '이메일 인증' },
  { key: 'image', label: '이미지 인증' },
];

export const bodyTypeList = [
  { key: 'SLENDER', label: '마른' },
  { key: 'SLIM_ATHLETIC', label: '슬림탄탄' },
  { key: 'AVERAGE', label: '보통' },
  { key: 'SLIM_MUSCULAR', label: '살짝 근육' },
  { key: 'MUSCULAR', label: '근육질' },
  { key: 'CHUBBY', label: '통통' },
];

export const smokingTypeList = [
  { key: 'SMOKER', label: '흡연' },
  { key: 'NON_SMOKER', label: '비흡연' },
];

export const drinkingTypeList = [
  { key: 'NON_DRINKER', label: '전혀 마시지 않음' },
  { key: 'OCCASIONAL', label: '가끔 마심' },
  { key: 'ENJOYS_DRINKING', label: '종종 마시는 편' },
  { key: 'LOVES_DRINKING', label: '애주가' },
];

export const religionList = [
  { key: 'NONE', label: '무교' },
  { key: 'PROTESTANT', label: '기독교' },
  { key: 'CATHOLIC', label: '천주교' },
  { key: 'BUDDHIST', label: '불교' },
  { key: 'OTHER', label: '기타' },
];

export const getSignupDefaultValues = (user: UserData | null) => {
  const defaultValue = {
    // OCCUPATION
    certType: '',
    universityId: 0,
    departmentId: 0,
    companyId: 0,
    occupation: '',
    // CERTIFY
    email: '',
    code: '',
    // NICKNAME
    nickname: '',
    // GENDER
    gender: '',
    // BIRTHDATE
    birthdate: '',
    // HEIGHT
    height: 0,
    // BODY_TYPE
    bodyType: '',
    // DRINKING_SMOKING_TYPE
    smokingType: '',
    drinkingType: '',
    // RELIGION
    religion: '',
    // REGION
    residenceRegionId: 0,
    residenceRegionName: '',
    activityRegionId: 0,
    activityRegionName: '',
    // HASHTAG
    hashtags: [],
    // SELF_INTRODUCTION
    lifeGoal: '',
    preference: '',
    loveStyle: '',
    // PROFILE_IMAGE
  };

  if (!user) {
    return defaultValue;
  }
  const birthdate = user?.userDetailResponseDto.birthdate ?? '';

  let year = '';
  let month = '';
  let day = '';
  if (birthdate) {
    [year, month, day] = birthdate.split('-');
  }

  return {
    ...defaultValue,
    certType: user?.userProfileResponseDto.certType || '',
    companyName: user?.userProfileResponseDto.company.companyName || '',
    universityName:
      user?.userProfileResponseDto.university.universityName || '',
    departmentName:
      user?.userProfileResponseDto.department.departmentName || '',
    occupation: user?.userProfileResponseDto.occupation || '',
    email: user?.email || '',
    // auth images
    nickname: user?.userDetailResponseDto.nickname || '',
    gender: user?.userDetailResponseDto.gender || '',
    year: year || '',
    month: month || '',
    day: day || '',
    height: user?.userDetailResponseDto.height || 0,
    bodyType: user?.userProfileResponseDto.bodyType || '',
    smokingType: user?.userProfileResponseDto.smokingType || '',
    drinkingType: user?.userProfileResponseDto.drinkingType || '',
    religion: user?.userProfileResponseDto.religion || '',
    residenceRegionName:
      user?.userProfileResponseDto.residenceRegion?.parentName +
        ' ' +
        user?.userProfileResponseDto.residenceRegion?.name || '',
    residenceRegionId:
      user?.userProfileResponseDto.residenceRegion.regionId || 0,
    activityRegionName:
      user?.userProfileResponseDto.activityRegion.parentName +
        ' ' +
        user?.userProfileResponseDto.activityRegion.name || '',
    activityRegionId: user?.userProfileResponseDto.activityRegion.regionId || 0,
    hashtags: user?.userProfileResponseDto.hashtags || [],
    lifeGoal: user?.userProfileResponseDto.selfIntroduction?.lifeGoal || '',
    preference: user?.userProfileResponseDto.selfIntroduction?.preference || '',
    loveStyle: user?.userProfileResponseDto.selfIntroduction?.loveStyle || '',
    representativeProfileImage:
      user?.userDetailResponseDto.representativeProfileImage || '',
  };
};
