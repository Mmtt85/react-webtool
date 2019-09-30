import * as React from 'react';
import * as Redux from 'react-redux';
import * as BS from 'react-bootstrap';
import { List } from 'immutable';

import {
  ConfirmSurveyModel,
  DateSurveyModel,
  LikeSurveyModel,
  SurveyModels,
} from 'src/components/models/survey-card/interface';
import SurveyCard from 'src/components/models/survey-card';
import { selectLoginAccount } from 'src/redux/selector';
import { UserCardModel } from 'src/components/models/user-card/interface';

export default function Survey() {
  const [key, setKey] = React.useState('allSurvey');
  const loginMember = Redux.useSelector(selectLoginAccount);

  const [dummySurveyMyList, dummySurveyTargetToMeList] = React.useMemo<
    Array<List<SurveyModels>>
  >(() => {
    const dummySurveyList = List([
      new DateSurveyModel({
        id: 'id1',
        owner: null,
        title: '飲み会',
        targetMemberList: [
          loginMember,
          loginMember.set('id', 'id2'),
          loginMember.set('id', 'id3'),
          loginMember.set('id', 'id4'),
        ],
        description: '日時を選んでください。',
      }),
      new ConfirmSurveyModel({
        id: 'id2',
        owner: loginMember,
        title: '映画上映会',
        targetMemberList: [loginMember],
        description: 'X月X日に参加可否を投票してください。',
        expireDate: new Date('2019-09-26 14:00:00'),
      }),
      new LikeSurveyModel({
        id: 'id3',
        owner: new UserCardModel({}),
        title: 'フレックスタイム制導入に対するアンケート',
        targetMemberList: [loginMember],
        description: '賛成する方はいいね！を押してください。',
      }),
    ]);
    const dummySurveyMyList = dummySurveyList.filter(survey =>
      loginMember.equals(survey.owner),
    );
    const dummySurveyTargetToMeList = dummySurveyList.filter(
      survey =>
        survey.targetMemberList.includes(loginMember) ||
        loginMember.equals(survey.owner),
    );
    return [dummySurveyMyList, dummySurveyTargetToMeList];
  }, [loginMember]);

  return (
    <BS.Tabs id="survey-tab" activeKey={key} onSelect={k => setKey(k)}>
      <BS.Tab eventKey="allSurvey" title="All Survey">
        <BS.CardColumns className="p-2">
          {dummySurveyTargetToMeList.map(survey => (
            <SurveyCard key={survey.id} survey={survey} />
          ))}
        </BS.CardColumns>
      </BS.Tab>
      <BS.Tab eventKey="mySurvey" title="My Survey">
        <BS.CardColumns className="p-2">
          {dummySurveyMyList.map(survey => (
            <SurveyCard key={survey.id} survey={survey} />
          ))}
        </BS.CardColumns>
      </BS.Tab>
    </BS.Tabs>
  );
}
