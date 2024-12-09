export const defaultValues = {
  title: '',
  description: '',
  peopleNumber: 2,
  activityRegionName: '',
  activityRegionId: 0,
  hashtags: [],
  representativeImage: '',
  inviteFriends: [],
};

export const peopleNumberList = [
  { key: '2', label: '2:2' },
  { key: '3', label: '3:3' },
  { key: '4', label: '4:4' },
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
