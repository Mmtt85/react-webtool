import * as Types from 'src/redux';
import { createActions } from 'redux-actions';

export const { rootBlur, rootTitle } = createActions({
  [Types.ROOT_BLUR]: (payload: boolean) => payload,
  [Types.ROOT_TITLE]: (payload: string) => payload,
});
