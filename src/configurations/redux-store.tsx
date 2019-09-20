import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import createSagaMiddleware from 'redux-saga';
import { fromJS, Record } from 'immutable';

import { RecAuthState } from 'src/redux/interface/auth';
import { RecStylesState } from 'src/redux/interface/styles';
import auth from 'src/redux/reducer/auth';
import styles from 'src/redux/reducer/styles';

const middleWares = [createSagaMiddleware()];
const appliedMiddleWares = applyMiddleware(...middleWares);
const composedEnhancers = compose(appliedMiddleWares);

interface RootState {
  auth: RecAuthState;
  styles: RecStylesState;
}

export interface RecRootState extends Record<RootState>, RootState {}

const combine = combineReducers<RootState>({
  auth,
  styles,
});

export default createStore(combine, fromJS({}), composedEnhancers);
