import { RecRootState } from 'src/configurations/redux-store';

export function selectAuth(state: RecRootState) {
  return state.getIn(['auth']);
}

export function selectRootFilter(state: RecRootState) {
  return state.getIn(['styles', 'root', 'filter']);
}
