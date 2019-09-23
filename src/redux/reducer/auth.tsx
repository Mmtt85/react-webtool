import { Record } from 'immutable';
import { handleActions } from 'redux-actions';

import * as Types from 'src/redux';
import { LoginAction, RecAuthState } from 'src/redux/interface/auth';

const defaultState = Record({
  account: null,
})();

const authReducer = handleActions(
  {
    [Types.LOGIN]: (state: RecAuthState, action: LoginAction) =>
      state.setIn(['account'], action.payload),
    [Types.LOGOUT]: (state: RecAuthState) => state.setIn(['account'], null),
    [Types.RESET_REDUX]: (state: RecAuthState) => state,
  },
  defaultState,
);

export default authReducer;
