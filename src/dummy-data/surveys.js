export const dummyDateSurveys = [
  {
    id: 'id1',
    owner: null,
    title: '飲み会',
    targetMemberList: [{ id: 'admin' }, { id: 'user1' }],
    description: '日時を選んでください。',
  },
];
export const dummyConfirmSurveys = [
  {
    id: 'id2',
    owner: { id: 'admin' },
    title: '映画上映会',
    targetMemberList: [{ id: 'user1' }],
    description: 'X月X日に参加可否を投票してください。',
    expireDate: new Date('2019-09-26 14:00:00'),
  },
];

export const dummyLikeSurvey = [
  {
    id: 'id3',
    owner: { id: 'user1' },
    title: 'フレックスタイム制導入に対するアンケート',
    targetMemberList: [{ id: 'user1' }, { id: 'user2' }],
    description: '賛成する方はいいね！を押してください。',
  },
];
