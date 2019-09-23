import { takeLatest, all, put, call } from 'redux-saga/effects';
import history from 'src/configurations/history';

import * as Types from 'src/redux';
import * as session from 'src/utils/session';
import { resetRedux } from 'src/redux/action';
import { LoginAction } from 'src/redux/interface/auth';

export function* logoutSaga() {
  try {
    yield all([
      call(() => history.push('/')),
      put(resetRedux()),
      call(session.logout),
    ]);
  } catch (e) {
    console.log(e);
  }
}

export function* loginSaga(action: LoginAction) {
  try {
    yield call(() => session.login(action.payload));
  } catch (e) {
    console.log(e);
  }
}

export default function* saga() {
  yield takeLatest(Types.LOGOUT, logoutSaga);
  yield takeLatest(Types.LOGIN, loginSaga);
}
