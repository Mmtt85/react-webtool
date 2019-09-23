import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import createSagaMiddleware from 'redux-saga';
import { fromJS, Record } from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { RecAuthState } from 'src/redux/interface/auth';
import { RecStylesState } from 'src/redux/interface/styles';
import auth from 'src/redux/reducer/auth';
import styles from 'src/redux/reducer/styles';
import authSaga from 'src/redux/saga/auth';

const sagaMiddleware = createSagaMiddleware();

interface RootState {
  auth: RecAuthState;
  styles: RecStylesState;
}

export interface RecRootState extends Record<RootState>, RootState {}

const combine = combineReducers<RootState>({
  auth,
  styles,
});

const store = createStore(
  combine,
  fromJS({}),
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(authSaga);

export default store;
