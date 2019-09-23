import { Record } from 'immutable';

import * as Types from 'src/redux';
import { RecStylesState, StylesActions } from 'src/redux/interface/styles';

const initState = Record({
  root: { filter: false },
})();

export default function stylesReducer(
  state: RecStylesState = initState,
  action: StylesActions,
) {
  switch (action.type) {
    case Types.ROOT_FILTER:
      return state.setIn(['root', 'filter'], action.payload);
    case Types.RESET:
    default:
      return state;
  }
}
