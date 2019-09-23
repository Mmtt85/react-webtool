import { Record } from 'immutable';
import { handleActions } from 'redux-actions';

import * as Types from 'src/redux';
import { RecStylesState, RootFilterAction } from 'src/redux/interface/styles';

const defaultState = Record({
  root: { filter: false },
})();

const stylesReducer = handleActions(
  {
    [Types.ROOT_FILTER]: (state: RecStylesState, action: RootFilterAction) =>
      state.setIn(['root', 'filter'], action.payload),
    [Types.RESET_REDUX]: (state: RecStylesState) => state,
  },
  defaultState,
);

export default stylesReducer;
