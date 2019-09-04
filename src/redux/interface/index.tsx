import * as Types from 'src/constants/redux-type';

interface ResetAction {
  type: typeof Types.RESET;
}

export type CommonActions = ResetAction;
