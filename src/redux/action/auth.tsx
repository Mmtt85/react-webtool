import * as Types from 'src/constants/redux-type';

export function loginAction(payload: string) {
  return {
    type: Types.LOGIN,
    payload,
  };
}

export function logoutAction() {
  return {
    type: Types.LOGOUT,
  };
}
