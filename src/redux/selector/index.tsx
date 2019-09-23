import { RecRootState } from 'src/configurations/redux-store';

export const selectLoginAccount = (state: RecRootState) =>
  state.getIn(['auth', 'account']);

export const selectRootFilter = (state: RecRootState) =>
  state.getIn(['styles', 'root', 'filter']);
