import * as React from 'react';
import { Button, NavItem, DropdownButton, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { selectAuth } from 'src/redux/selector';
import { loginAction, logoutAction } from 'src/redux/action/auth';
import { setMsgAction } from 'src/redux/action/msg';

const UserInfo = () => {
  const reduxDispatch = useDispatch();
  const { id } = useSelector(selectAuth);

  const tempLogin = React.useCallback(() => {
    reduxDispatch(loginAction('tempLogin'));
    reduxDispatch(setMsgAction('login success.'));
  }, [reduxDispatch]);

  const logout = React.useCallback(() => {
    reduxDispatch(logoutAction());
    reduxDispatch(setMsgAction('logout success.'));
  }, [reduxDispatch]);

  return (
    <NavItem>
      {id ? (
        <DropdownButton
          id="user-info"
          variant="info"
          size="sm"
          title={id}
          alignRight
        >
          <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
        </DropdownButton>
      ) : (
        <Button variant="info" size="sm" onClick={tempLogin}>
          Login
        </Button>
      )}
    </NavItem>
  );
};

export default UserInfo;
