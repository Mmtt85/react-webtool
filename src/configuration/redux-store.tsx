import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { AuthState } from 'src/redux/interface/auth';
import { MsgState } from 'src/redux/interface/msg';
import auth from 'src/redux/reducer/auth';
import msg from 'src/redux/reducer/msg';

const middleWares = [createSagaMiddleware()];
const appliedMiddleWares = applyMiddleware(...middleWares);
const composedEnhancers = compose(appliedMiddleWares);

export interface RootState {
  auth: AuthState;
  msg: MsgState;
}

const combine = combineReducers<RootState>({
  auth,
  msg,
});

export default createStore(combine, composedEnhancers);
