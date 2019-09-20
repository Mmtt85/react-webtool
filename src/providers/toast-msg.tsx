import * as React from 'react';
import { List } from 'immutable';
import _ from 'lodash';

import { Action } from 'src/hooks/type';

export interface Toast {
  id?: number;
  title?: string;
  body: React.ReactNode;
}

type ToastList = List<Toast>;

interface State {
  toastList: ToastList;
}

interface Props {
  children: React.ReactNode;
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'addToast':
      const id =
        (state.toastList.size &&
          _.max(state.toastList.map(toast => toast.id).toJS())) + 1;
      return {
        ...state,
        toastList: state.toastList.push({
          ...action.payload,
          id,
        }),
      };
    case 'removeToast':
      return {
        ...state,
        toastList: state.toastList.filter(toast => toast.id !== action.payload),
      };
    case 'removeAll':
      return { ...state, toastList: List() };
    default:
      throw new Error('Cannot found state reducer key in ToastMsgProvider.');
  }
}

export function ToastMsgProvider({ children }: Props) {
  const [{ toastList }, dispatch] = React.useReducer(reducer, {
    toastList: List(),
  });

  const addToast = React.useCallback(
    (toast: Toast) => dispatch({ type: 'addToast', payload: toast }),
    [],
  );

  const removeToast = React.useCallback(
    (id: number) => dispatch({ type: 'removeToast', payload: id }),
    [],
  );

  const removeAll = React.useCallback(
    () => dispatch({ type: 'removeAll' }),
    [],
  );

  return (
    <ToastMsgContext.Provider
      value={{ toastList, addToast, removeToast, removeAll }}
    >
      {children}
    </ToastMsgContext.Provider>
  );
}

export interface ToastMsgContextType {
  toastList: ToastList;
  addToast: (toast: Toast) => void;
  removeToast: (id: number) => void;
  removeAll: () => void;
}

export const ToastMsgContext = React.createContext<ToastMsgContextType>({
  toastList: List(),
  addToast: () => {
    throw new Error('Cannot found ToastMsgProvider.');
  },
  removeToast: () => {
    throw new Error('Cannot found ToastMsgProvider.');
  },
  removeAll: () => {
    throw new Error('Cannot found ToastMsgProvider.');
  },
});
