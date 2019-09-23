import { Record } from 'immutable';

import * as Types from 'src/redux';
import { CommonActions } from '.';

interface StylesState {
  root: { filter: boolean };
}

export interface RecStylesState extends Record<StylesState>, StylesState {}

interface RootFilterAction {
  type: typeof Types.ROOT_FILTER;
  payload: boolean;
}

export type StylesActions = CommonActions | RootFilterAction;
