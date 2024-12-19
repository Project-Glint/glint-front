export interface CreateMeetingForm {
  // 미팅 내용
  title: string;
  content: string;
  // 인원수
  type: 'DOUBLE' | 'TRIPLE' | 'QUADRUPLE' | string;
  // 미팅 희망 지역
  regionName: string;
  regionId?: number;
  // 태그
  hashtags?: string[];
  // 대표 사진
  image?: File | string;
  // 친구
  withFriends?: 'Y' | 'N' | null;
  inviteFriends?: string[];
}
