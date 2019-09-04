import * as Types from 'src/constants/redux-type';

export const setMsgAction = (payload: string) => ({
  type: Types.SET_MSG,
  payload,
});

export const unsetMsgAction = () => ({
  type: Types.UNSET_MSG,
});
