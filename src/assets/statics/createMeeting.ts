export const createMeetingDefaultValues = {
  title: '',
  content: '',
  type: 'DOUBLE',
  regionName: '',
  regionId: 0,
  hashtags: [],
  image: '',
  // inviteFriends: [],
};

export const peopleNumberList = [
  { key: 'DOUBLE', label: '2:2' },
  { key: 'TRIPLE', label: '3:3' },
  { key: 'QUADRUPLE', label: '4:4' },
];

export const inviteFriendsRadioList = [
  {
    key: 'Y',
    label: '있어요.',
    desc: '함께할 친구가 있어요. 지금 바로 초대해볼게요.',
  },
  {
    key: 'N',
    label: '없어요.',
    desc: '함께할 친구는 없지만, 미팅을 바로 시작할게요.',
  },
];
