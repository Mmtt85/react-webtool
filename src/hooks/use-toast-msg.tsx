import * as React from 'react';

import { ToastMsgContext, ToastMsgContextType } from 'src/providers/toast-msg';

const useToastMsg = () =>
  React.useContext<ToastMsgContextType>(ToastMsgContext);

export default useToastMsg;
