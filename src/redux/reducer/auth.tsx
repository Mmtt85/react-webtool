import { Record } from 'immutable';

import * as Types from 'src/redux';
import { AuthActions, RecAuthState } from 'src/redux/interface/auth';

const initState = Record({
  account: null,
})();

export default function authReducer(
  state: RecAuthState = initState,
  action: AuthActions,
) {
  switch (action.type) {
    case Types.LOGIN:
      return state.setIn(['account'], action.payload);
    case Types.LOGOUT:
      return state.setIn(['account'], null);
    case Types.RESET:
    default:
      return state;
  }
}
