import { RecMember } from 'src/models/records/member';

import * as Types from 'src/redux';

export function loginAction(payload: RecMember) {
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
