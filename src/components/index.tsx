import * as React from 'react';
import * as Redux from 'react-redux';
import Favicon from 'react-favicon';
import styled from 'styled-components';

import Session from 'src/utils/session';
import { ToastMsgProvider } from 'src/providers/toast-msg';
import { selectRoot } from 'src/redux/selector';
import { login } from 'src/redux/action/auth';

import NavBar from 'src/components/nav-bar';
import Body from 'src/components/body';
import ToastMsg from 'src/components/models/toast-msg';

export default function Index() {
  const reduxDispatch = Redux.useDispatch();
  const { blur, title } = Redux.useSelector(selectRoot);

  React.useEffect(() => {
    document.title = title;
  }, [title]);

  React.useEffect(() => {
    if (Session.isLogin()) {
      reduxDispatch(login(Session.getAccount()));
    }
  }, [reduxDispatch]);

  return (
    <StyledRoot isBlur={blur}>
      <Favicon url="http://oflisback.github.io/react-favicon/public/img/github.ico" />
      <ToastMsgProvider>
        <NavBar />
        <Body />
        <ToastMsg />
      </ToastMsgProvider>
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  height: 100%;
  filter: ${({ isBlur }) => (isBlur ? `blur(2px)` : '')}};
`;
