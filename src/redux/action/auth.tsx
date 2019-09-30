import { createActions } from 'redux-actions';

import * as Types from 'src/redux';
import { UserCardModel } from 'src/components/models/user-card/interface';

export const { login, logout } = createActions({
  [Types.LOGIN]: (payload: UserCardModel) => payload,
  [Types.LOGOUT]: () => null,
});
