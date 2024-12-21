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

export interface MeetingListItem {
  content: string;
  hashtags: string[];
  meetingId: number;
  meetingImage: string;
  numberOfAttendance: number;
  numberOfFemaleAttendance: number;
  numberOfMaleAttendance: number;
  region: {
    regionId: number;
    name: string;
    parentId: number;
    parentName: string;
  };
  status: 'NONE' | 'OPEN' | 'CLOSE' | string;
  title: string;
  type: 'DOUBLE' | 'TRIPLE' | 'QUADRUPLE' | string;
}

export interface MeetingListRes {
  items: MeetingListItem[];
  totalPages: number;
  totalElements: number;
  isFirst: boolean;
  isLast: boolean;
}
