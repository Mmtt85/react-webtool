import * as Types from 'src/constants/redux-type';

export const loginAction = (payload: string) => ({
  type: Types.LOGIN,
  payload,
});

export const logoutAction = () => ({
  type: Types.LOGOUT,
});
