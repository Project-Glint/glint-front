export interface MeetingDetailForm {
  // 참가자 flow - 친구 초대
  withFriends?: 'Y' | 'N' | null;
  inviteFriends?: string[];
}
