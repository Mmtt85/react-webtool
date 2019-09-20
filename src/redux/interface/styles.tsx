import * as Types from 'src/constants/redux-type';
import { Record } from 'immutable';
import { CommonActions } from './index';

interface StylesState {
  root: { filter: boolean };
}

export interface RecStylesState extends Record<StylesState>, StylesState {}

interface RootFilterAction {
  type: typeof Types.ROOT_FILTER;
  payload: boolean;
}

export type StylesActions = CommonActions | RootFilterAction;
