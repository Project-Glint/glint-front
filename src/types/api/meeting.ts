export interface CreateMeetingReq {
  meetingCreateRequestDto: {
    title: string;
    content: string;
    type: 'DOUBLE' | 'TRIPLE' | 'QUADRUPLE' | string;
    regionId?: number;
    hashtags?: string[];
  };
  image?: File | string;
}
