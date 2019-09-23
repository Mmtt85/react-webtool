import { createActions } from 'redux-actions';

import * as Types from 'src/redux';
import { RecMember } from 'src/models/records/member';

export const { login, logout } = createActions({
  [Types.LOGIN]: (payload: RecMember) => payload,
  [Types.LOGOUT]: () => null,
});
