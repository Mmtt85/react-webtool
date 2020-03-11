import { fromJS, Record } from 'immutable';

import { UserId } from 'src/types';

export interface Props {
  user: UserCardModel;
}

// types
interface UserType {
  readonly id: UserId;
  name?: string;
  image?: string;
  email?: string;
  etc?: Array<string>;
}

// init records
const init: Record.Factory<UserType> = Record({
  id: '',
  name: '',
  image: '',
  email: '',
  etc: [],
});

// export types and make record objects
export class UserCardModel extends init implements UserType {
  constructor(props: UserType) {
    super(fromJS(props));
  }
}
