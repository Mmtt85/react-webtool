import { Record } from 'immutable';

import * as Types from 'src/constants/redux-type';
import { AuthActions, RecAuthState } from 'src/redux/interface/auth';

const initState = Record({
  id: null,
})();

export default function authReducer(
  state: RecAuthState = initState,
  action: AuthActions,
) {
  switch (action.type) {
    case Types.LOGIN:
      return state.setIn(['id'], action.payload);
    case Types.LOGOUT:
      return state.setIn(['id'], null);
    case Types.RESET:
    default:
      return state;
  }
}
