import * as React from 'react';
import * as BS from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarCheck,
  faThumbsUp,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import Moment from 'src/utils/moment';

import Thumbnail from '../thumbnail';

import {
  ConfirmSurveyModel,
  DateSurveyModel,
  LikeSurveyModel,
  Props,
} from './interface';
import { StyledSurveyCard } from './style';

export default function SurveyCard({ survey }: Props) {
  const { id, owner, title, description, expireDate } = survey;

  const isExpired = React.useMemo<string>(
    () => Moment.isExpired(expireDate).toString(),
    [expireDate],
  );

  const { icon, iconTitle } = React.useMemo<{
    icon: IconProp;
    iconTitle: string;
  }>(() => {
    if (survey instanceof DateSurveyModel)
      return { icon: faCalendarCheck, iconTitle: '日時アンケート' };
    else if (survey instanceof ConfirmSurveyModel)
      return { icon: faCheck, iconTitle: '確認アンケート' };
    else if (survey instanceof LikeSurveyModel)
      return { icon: faThumbsUp, iconTitle: 'いいねアンケート' };
  }, [survey]);
  return (
    <StyledSurveyCard key={id} expired={isExpired}>
      <FontAwesomeIcon className="card-icon" icon={icon} title={iconTitle} />
      <Thumbnail
        src={owner && owner.image}
        title={owner && owner.name ? owner.name : 'anonymous'}
        size="sm"
        imageProps={{ roundedCircle: true }}
      />
      <BS.Card.Body>
        <BS.Card.Title>{title}</BS.Card.Title>
        <hr />
        <BS.Card.Text>{description}</BS.Card.Text>
      </BS.Card.Body>
      <BS.Card.Footer>
        <BS.Card.Text>
          締切: {Moment.strWithRemain({ date: expireDate, show: 'both' })}
        </BS.Card.Text>
      </BS.Card.Footer>
    </StyledSurveyCard>
  );
}
