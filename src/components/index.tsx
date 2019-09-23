import Favicon from 'react-favicon';
import * as React from 'react';
import * as Redux from 'react-redux';

import { StyledRoot } from 'src/static/styles';

import * as session from 'src/utils/session';

import { ToastMsgProvider } from 'src/models/providers/toast-msg';

import { selectRootFilter } from 'src/redux/selector';

import NavBar from 'src/components/nav-bar';
import Body from 'src/components/body';
import ToastMsg from 'src/components/common/toast-msg';
import { login } from 'src/redux/action/auth';

export default function Index() {
  const reduxDispatch = Redux.useDispatch();
  const isBlur = Redux.useSelector(selectRootFilter);

  React.useEffect(() => {
    if (session.isLogin()) {
      reduxDispatch(login(session.getAccount()));
    }
  }, [reduxDispatch]);

  return (
    <StyledRoot isBlur={isBlur}>
      <Favicon url="http://oflisback.github.io/react-favicon/public/img/github.ico" />
      <ToastMsgProvider>
        <NavBar />
        <Body />
        <ToastMsg />
      </ToastMsgProvider>
    </StyledRoot>
  );
}
