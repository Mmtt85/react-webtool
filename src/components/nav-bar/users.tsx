import * as React from 'react';
import * as BS from 'react-bootstrap';

import history from 'src/configurations/history';

export default function Users() {
  const gotoPage = React.useCallback(path => history.push(path), []);

  return (
    <BS.NavDropdown title="Users" id="basic-nav-dropdown">
      <BS.NavDropdown.Item onClick={() => gotoPage('/members/search')}>
        <span>search</span>
      </BS.NavDropdown.Item>
      <BS.NavDropdown.Item onClick={() => gotoPage('/members/seat')}>
        <span>seat</span>
      </BS.NavDropdown.Item>
      <BS.NavDropdown.Item onClick={() => gotoPage('/members/survey')}>
        <span>survey</span>
      </BS.NavDropdown.Item>
    </BS.NavDropdown>
  );
}
