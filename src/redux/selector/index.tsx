import { RecRootState } from 'src/configurations/redux-store';
import { UserCardModel } from 'src/components/models/user-card/interface';

export const selectLoginAccount = (state: RecRootState): UserCardModel =>
  state.getIn(['auth', 'account']);

export const selectRoot = (state: RecRootState) =>
  state.getIn(['styles', 'root']);
