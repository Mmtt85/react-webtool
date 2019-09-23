import { Record } from 'immutable';

import { RecMember } from 'src/models/records/member';

import * as Types from 'src/redux';

interface AuthState {
  account: RecMember | null;
}

export interface RecAuthState extends Record<AuthState>, AuthState {}

export interface LoginAction {
  type: typeof Types.LOGIN;
  payload: RecMember;
}

export interface LogoutAction {
  type: typeof Types.LOGOUT;
}
