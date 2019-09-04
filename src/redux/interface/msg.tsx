import * as Types from 'src/constants/redux-type';
import { CommonActions } from './index';

export interface MsgState {
  msg: string | null;
}

interface SetMsgAction {
  type: typeof Types.SET_MSG;
  payload: string;
}

interface UnsetMsgAction {
  type: typeof Types.UNSET_MSG;
}

export type MsgActions = CommonActions | SetMsgAction | UnsetMsgAction;
