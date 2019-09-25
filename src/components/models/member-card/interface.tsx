import { Record } from 'immutable';
import { MemberId } from '../../../records';

export interface Props {
  member: RecMember;
}

// types
interface MemberType {
  readonly id: MemberId;
  name?: string;
  image?: string;
  email?: string;
  etc?: string;
}

// init records
const init: Record.Factory<MemberType> = Record({
  id: '',
  name: '',
  image: '',
  email: '',
  etc: '',
});

// export types and make record objects
export interface RecMember extends Record<MemberType>, MemberType {}
export class MemberCardModel extends init implements MemberType {
  constructor(props) {
    super(props);
  }
}
