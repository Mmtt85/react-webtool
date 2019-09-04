import * as React from 'react';
import { NavDropdown } from 'react-bootstrap';
import history from 'history';

const Users = () => {
  const gotoPage = React.useCallback(path => history.push(path), []);

  return (
    <NavDropdown title="Users" id="basic-nav-dropdown">
      <NavDropdown.Item onClick={() => gotoPage('/members/search')}>
        <span>search</span>
      </NavDropdown.Item>
      <NavDropdown.Item onClick={() => gotoPage('/members/seat')}>
        <span>seat</span>
      </NavDropdown.Item>
      <NavDropdown.Item onClick={() => gotoPage('/members/survey')}>
        <span>survey</span>
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default Users;
