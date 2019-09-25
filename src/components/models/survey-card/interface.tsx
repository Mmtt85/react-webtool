import { fromJS, List, Record } from 'immutable';

import { Id, SurveyId } from 'src/types';
import { RecMember } from 'src/components/models/member-card/interface';

export interface Props {
  survey: RecConfirmSurvey | RecDateSurvey | RecLikeSurvey;
}

// types
export interface BaseSurveyType {
  readonly id: SurveyId;
  readonly owner: RecMember;
  targetMemberList: List<RecMember>;
  image: string;
  title: string;
  description: string;
  readonly createDate: Date;
  expireDate: Date;
}

interface SurveyType {
  member: RecMember;
  description?: string;
}

export interface DateSurveyType extends BaseSurveyType {
  dateList: List<{
    id: Id;
    date: Date;
    allowList: List<SurveyType>;
    disAllowList: List<SurveyType>;
    notYetList: List<SurveyType>;
  }>;
}

interface ConfirmSurveyType extends BaseSurveyType {
  allowList: List<SurveyType>;
  disAllowList: List<SurveyType>;
  notYetList: List<SurveyType>;
}

interface LikeSurveyType extends BaseSurveyType {
  likeList: List<SurveyType>;
}

// init records
const baseInit: Record.Factory<BaseSurveyType> = Record({
  id: '',
  owner: null,
  targetMemberList: List(),
  image: '',
  title: '',
  description: '',
  createDate: new Date(),
  expireDate: new Date(null),
});

const dateInit: Record.Factory<DateSurveyType> = Record({
  ...baseInit().toJS(),
  dateList: List(),
});

const confirmInit: Record.Factory<ConfirmSurveyType> = Record({
  ...baseInit().toJS(),
  allowList: List(),
  disAllowList: List(),
  notYetList: List(),
});

const likeInit: Record.Factory<LikeSurveyType> = Record({
  ...baseInit().toJS(),
  likeList: List(),
});

// export types and make record objects
export interface RecDateSurvey extends Record<DateSurveyType>, DateSurveyType {}
export class DateSurveyModel extends dateInit implements DateSurveyType {
  constructor(props) {
    super(fromJS(props));
  }
}

export interface RecConfirmSurvey
  extends Record<ConfirmSurveyType>,
    ConfirmSurveyType {}
export class ConfirmSurveyModel extends confirmInit
  implements ConfirmSurveyType {
  constructor(props) {
    super(fromJS(props));
  }
}

export interface RecLikeSurvey extends Record<LikeSurveyType>, LikeSurveyType {}
export class LikeSurveyModel extends likeInit implements LikeSurveyType {
  constructor(props) {
    super(fromJS(props));
  }
}

export type RecSurvey = RecDateSurvey | RecConfirmSurvey | RecLikeSurvey;
