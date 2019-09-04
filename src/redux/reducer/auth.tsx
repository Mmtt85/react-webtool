import * as Types from 'src/constants/redux-type';
import { AuthActions, AuthState } from 'src/redux/interface/auth';

const initState = {
  id: null,
};

export const authReducer = (
  state: AuthState = initState,
  action: AuthActions,
) => {
  switch (action.type) {
    case Types.LOGIN:
      return { ...state, id: action.payload };
    case Types.LOGOUT:
      return { ...state, id: null };
    case Types.RESET:
    default:
      return state;
  }
};
export default authReducer;
