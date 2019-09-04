import * as Types from 'src/constants/redux-type';
import { CommonActions } from './index';

export interface AuthState {
  id: string | null;
}

interface LoginAction {
  type: typeof Types.LOGIN;
  payload: string;
}

interface LogoutAction {
  type: typeof Types.LOGOUT;
}
export type AuthActions = CommonActions | LoginAction | LogoutAction;
