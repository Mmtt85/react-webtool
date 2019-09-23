import { Record } from 'immutable';

import * as Types from 'src/redux';

interface StylesState {
  root: { filter: boolean };
}

export interface RecStylesState extends Record<StylesState>, StylesState {}

export interface RootFilterAction {
  type: typeof Types.ROOT_FILTER;
  payload: boolean;
}
