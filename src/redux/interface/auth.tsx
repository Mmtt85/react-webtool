import { Record } from 'immutable';

import * as Types from 'src/redux';

import { UserCardModel } from 'src/components/models/user-card/interface';

interface AuthState {
  account: UserCardModel | null;
}

export interface RecAuthState extends Record<AuthState>, AuthState {}

export interface LoginAction {
  type: typeof Types.LOGIN;
  payload: UserCardModel;
}

export interface LogoutAction {
  type: typeof Types.LOGOUT;
}
