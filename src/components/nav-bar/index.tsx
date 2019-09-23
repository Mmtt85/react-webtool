import * as React from 'react';
import * as Redux from 'react-redux';
import * as BS from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import { selectLoginAccount } from 'src/redux/selector';

import Tools from './tools';
import Users from './users';
import UserInfo from './user-info';

export default function NavBar() {
  const loginAccount = Redux.useSelector(selectLoginAccount);

  return (
    <BS.Navbar bg="info" expand="md" variant="dark">
      <BS.Navbar.Brand href="/">
        <FontAwesomeIcon icon={faHome} />
      </BS.Navbar.Brand>
      <BS.Navbar.Toggle aria-controls="nav-collapse" />
      <BS.Navbar.Collapse id="nav-collapse">
        <BS.Nav className="mr-auto">
          <Tools />
          {loginAccount && <Users />}
        </BS.Nav>
        <BS.Nav>
          <UserInfo />
        </BS.Nav>
      </BS.Navbar.Collapse>
    </BS.Navbar>
  );
}
