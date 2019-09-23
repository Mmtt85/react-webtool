import * as Types from 'src/redux';
import { createActions } from 'redux-actions';

export const { rootFilter } = createActions({
  [Types.ROOT_FILTER]: (payload: boolean) => payload,
});
