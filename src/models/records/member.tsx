import { Record, RecordOf } from 'immutable';

interface MemberType {
  id: string;
  name?: string;
  img?: string;
  email?: string;
  etc?: string;
}

const init: RecordOf<MemberType> = Record({
  id: '',
  name: '',
  img: '',
  email: '',
  etc: '',
})();

export const makeMember = (values?: MemberType) => init.merge(values);
export interface RecMember extends Record<MemberType>, MemberType {}
