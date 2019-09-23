import { createActions } from 'redux-actions';

import * as Types from 'src/redux';

export const { resetRedux } = createActions({
  [Types.RESET_REDUX]: () => null,
});
