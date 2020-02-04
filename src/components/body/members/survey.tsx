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

import {
  dummyDateSurveys,
  dummyConfirmSurveys,
  dummyLikeSurvey,
} from 'src/dummy-data/surveys';

export default function Survey() {
  const [key, setKey] = React.useState('allSurvey');
  const loginMember = Redux.useSelector(selectLoginAccount);

  const dummyDateSurveyList = List<SurveyModels>(
    dummyDateSurveys.map(dateSurvey => new DateSurveyModel(dateSurvey)),
  );
  const dummyConfirmSurveyList = List<SurveyModels>(
    dummyConfirmSurveys.map(
      confirmSurvey => new ConfirmSurveyModel(confirmSurvey),
    ),
  );
  const dummyLikeSurveyList = List<SurveyModels>(
    dummyLikeSurvey.map(likeSurvey => new LikeSurveyModel(likeSurvey)),
  );

  const allOfSurveyList = dummyDateSurveyList
    .concat(dummyConfirmSurveyList)
    .concat(dummyLikeSurveyList);

  const dummySurveyMyList = allOfSurveyList.filter(
    survey => survey.getIn(['owner', 'id']) === loginMember.getIn(['id']),
  );

  const dummySurveyTargetToMeList = allOfSurveyList.filter(
    survey =>
      survey.getIn(['targetMemberList', 'id']) !== loginMember.getIn(['id']),
  );

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
