import * as React from 'react';
import * as BS from 'react-bootstrap';

import history from 'src/configurations/history';

export default function Tools() {
  const gotoPage = React.useCallback(path => history.push(path), []);

  return (
    <BS.NavDropdown title="Tools" id="basic-nav-dropdown">
      <BS.NavDropdown.Item onClick={() => gotoPage('/tools/base64')}>
        <span>Base64</span>
      </BS.NavDropdown.Item>
      <BS.NavDropdown.Item onClick={() => gotoPage('/tools/json-parser')}>
        <span>JsonParser</span>
      </BS.NavDropdown.Item>
      <BS.NavDropdown.Item onClick={() => gotoPage('/tools/make-password')}>
        <span>MakePassword</span>
      </BS.NavDropdown.Item>
    </BS.NavDropdown>
  );
}
