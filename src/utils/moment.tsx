import moment from 'moment';
import 'moment/locale/ja';

interface StrWithRemainProps {
  date: Date;
  show?: 'date' | 'remain' | 'both';
}

export default class Moment {
  static strWithRemain = ({ date, show = 'date' }: StrWithRemainProps) => {
    const m = moment(date, null, 'ja');
    if (show === 'both') return `${m.format('lll')} (${m.toNow()})`;
    else if (show === 'date') return m.format('lll');
    else if (show === 'remain') return m.toNow();
  };

  static isExpired = (date: Date) => {
    const m = moment(date, null, 'ja');
    return m.isBefore();
  };
}
