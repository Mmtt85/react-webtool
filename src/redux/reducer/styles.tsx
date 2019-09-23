import { Record } from 'immutable';
import { handleActions } from 'redux-actions';

import * as Types from 'src/redux';
import {
  RecStylesState,
  RootBlurAction,
  RootTitleAction,
} from 'src/redux/interface/styles';

const defaultState = Record({
  root: { blur: false, title: 'Web-Tool' },
})();

const stylesReducer = handleActions(
  {
    [Types.ROOT_BLUR]: (state: RecStylesState, action: RootBlurAction) =>
      state.setIn(['root', 'blur'], action.payload),
    [Types.ROOT_TITLE]: (state: RecStylesState, action: RootTitleAction) =>
      state.setIn(['root', 'title'], action.payload),
    [Types.RESET_REDUX]: (state: RecStylesState) => state,
  },
  defaultState,
);

export default stylesReducer;
