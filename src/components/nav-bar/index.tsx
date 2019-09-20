import * as React from 'react';
import * as BS from 'react-bootstrap';

import Tools from './tools';
import Users from './users';
import UserInfo from './user-info';

export default function NavBar() {
  return (
    <BS.Navbar bg="info" expand="md" variant="dark">
      <BS.Navbar.Brand href="/">
        <span>Web-Tools</span>
      </BS.Navbar.Brand>
      <BS.Navbar.Toggle aria-controls="nav-collapse" />
      <BS.Navbar.Collapse id="nav-collapse">
        <BS.Nav className="mr-auto">
          <Tools />
          <Users />
        </BS.Nav>
        <BS.Nav>
          <UserInfo />
        </BS.Nav>
      </BS.Navbar.Collapse>
    </BS.Navbar>
  );
}
