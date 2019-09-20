import * as Types from 'src/constants/redux-type';
import { Record } from 'immutable';
import { CommonActions } from './index';

interface AuthState {
  id: string | null;
}

export interface RecAuthState extends Record<AuthState>, AuthState {}

interface LoginAction {
  type: typeof Types.LOGIN;
  payload: string;
}

interface LogoutAction {
  type: typeof Types.LOGOUT;
}

export type AuthActions = CommonActions | LoginAction | LogoutAction;
