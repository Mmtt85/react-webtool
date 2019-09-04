import * as Types from 'src/constants/redux-type';
import { MsgActions, MsgState } from 'src/redux/interface/msg';

const initState = {
  msg: null,
};

export const msgReducer = (state: MsgState = initState, action: MsgActions) => {
  switch (action.type) {
    case Types.SET_MSG:
      return { ...state, msg: action.payload };
    case Types.UNSET_MSG:
      return { ...state, msg: null };
    case Types.RESET:
    default:
      return state;
  }
};
export default msgReducer;
