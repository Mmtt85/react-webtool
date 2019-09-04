import * as React from 'react';
import { Navbar, Nav, Toast } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { selectMsg } from 'src/redux/selector';
import { unsetMsgAction } from 'src/redux/action/msg';

import Tools from './tools';
import Users from './users';
import UserInfo from './user-info';

const NavBar = () => {
  const reduxDispatch = useDispatch();
  const { msg } = useSelector(selectMsg);
  const hideToast = React.useCallback(() => {
    reduxDispatch(unsetMsgAction());
  }, [reduxDispatch]);

  return (
    <Navbar bg="info" expand="md" variant="dark">
      <Navbar.Brand href="/">
        <span>Web-Tools</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="nav-collapse" />
      <Navbar.Collapse id="nav-collapse">
        <Nav className="mr-auto">
          <Tools />
          <Users />
          <Toast className="ml-5" onClose={hideToast} show={!!msg} autohide>
            <Toast.Header>{msg}</Toast.Header>
          </Toast>
        </Nav>
        <Nav>
          <UserInfo />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
