import * as React from 'react';
import * as BS from 'react-bootstrap';

import * as WT from 'src/hooks';

export default function Users() {
  const { gotoPage } = WT.useHistory();

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
