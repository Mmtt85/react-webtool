import { Record } from 'immutable';

import * as Types from 'src/redux';

interface StylesState {
  root: { blur: boolean; title: string };
}

export interface RecStylesState extends Record<StylesState>, StylesState {}

export interface RootBlurAction {
  type: typeof Types.ROOT_BLUR;
  payload: boolean;
}

export interface RootTitleAction {
  type: typeof Types.ROOT_TITLE;
  payload: string;
}
