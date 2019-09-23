import * as React from 'react';

import {
  ToastMsgContext,
  ToastMsgContextType,
} from 'src/models/providers/toast-msg';

export default function useToastMsg() {
  return React.useContext<ToastMsgContextType>(ToastMsgContext);
}
