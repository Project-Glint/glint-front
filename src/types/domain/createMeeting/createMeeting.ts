export interface CreateMeetingForm {
  // 미팅 내용
  title: string;
  description: string;
  // 인원수
  peopleNumber: number;
  // 미팅 희망 지역
  activityRegionName: string;
  activityRegionId: number;
  // 태그
  hashtags?: string[];
  // 대표 사진
  representativeImage?: File | string;
}
