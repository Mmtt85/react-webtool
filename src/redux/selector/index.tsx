import { RootState } from 'src/configuration/redux-store';

export const selectAuth = (state: RootState) => state.auth;
export const selectMsg = (state: RootState) => state.msg;
