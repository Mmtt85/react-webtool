import { Record } from 'immutable';

import { RecMember } from 'src/models/records/member';

import * as Types from 'src/redux';
import { CommonActions } from '.';

interface AuthState {
  account: RecMember | null;
}

export interface RecAuthState extends Record<AuthState>, AuthState {}

interface LoginAction {
  type: typeof Types.LOGIN;
  payload: RecMember;
}

interface LogoutAction {
  type: typeof Types.LOGOUT;
}

export type AuthActions = CommonActions | LoginAction | LogoutAction;
