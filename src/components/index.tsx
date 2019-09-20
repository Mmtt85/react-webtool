import * as React from 'react';
import * as Redux from 'react-redux';

import { StyledRoot } from 'src/styles';

import { ToastMsgProvider } from 'src/providers/toast-msg';
import { selectRootFilter } from 'src/redux/selector';

import NavBar from 'src/components/nav-bar';
import Body from 'src/components/body';
import ToastMsg from 'src/components/common/toast-msg';

export default function Index() {
  const isBlur = Redux.useSelector(selectRootFilter);

  return (
    <StyledRoot blur={isBlur}>
      <ToastMsgProvider>
        <NavBar />
        <Body />
        <ToastMsg />
      </ToastMsgProvider>
    </StyledRoot>
  );
}
